HOW TO REPLACE PROJECT IMAGES
=============================
Every project has its own folder here, e.g.  images/projects/virtual-modern-school/

  cover.jpg   -> the image shown on the project card
  1.jpg       -> first gallery image (opens in the lightbox)
  2.jpg       -> second gallery image
  3.jpg ...   -> add as many as you like (4.jpg, 5.png ...) - keep the numbers consecutive

Rules
- Just drop your files in the folder with those names. Delete the placeholder .svg files if you want.
- Any of these formats work, no code changes needed: jpg, jpeg, png, webp, avif, svg.
- If both cover.png and cover.svg exist, the real image (png/jpg/webp) wins over the svg placeholder.
- No cover file? The card uses 1.* as the cover.
- Recommended cover size: 1600x1000 (16:10).

Linking a project
- In script.js, set  link: "https://..."  (or a path to a file/folder) on the project.
  Click on the card then opens that link; the little image-count badge still opens the gallery.
- Leave link: ""  and clicking the card opens the gallery lightbox.

NOTE (added)
- Projects with  count: N  in script.js load instantly and expect files named 1.jpg ... N.jpg + cover.jpg.
  If you change the number of images, update count (or delete the count line to auto-scan any extension).
- Clicking a card always opens the gallery. The "Visit GitHub / Visit Figma / Visit Website" button inside
  the gallery appears only when the project has a link in script.js.
- Certificates: images/certificates/ (picture) and images/certificates/logos/ (issuer logo).
  The "Verify certificate" button appears only when the certificate has a link.
