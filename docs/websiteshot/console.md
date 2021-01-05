---
id: console
title: Console
---

import { image } from "@site/src/variables.config";
export const BucketImage = ({ prop }) => <img src={prop.src} alt={prop.alt} />;

## Dashboard

<BucketImage prop={image.app.dashboard}></BucketImage>

## Usage

<BucketImage prop={image.app.usage}></BucketImage>

## API Keys

<BucketImage prop={image.app.apikeys}></BucketImage>

## Members

<BucketImage prop={image.app.members}></BucketImage>

## Create Screenshot Job

<BucketImage prop={image.app.create}></BucketImage>
