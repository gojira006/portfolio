# Portfolio

Built with Next.js + Tailwind CSS.

## Edit your content
Everything text-based (name, projects, skills, experience) lives in one file:

    src/lib/data.ts

Add a photo/resume by dropping files into `public/` (e.g. `public/resume.pdf`, `public/projects/my-photo.jpg`) and referencing them in `src/lib/data.ts`.

## Run locally
    npm install
    npm run dev
Visit http://localhost:3000

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. Go to vercel.com, sign in with GitHub, click "Add New Project", pick the repo.
3. Leave settings as default (Vercel auto-detects Next.js) and click Deploy.
4. Every future `git push` to `main` auto-redeploys.
