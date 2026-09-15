backend:
  name: git-gateway
  branch: main # or master

media_folder: "public/uploads"
public_folder: "assets/uploads"

collections:
  - name: "homepage"
    label: "Home Page Content"
    file: "content/homepage.yml" # Pointing directly to your existing file
    fields:
      - { label: "Hero Headline", name: "hero_headline", widget: "string" }
      - { label: "Hero Subtitle", name: "hero_subtitle", widget: "text" }
      - { label: "CTA Button Text", name: "cta_text", widget: "string" }
      # Add exact keys matching your current content/* .yml
