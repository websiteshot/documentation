---
id: url-config
title: UrlConfig
---

| Parameter     | Type                         | Mandatory | Description                                                                                                                            |
| ------------- | ---------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `url`         | string                       | yes       | Valid URL of the Website                                                                                                               |
| `name`        | string                       | yes       | Name of the Website                                                                                                                    |
| `loadingTime` | number                       | no        | Max Loading time of the Website in Milliseconds. If you know that your website will need at least 15sec you can set the value `15000`. |
| `clicks`      | Array of [Click](./Click.md) | no        | Click Events on the given Websites                                                                                                     |
