import { profile, stats, skillGroups, projects, experience } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-text">
          {profile.name.split(" ")[0].toLowerCase()}<span className="text-copper">.</span>
        </a>
        <nav className="hidden gap-6 sm:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href={profile.resumeUrl}
          className="border border-line px-3 py-1.5 text-sm text-text transition-colors hover:border-copper hover:text-copper"
        >
          Resume
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="grid-fade pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-5xl gap-10 px-6 py-24 sm:py-32 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-mono text-sm text-teal">{profile.role}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {profile.tagline}
          </h1>
          <p className="mt-6 max-w-md text-muted">
            {profile.name} · based in {profile.location}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="bg-copper px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="border border-line px-5 py-2.5 text-sm text-text transition-colors hover:border-teal hover:text-teal"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="border border-line bg-panel/60 p-5 font-mono text-sm">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-baseline justify-between py-3 ${
                i !== stats.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <span className="text-muted">{s.label}</span>
              <span className="text-text">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl border-b border-line px-6 py-16">
      <SectionHeading title="About" />
      <p className="max-w-2xl text-lg leading-relaxed text-muted">
        Replace this with a few sentences on how you got into computer vision and embedded
        systems, what kind of problems you like solving (perception, control loops, getting
        models to run fast on constrained hardware), and what you&apos;re looking for next.
        Keep it specific — mention real boards, real tools, real projects, not adjectives.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl border-b border-line px-6 py-16">
      <SectionHeading title="Skills" />
      <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category} className="bg-bg p-6">
            <h3 className="text-sm font-medium text-teal">{group.category}</h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="font-mono text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl border-b border-line px-6 py-16">
      <SectionHeading title="Projects" />
      <div className="flex flex-col gap-6">
        {projects.map((p) => (
          <article key={p.slug} className="border border-line bg-panel/40 p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">{p.role}</p>
              </div>
              <div className="flex gap-3">
                {p.repoUrl && (
                  <a
                    href={p.repoUrl}
                    className="border border-line px-3 py-1.5 text-xs text-text hover:border-copper hover:text-copper"
                  >
                    Repo ↗
                  </a>
                )}
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    className="border border-line px-3 py-1.5 text-xs text-text hover:border-teal hover:text-teal"
                  >
                    Demo ↗
                  </a>
                )}
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-muted">{p.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="border border-line px-2 py-1 font-mono text-xs text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
              {p.specs.map((s) => (
                <div key={s.label} className="bg-panel-2 px-4 py-3">
                  <p className="font-mono text-xs text-muted">{s.label}</p>
                  <p className="mt-1 text-sm text-text">{s.value}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 border-l-2 border-teal pl-4 text-sm text-muted">{p.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl border-b border-line px-6 py-16">
      <SectionHeading title="Experience" />
      <div className="flex flex-col">
        {experience.map((e) => (
          <div
            key={`${e.title}-${e.period}`}
            className="grid gap-1 border-t border-line py-6 sm:grid-cols-[160px_1fr]"
          >
            <p className="font-mono text-sm text-muted">{e.period}</p>
            <div>
              <p className="font-medium">
                {e.title} <span className="text-muted">— {e.org}</span>
              </p>
              <p className="mt-1 text-sm text-muted">{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading title="Contact" />
      <p className="max-w-md text-muted">
        Open to roles in computer vision, embedded ML, and robotics. The fastest way to reach
        me is email.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="bg-copper px-5 py-2.5 text-sm font-medium text-bg hover:opacity-90"
        >
          {profile.email}
        </a>
        <a
          href={profile.github}
          className="border border-line px-5 py-2.5 text-sm text-text hover:border-teal hover:text-teal"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          className="border border-line px-5 py-2.5 text-sm text-text hover:border-teal hover:text-teal"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <p className="mx-auto max-w-5xl font-mono text-xs text-muted">
        {profile.name} · built with Next.js · deployed on Vercel
      </p>
    </footer>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <span className="h-px flex-1 bg-line" aria-hidden />
    </div>
  );
}
