---
id: quickstart
title: Quick Start
---

import { image } from "@site/src/variables.config";
export const BucketImage = ({ prop }) => <img src={prop.src} alt={prop.alt} />;

No coding is necessary for the Quick Start. You can simply create a new screenshot via the console. Click on the button **Create Screenshot Job**.

<BucketImage prop={image.app.create}></BucketImage>

In the following form you have to fill in the input fields:

- **URL**: the URL of the website you want to take a screenshot of. You can also simply use `https://console.websiteshot.app` for this purpose.
- **Name**: Give your screenshot a name. This is useful if you want to take a lot of screenshots for a job.
- **Resolution**: Here you decide in which resolution the screenshot will be created. A few popular dimensions are given.
