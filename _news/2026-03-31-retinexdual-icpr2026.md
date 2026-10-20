---
layout: post
title: RetinexDual accepted to ICPR 2026
date: 2026-03-31 15:59:00-0400
permalink: /news/retinexdual-icpr2026/
inline: false
related_posts: false
related_publications: true
summary: "**RetinexDual** accepted to the [28th International Conference on Pattern Recognition (ICPR 2026)](https://icpr2026.org/) in Lyon, France."
tags: [paper, image-restoration, uhd]
---

RetinexDual {% cite kishawy2026retinexdual %} restores ultra-high-definition (UHD) images by splitting them, following Retinex theory, into reflectance and illumination, and correcting each with a dedicated branch. The Scale-Attentive maMBA (SAMBA) branch restores reflectance with a coarse-to-fine Mamba design that suppresses artifacts and recovers fine detail. The Frequency Illumination Adaptor (FIA) corrects color and illumination in the frequency domain, where global context is available. The same architecture handles four UHD tasks: low-light enhancement, deraining, deblurring, and dehazing.

Code and pre-trained weights: [GitHub](https://github.com/ErrorLogic1211/RetinexDual) · [Hugging Face](https://huggingface.co/ErrorLogic/RetinexDual).

<!-- Your post: why downsampling and pure frequency-domain methods fall short for UHD images, and the intuition behind the two branches. -->
