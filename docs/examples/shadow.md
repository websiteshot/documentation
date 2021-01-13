---
id: shadow
title: Shadow Effect
---

import { image } from "@site/src/variables.config";
export const BucketImage = ({ prop }) => <img src={prop.src} alt={prop.alt} />;

<BucketImage prop={image.example.shadow}></BucketImage>
