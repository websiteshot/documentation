---
id: natural
title: Natural
---

import { image } from "@site/src/variables.config";
export const BucketImage = ({ prop }) => <img src={prop.src} alt={prop.alt} />;

<BucketImage prop={image.example.natural}></BucketImage>
