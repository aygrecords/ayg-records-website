# AYG Records Website — Project Package

This is the complete, current state of the aygrecords.com site: three real
pages (Home, Studio, Lil Rashee), the Decap CMS admin panel, and all real
content and assets.

## File structure — every file belongs exactly where shown below

```
ayg-records-website/
├── index.html                        Homepage
├── studio.html                       Studio roadmap page
├── lil-rashee.html                   Lil Rashee artist page
├── netlify.toml                      Tells Netlify how to publish the site
├── assets/
│   ├── css/
│   │   └── site.css                  Shared stylesheet for all pages
│   ├── images/
│   │   ├── ayg-logo.png              Real AYG logo, as supplied
│   │   └── hero-lil-rashee.png       Real hero/portrait photo, as supplied
│   └── uploads/
│       ├── hero-video.mp4            Live hero background video
│       └── ayg-records-catalog.pdf   Downloadable artist catalog
├── admin/
│   ├── index.html                    Decap CMS login/editor screen
│   └── config.yml                    CMS field definitions
└── content/
    ├── homepage/
    │   ├── hero.yml                  Hero section text + video/photo
    │   ├── featured-release.yml      Featured Release section
    │   └── story.yml                 "AYG Story" homepage teaser
    ├── studio/
    │   └── roadmap.yml               Studio page milestones
    ├── artists/
    │   ├── lil-rashee.md             Lil Rashee's bio/links
    │   └── ayg-records-llc.md        Label Instagram account info
    └── downloads/
        └── press-kit.yml             Artist catalog download metadata
```

**Important:** `index.html`, `studio.html`, `lil-rashee.html`, and
`netlify.toml` must sit directly at the repo root — never inside `content/`
or any other folder. They are real pages people visit directly in a
browser, not CMS data files.

## Uploading updates without breaking things

When Claude gives you a new zip:

1. Unzip it on your computer.
2. Open the unzipped folder — confirm you see the files/folders listed
   above sitting directly inside it (not wrapped in another folder).
3. On GitHub, go to the repo root → **Add file → Upload files**.
4. Drag in the actual files and folders from that unzipped folder —
   never the `.zip` itself, never a single wrapper folder.
5. Let GitHub overwrite any existing files with the same name.
6. Scroll down and click **Commit changes** — nothing saves until you do.

## The site is live

- Homepage: `aygrecords.netlify.app`
- Admin/CMS login: `aygrecords.netlify.app/admin`

Netlify Identity + Git Gateway are already turned on. Logging into
`/admin` and saving an edit commits straight to this repo and
redeploys the site automatically — no manual file uploads needed for
routine content edits (only for structural changes like this one).
