# Websiteshot Documentation

<hr />

<div align="center">
    <a href="https://websiteshot.app/">
        <img src="./static/img/logopublicsmall.png" width="100">
    </a>
</div>

<div align="center">
<p>Never spend time again to create awesome screenshots of your websites.</p>
</div>

<div align="center">
<a style="margin: 1em;" href="https://websiteshot.app">Website</a> | <a style="margin: 1em;" href="https://console.websiteshot.app">Console</a> | <a style="margin: 1em;" href="https://github.com/websiteshot/community/discussions">Community</a> | <a style="margin: 1em;" href="https://docs.websiteshot.app">Documentation</a>
</div>

<hr />

## Variables

[variables.config.js](./src/variables.config.js)

## Images

Images are referencing a S3 Bucket and can be easily embedded in the following way.

Import:

```js
import { image } from "@site/src/variables.config";
export const BucketImage = ({ prop }) => <img src={prop.src} alt={prop.alt} />;
```

Embed:

```md
<BucketImage prop={image.app.apikey}></BucketImage>
```
