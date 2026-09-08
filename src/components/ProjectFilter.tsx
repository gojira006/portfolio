"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/data";

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const [active, setActive] = useState<string>("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`border px-3 py-1.5 text-sm transition-colors ${
              active === cat
                ? "border-copper text-copper"
                : "border-line text-muted hover:text-text"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {visible.map((p) => (
          <article key={p.slug} className="border border-line bg-panel/40 p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-teal">{p.category}</p>
                <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
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
                <span key={s} className="border border-line px-2 py-1 font-mono text-xs text-muted">
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

        {visible.length === 0 && (
          <p className="text-sm text-muted">No projects in this category yet.</p>
        )}
      </div>
    </div>
  );
}
