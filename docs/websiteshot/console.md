---
id: console
title: Console
---

import { image } from "@site/src/variables.config";
export const BucketImage = ({ prop }) => <img src={prop.src} alt={prop.alt} />;

## Dashboard

The dashboard gives you an overview of what you can do next. This includes links to API documentation or guides that you can use for your use case.

<BucketImage prop={image.app.dashboard}></BucketImage>

## Usage

Your plan decides how many screenshots you are allowed to generate. In this view you will find an overview of how many screenshots you have already generated.

<BucketImage prop={image.app.usage}></BucketImage>

## API Keys

An API Key is a prerequisite for interacting with the Websiteshot API. You can manage your API Keys from this screen.

:::danger Warning
The API Key is only visible after the creation. After that, the API key will no longer be visible. Make sure that you have noted the API Key. Of course you can rotate the API Key at any time.
:::

<BucketImage prop={image.app.apikeys}></BucketImage>

## Members

Several people can work on a project. You can manage the members of your project using this view.

<BucketImage prop={image.app.members}></BucketImage>

## Create Screenshot Job

The easiest way to generate a screenshot is via this view. It is intended as a quick start to generate a first screenshot.

<BucketImage prop={image.app.create}></BucketImage>
