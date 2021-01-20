---
id: github-action
title: Github Action
---

import { image } from "@site/src/variables.config";
export const BucketImage = ({ prop }) => <img src={prop.src} alt={prop.alt} />;

GitHub Actions are a perfect addition to the development lifecycle. They can be used to test software, build Docker images, deploy assets and much more. With the Websiteshot Github Action, screenshot generation can be triggered via a Github Action.

## Repository

You can find the repository at [https://github.com/websiteshot/github-action](https://github.com/websiteshot/github-action).

The repository contains a description on how to use the Github Action. Basically, a simple integration looks like this:

```yaml
name: Publish

on: [push]

jobs:
  create-screenshot:
    runs-on: ubuntu-latest
    name: 'Schedule Screenshot Creation'
    steps:
      - uses: websiteshot/github-action@main
        env:
          PROJECT_ID: ${{ secrets.PROJECT_ID }}
          API_KEY: ${{ secrets.API_KEY }}
          URLS: '[{"url": "https://websiteshot.app", "name": "Websiteshot"}]'
          SCHEDULE_UNIT: 'm'
          SCHEDULE_VALUE: '5'
```

<BucketImage prop={image.github.action}></BucketImage>

## Marketplace

Here is the link to the marketplace entry: [https://github.com/marketplace/actions/websiteshot](https://github.com/marketplace/actions/websiteshot)

<BucketImage prop={image.github.actionmarketplace}></BucketImage>
