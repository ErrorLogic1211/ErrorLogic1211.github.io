---
layout: post
title: VeilGS is on arXiv
date: 2026-11-20 10:30:00-0500
permalink: /news/veilgs-arxiv/
inline: false
description: VeilGS, a 3D Gaussian Splatting method for low-light novel view synthesis, is now on arXiv with a project page.
related_posts: false
related_publications: true
summary: "**VeilGS**: Solving Darkness as a Veil of 2D Basis Maps over Retinex 3DGS is now on [arXiv](https://arxiv.org/abs/2611.27719), with a [project page](/VeilGS/)."
tags: [paper, 3d-gaussian-splatting, low-light]
---

VeilGS {% cite kishawy2026veilgs %} is a 3D Gaussian Splatting method for low-light novel view synthesis. It treats the darkness in a capture as a veil drawn over a clear scene: each Gaussian carries an albedo and a shading latent instead of spherical harmonics, and each view is darkened by a spatially varying gain followed by a global tone curve. The coefficients of the gain are solved for each view rather than learned, so VeilGS needs no paired normal-light supervision and stores no per-view parameters. On Gaussian-DK, its restored renders score best on the no-reference NIQE and CLIP-IQA metrics and were rated highest in a blind user study with 55 participants.

The [project page](/VeilGS/) has video comparisons and the user study.

<!-- Your post: why darkness is not uniform in a capture, and how solving the veil per view keeps the Gaussians from absorbing it. -->
