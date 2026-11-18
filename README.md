# seanpedrick-case.github.io

Personal portfolio site, served by GitHub Pages at
[https://seanpedrick-case.github.io](https://seanpedrick-case.github.io).

This repository has the special name `<username>.github.io`, so GitHub
automatically publishes its contents as a website. It is a plain static site
(no build step): edit the files, commit, push, and the site updates within a
minute or two.

## Structure

- `index.html` — home page (hero, projects, latest posts, about, contact)
- `blog.html` — blog index, lists all posts
- `assets/css/style.css` — all styling
- `assets/js/projects.js` — **the project list**; edit this to add or change projects
- `assets/js/posts.js` — **the blog posts**; add new posts at the end of the array
- `assets/js/main.js` — renders project cards and post lists from the data files
- `assets/favicon.svg` — site icon
- `.nojekyll` — tells GitHub Pages to serve files as-is (no Jekyll processing)

## Editing projects

Open `assets/js/projects.js` and add an entry to the `PROJECTS` array:

```js
{
  name: "my_new_project",
  description: "One or two sentences about what it does.",
  repo: "https://github.com/seanpedrick-case/my_new_project",
  links: [{ label: "Live demo", url: "https://..." }],  // optional
  tags: ["Python", "LLM"],                              // optional
  stars: 12,                                             // optional
  featured: true                                         // true = also shown in "Featured"
}
```

Then commit and push:

```bash
git add -A
git commit -m "Add my_new_project"
git push
```

## Local preview

Any static server works, e.g.:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Publishing settings

GitHub Pages is enabled in this repo's **Settings → Pages** with
**Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
