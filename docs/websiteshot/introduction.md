---
id: introduction
title: Introduction
slug: /
---

Nowadays, applications are mainly developed for the web. To describe the application, screenshots are used as an additional description to explain processes or features to users or to give an impression of the application.

In software development, the goal is to automate as many steps as possible: Hosting, Continuous Delivery, Testing, etc. However, for documentation or marketing purposes, manual activities are still necessary to ensure a natural description. Websiteshot starts with the generation of screenshots to fully automate these tasks. Screenshots should always be in the same format, they should represent the same user view resolution, and much more.

The number of views of an application grows rapidly. Let's take the following example:

- 10 user views
- Screenshot should have a specific name
- Same formatting (shadows, resolution)
- 5 deployments per month

Let's assume one screenshot needs 30 seconds + 10 seconds post-processing. Then 10 screenshots need 400 seconds, so in about **6:30 minutes**. After each deployment, a few small things change, so new screenshots need to be taken. This means for the above example 6:30 minutes x 5 = **32:30 minutes**.

If we adjust the example to 30 views and 15 deployments per month, the time needed is already **5 hours**.

Of course, this is a theoretical example and not all screenshots are updated all the time. However, we believe that screenshots should always be regenerated.

Websiteshot can do exactly this task. Screenshot jobs can be generated automatically and always in the same format. Since we believe that the generation of screenshots should be part of the development lifecycle, Websiteshot takes the **API First** approach. The API is in the foreground so that the steps can be embedded into existing processes as easily as possible.

There are a number of **features** to discover that can help you automate your screenshots:

- [Collections](../features/collections.md) can be used to generate multiple screenshots at once.
- [Templates](../features/templates.md) serve as a blueprint for the easy start of new screenshot jobs.
- If post-processing like to apply browser frames, add shadows or cropping is interesting, have a look at our [filters](../features/filters.md).
- Screenshot jobs can be [scheduled](../features/scheduled-jobs.md).
- [Click events](../features/click-events.md) can be used to configure a click for a URL.
- Views behind a login can be reached with the help of [login parameters](../features/guarded-websites.md).
