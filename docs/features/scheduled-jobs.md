---
id: scheduled-jobs
title: Scheduled Jobs
---

Screenshot jobs do not have to start immediately after the request for them has been submitted.

Let's take the following situation: A web application is rolled out via a CI/CD pipeline. There will usually be steps to test, build and deploy the asset. Then, the application will begin to boot. If the launch is already outside the pipeline, the pipeline probably does not know exactly when the application will be accessible in the new version.

In such scenarios, screenshot generation can be timed. For this, a `timestamp` can be specified in the future or a relative specification in `minutes`, `hours` or `days` can be specified.

Accordingly, screenshots are started in the future, ensuring that the web application is already available in the new version.
