---
id: examples
title: Examples
---

import { image } from "@site/src/variables.config";
export const BucketImage = ({ prop }) => <img src={prop.src} alt={prop.alt} />;

## Natural

<BucketImage prop={image.example.natural}></BucketImage>

## Effect: Shadow

<BucketImage prop={image.example.shadow}></BucketImage>

## Style: MacOS Simple Dark

<BucketImage prop={image.example.stylemacosdark}></BucketImage>

## Combined

<BucketImage prop={image.example.combined}></BucketImage>

## Effect: Resize

<BucketImage prop={image.example.resize}></BucketImage>

## Effect: Blur

<BucketImage prop={image.example.blur}></BucketImage>

## Area: Upper Half

<BucketImage prop={image.example.areaupperhalf}></BucketImage>
