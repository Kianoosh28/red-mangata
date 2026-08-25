import Container from "./Container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="pb-16 pt-36 sm:pb-20 sm:pt-44">
      <Container width="text">
        {eyebrow ? (
          <span className="text-label text-accent">{eyebrow}</span>
        ) : null}
        <h1 className="text-page-title mt-4">{title}</h1>
        {description ? (
          <p className="text-body-lg mt-6 max-w-2xl text-text-muted">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
