---
id: getting-started
title: Getting Started
---

import { image } from "@site/src/variables.config";
export const BucketImage = ({ prop }) => <img src={prop.src} alt={prop.alt} />;

It doesn't take much to get started with Websiteshot. The only requirement is an [account](https://console.websiteshot.app).

<BucketImage prop={image.app.login}></BucketImage>

Screenshots are always assigned to a project. A project is the workspace or context in which you are currently working. After logging in for the first time, create your first project so that you can take screenshots. Learn more about the interface on the [Console page](./console.md).

There's a huge amount of next steps you can tackle now. Of course, it strongly depends on your use case. We have prepared some guides that can help or inspire you:

- Although we take an API first approach you don't need to request the API to create your first screenshot. Check out the [Quick Start Guide](../guides/quickstart.md) to learn how.
- Use a [simple script](../guides/simple-script.md) to see how to use the API from the command line.
- Integrate Websiteshot into your Github workflows with a [Github Action](../guides/github-action.md). For example, you can commission new screenshots after each deployment.
