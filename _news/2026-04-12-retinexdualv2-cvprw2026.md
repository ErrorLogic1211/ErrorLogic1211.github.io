---
layout: post
title: RetinexDualV2 accepted to CVPR 2026 Workshops
date: 2026-04-12 15:59:00-0400
permalink: /news/retinexdualv2-cvprw2026/
inline: false
related_posts: false
related_publications: true
summary: "**RetinexDualV2**: Physically-Grounded Dual Retinex for Generalized UHD Image Restoration accepted to the [CVPR 2026 Workshops](https://cvpr.thecvf.com/Conferences/2026) (NTIRE)."
tags: [paper, image-restoration, uhd]
---

RetinexDualV2 {% cite kishawy2026retinexdualv2 %} grounds RetinexDual in the physics of each degradation. A Task-Specific Physical Grounding Module (TS-PGM) extracts degradation-aware priors, such as rain masks and dark channels, and these guide the Retinex decomposition through a Physical-Conditioned Multi-head Self-Attention (PC-MSA) mechanism. As a result, one architecture handles different degradations without task-specific structural changes. The same model placed 4th and 5th in two [NTIRE 2026 challenges](/news/ntire2026-results/).

<!-- Your post: which physical priors you chose for each degradation and why conditioning attention on them works. -->
