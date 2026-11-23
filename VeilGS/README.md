# VeilGS project page

Static page for *VeilGS: Solving Darkness as a Veil of 2D Basis Maps over Retinex 3DGS*,
served at <https://errorlogic1211.github.io/VeilGS/>. All paths are relative, and no file is
larger than 100 MB.

```
index.html                     the project page (CSS and JS inline, no external requests)
user_study/index.html          offline copy of the blind user study; ENDPOINT is empty, so it records nothing
assets/img, assets/video       figures, LOM views and the Gaussian-DK videos
assets/favicon*, assets/apple-touch-icon.png
assets/img/social_preview.jpg  og:image / twitter:image (1200x630)
paper/VeilGS_full_quality.pdf  the arXiv paper with figures at their original resolution (80 MB)
```

## Deploy (folder in the ErrorLogic1211.github.io repository)

1. Copy this folder to the root of the `ErrorLogic1211.github.io` repository as `VeilGS/`
   (the path is case-sensitive in the URL).
2. Commit and push to `main`. The site's existing "Deploy site" workflow builds the Jekyll site
   and publishes it; files here have no front matter, so Jekyll copies them unchanged.
3. Open <https://errorlogic1211.github.io/VeilGS/> after the workflow finishes.

Keep GitHub Pages turned off in a future `ErrorLogic1211/VeilGS` code repository: a project
site there would take over the `/VeilGS/` address.

## Links

Paper: <https://arxiv.org/pdf/2611.27719> · arXiv: <https://arxiv.org/abs/2611.27719>.
When the code is public, replace the disabled "Code (coming soon)" button in `index.html` with a
link to the repository.

## Credits

Layout adapted from the [Nerfies project page template](https://github.com/nerfies/nerfies.github.io)
(CC BY-SA 4.0). Gaussian-DK scenes from [Gaussian in the Dark](https://github.com/yec22/Gaussian-DK);
LOM scenes from [Aleth-NeRF](https://github.com/cuiziteng/Aleth-NeRF). The Aleth-NeRF and
I²-NeRF images are the renders released by their authors.
