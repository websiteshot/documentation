---
id: track-progress
title: Track Website Progress
---

Maybe one or the other knows the situation when you ask yourself: do I still have a screenshot of my application from 6 months ago, or 2 years ago? And then you either have to search for a very long time, or ask around for a long time, or you don't find a suitable copy.

Nevertheless, the progress of one's application is part of the life cycle and an easy way to do this is to save its appearance on a regular basis. You don't want to have to think about such recurring tasks yourself. Ideally, screenshots are generated automatically at predefined intervals and stored somewhere.

For this purpose there is the possibility to use Github Actions. For example, you can use [our Github Action](https://github.com/websiteshot/github-action) to trigger your screenshots and then store them in a cloud bucket. For inspiration, you can take a look at the [automation project](https://github.com/websiteshot/screenshot-automation).

Github Actions can not only be triggered by commits or releases, but also run periodically:

```yaml
name: "Screenshot Generation with Websiteshot"
on:
  schedule:
    - cron: "* * * * 1"

jobs:
  create-screenshot:
    runs-on: ubuntu-latest
    name: "Schedule Screenshot Creation"
    steps:
      - uses: websiteshot/github-action@main
        env:
          PROJECT_ID: ${{ secrets.PROJECT_ID }}
          API_KEY: ${{ secrets.API_KEY }}
          URLS: '[{"url": "https://console.websiteshot.app", "name": "Websiteshot"}]'
```
