---
id: screenshot-parameter
title: ScreenshotParameter
---

| Parameter        | Type                                       | Mandatory | Description                                                                                                                                                                               |
| ---------------- | ------------------------------------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `width`          | number                                     | yes       | Width of the View                                                                                                                                                                         |
| `height`         | number                                     | yes       | Height of the View                                                                                                                                                                        |
| `style`          | string                                     | no        | Style that should be applied to the created Screenshot: `macos-simple-dark`, `macos-simple-light`                                                                                         |
| `loginParameter` | [LoginParameter](./LoginParameter.md)      | no        | If the Website is guarded and needs login parameter you can configure User and Password within this field.                                                                                |
| `area`           | string                                     | no        | This allows you to define which part of the website should be used: `topleft`, `topright`, `bottomleft`, `bottomright`, `centercenter`, `upperhalf`, `lowerhalf`, `leftside`, `rightside` |
| `effects`        | Array of [EffectConfig](./EffectConfig.md) | no        | After the screenshot is created, effects can still be applied. Multiple effects can be specified, they will be applied in the order in the array.                                         |
