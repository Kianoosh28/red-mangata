Each subfolder here corresponds to one project's "imageFolder" value in
src/content/projects.ts. To add real artwork for a project:

1. Drop image files into the matching folder, e.g.
   public/images/projects/ario/hero.jpg
   public/images/projects/ario/gallery-01.jpg

2. In src/content/projects.ts, set that project's `heroImage` and/or add
   entries to its `gallery` array, referencing the path starting with
   "/images/projects/...", e.g.:

   heroImage: { src: "/images/projects/ario/hero.jpg", alt: "Ario — character concept" }

No component changes are needed — pages read directly from this file.
Until an image is set, the site shows an elegant placeholder instead.
