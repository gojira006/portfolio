import { profile, stats, skillGroups, focusAreas, projects, experience, education } from "@/lib/data";
import Image from "next/image";
import ProjectFilter from "@/components/ProjectFilter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <FocusAreas />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    ["About", "#about"],
    ["What I do", "#focus"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Education", "#education"],
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

        <div>
          <div className="relative mb-6 h-44 w-44">
            {/* corner marks, like a CV bounding box */}
            <span className="absolute -left-2 -top-2 h-5 w-5 border-l-2 border-t-2 border-copper" />
            <span className="absolute -right-2 -top-2 h-5 w-5 border-r-2 border-t-2 border-copper" />
            <span className="absolute -bottom-2 -left-2 h-5 w-5 border-b-2 border-l-2 border-copper" />
            <span className="absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 border-copper" />
            <div className="h-full w-full overflow-hidden border border-line">
              <Image
                src={profile.photo}
                alt={profile.name}
                width={176}
                height={176}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="border border-line bg-panel/60 p-5 font-mono text-sm">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-1 py-3 ${
                  i !== stats.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <span className="text-muted">{s.label}</span>
                <span className="text-text">{s.value}</span>
              </div>
            ))}
          </div>
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
      I got into computer vision and embedded systems wanting to build things that could 
      actually sense and react to the physical world, not just run in a browser tab. That's 
      led me to work across perception and control — training and deploying object detection 
      models on constrained hardware like the NVIDIA Jetson Nano, and building sensor-driven 
      control systems on Arduino with PID and RTOS. What I like most is the intersection of 
      the two: getting a model fast and lightweight enough to make real-time decisions on 
      limited hardware, not just accurate on a validation set. I'm currently looking for 
      opportunities to go deeper on that — production-grade edge AI, robotics, or embedded 
      ML roles where I can stay close to the hardware.
      </p>
    </section>
  );
}

function FocusAreas() {
  return (
    <section id="focus" className="mx-auto max-w-5xl border-b border-line px-6 py-16">
      <SectionHeading title="What I do" />
      <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
        {focusAreas.map((area) => (
          <div key={area.title} className="flex flex-col bg-bg p-6">
            <h3 className="font-medium">{area.title}</h3>
            <p className="mt-2 text-sm text-muted">{area.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {area.tools.map((t) => (
                <span key={t} className="border border-line px-2 py-1 font-mono text-xs text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
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
      <ProjectFilter projects={projects} />
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

function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl border-b border-line px-6 py-16">
      <SectionHeading title="Education" />
      <div className="flex flex-col">
        {education.map((e) => (
          <div
            key={`${e.degree}-${e.period}`}
            className="grid gap-1 border-t border-line py-6 sm:grid-cols-[160px_1fr]"
          >
            <p className="font-mono text-sm text-muted">{e.period}</p>
            <div>
              <p className="font-medium">
                {e.degree} <span className="text-muted">— {e.school}</span>
              </p>
              {e.description && <p className="mt-1 text-sm text-muted">{e.description}</p>}
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
