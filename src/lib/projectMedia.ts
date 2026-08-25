import { readdir } from "node:fs/promises";
import path from "node:path";
import { imageSizeFromFile } from "image-size/fromFile";
import type { GalleryImage, ImageAsset, Project } from "@/content/projects";

/**
 * Resolves each project's cover + gallery directly from
 * /public/images/projects/<imageFolder>/ at render time, per the asset
 * convention: a file named "cover" (any supported extension) is the cover,
 * every other supported image is a gallery image, sorted in natural
 * filename order (1, 2, ..., 10, 11) with the cover excluded.
 *
 * Server-only (uses node:fs) — call from Server Components/pages only.
 */

const PROJECTS_DIR = path.join(process.cwd(), "public", "images", "projects");
const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
/** Gallery images at or above this aspect ratio span both masonry columns instead of being squeezed into one. */
const WIDE_BANNER_ASPECT_RATIO = 2;

function isSupportedImage(filename: string): boolean {
  return SUPPORTED_EXTENSIONS.has(path.extname(filename).toLowerCase());
}

function isCoverFilename(filename: string): boolean {
  return path.basename(filename, path.extname(filename)).trim().toLowerCase() === "cover";
}

/** Natural filename order: numeric runs compare by value ("2" < "10"), independent of extension. */
function compareFilenamesNaturally(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

async function listProjectFiles(imageFolder: string): Promise<string[]> {
  try {
    const entries = await readdir(path.join(PROJECTS_DIR, imageFolder));
    return entries.filter(isSupportedImage);
  } catch {
    return [];
  }
}

async function toImageAsset(imageFolder: string, filename: string, alt: string): Promise<GalleryImage> {
  const filePath = path.join(PROJECTS_DIR, imageFolder, filename);
  const { width = 1600, height = 1000 } = await imageSizeFromFile(filePath);
  return {
    src: `/images/projects/${imageFolder}/${filename}`,
    alt,
    width,
    height,
    layout: width / height >= WIDE_BANNER_ASPECT_RATIO ? "full" : "half",
  };
}

/** Cover only — cheap lookup for listing contexts (homepage, /work grid, project hero). */
export async function getProjectCover(project: Pick<Project, "imageFolder" | "title">): Promise<ImageAsset | undefined> {
  const files = await listProjectFiles(project.imageFolder);
  const coverFile = files.find(isCoverFilename);
  if (!coverFile) return undefined;
  return toImageAsset(project.imageFolder, coverFile, `${project.title} — cover artwork`);
}

/** A specific non-cover gallery image, matched by filename without extension (e.g. "8" matches "8.png"). */
export async function getProjectImageByName(
  project: Pick<Project, "imageFolder" | "title">,
  name: string
): Promise<ImageAsset | undefined> {
  const files = await listProjectFiles(project.imageFolder);
  const target = name.trim().toLowerCase();
  const match = files.find(
    (file) => path.basename(file, path.extname(file)).trim().toLowerCase() === target
  );
  if (!match) return undefined;
  return toImageAsset(project.imageFolder, match, `${project.title} artwork`);
}

/** Cover + full gallery — for the project detail page. */
export async function getProjectMedia(
  project: Pick<Project, "imageFolder" | "title">
): Promise<{ heroImage?: ImageAsset; gallery: GalleryImage[] }> {
  const files = await listProjectFiles(project.imageFolder);
  const coverFile = files.find(isCoverFilename);
  const galleryFiles = files
    .filter((file) => file !== coverFile)
    .sort(compareFilenamesNaturally);

  const [heroImage, gallery] = await Promise.all([
    coverFile
      ? toImageAsset(project.imageFolder, coverFile, `${project.title} — cover artwork`)
      : Promise.resolve(undefined),
    Promise.all(galleryFiles.map((file) => toImageAsset(project.imageFolder, file, `${project.title} artwork`))),
  ]);

  return { heroImage, gallery };
}

/** Attaches the resolved cover image to a project, for listing contexts. */
export async function withCover<T extends Pick<Project, "imageFolder" | "title">>(
  project: T
): Promise<T & { heroImage?: ImageAsset }> {
  const heroImage = await getProjectCover(project);
  return { ...project, heroImage };
}

/** Attaches the resolved cover + gallery to a project, for the detail page. */
export async function withMedia<T extends Pick<Project, "imageFolder" | "title">>(
  project: T
): Promise<T & { heroImage?: ImageAsset; gallery: GalleryImage[] }> {
  const media = await getProjectMedia(project);
  return { ...project, ...media };
}
