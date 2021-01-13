---
id: combined-effects
title: Combined Effects
---

import { image } from "@site/src/variables.config";
export const BucketImage = ({ prop }) => <img src={prop.src} alt={prop.alt} />;

<BucketImage prop={image.example.combined}></BucketImage>
