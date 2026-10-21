---
layout: post
title: FedLane published in Scientific Reports
date: 2024-10-23 00:00:00-0400
permalink: /news/fedlane-scientific-reports/
inline: false
description: FedLane, a federated learning system for lane segmentation on autonomous vehicles, is published in Scientific Reports.
related_posts: false
related_publications: true
summary: My paper ["Federated learning system on autonomous vehicles for lane segmentation"](https://www.nature.com/articles/s41598-024-71187-8) is published in *Scientific Reports*.
tags: [paper, federated-learning, autonomous-driving]
---

This paper grew out of my undergraduate thesis at Nile University {% cite eid2024federated %}. It trains lane-segmentation models (U-Net, ResUNet, and ResUNet++) with federated learning, so that vehicles improve a shared model without exposing their own driving data. Federated training raised the Dice coefficient from 0.9429 to 0.9794 for U-Net, from 0.9291 to 0.9854 for ResUNet, and from 0.9079 to 0.9675 for ResUNet++.

<!-- Your post: motivation, how the federated setup works on edge devices, and takeaways. -->
