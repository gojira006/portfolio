"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/data";

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], [projects]);
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);
  return <div>
    <div className="filter-bar" role="tablist" aria-label="Project categories">{categories.map((cat) => <button key={cat} role="tab" aria-selected={active === cat} onClick={() => setActive(cat)} className={active === cat ? "active" : ""}>{cat}</button>)}</div>
    <div className="project-list">{visible.map((p, index) => <article key={p.slug} className="project-card"><div className="project-index">{String(index + 1).padStart(2, "0")}</div><div className="project-main"><div className="flex flex-wrap items-start justify-between gap-5"><div><p className="font-mono text-xs uppercase tracking-wider text-teal">{p.category}</p><h3>{p.title}</h3><p className="mt-2 text-sm text-muted">{p.role}</p></div><div className="flex gap-2">{p.repoUrl && <a href={p.repoUrl} className="project-link">Code ↗</a>}{p.demoUrl && <a href={p.demoUrl} className="project-link">Live ↗</a>}</div></div><p className="project-summary">{p.summary}</p><div className="flex flex-wrap gap-2">{p.stack.map((s) => <span key={s} className="tech-pill">{s}</span>)}</div><div className="project-specs">{p.specs.map((s) => <div key={s.label}><span>{s.label}</span><strong>{s.value}</strong></div>)}</div><p className="project-outcome"><span>Outcome</span>{p.outcome}</p></div></article>)}</div>
  </div>;
}
