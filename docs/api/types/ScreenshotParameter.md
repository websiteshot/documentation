---
id: screenshot-parameter
title: ScreenshotParameter
---

| Parameter        | Type                                  | Mandatory | Description                                                                                                |
| ---------------- | ------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| `width`          | number                                | yes       | Width of the View                                                                                          |
| `height`         | number                                | yes       | Height of the View                                                                                         |
| `style`          | string                                | no        | Style that should be applied to the created Screenshot: `macos-simple-dark`, `macos-simple-light`          |
| `loginParameter` | [LoginParameter](./LoginParameter.md) | no        | If the Website is guarded and needs login parameter you can configure User and Password within this field. |
| `shadow`         | boolean                               | no        | Add a shadow to your Screenshot. You can configure the shadow with `shadowOptions`.                        |
| `shadowOptions`  | [ShadowOptions](./ShadowOptions.md)   | no        | Shadow customizations. If `shadow` is not set this parameter will be ignored.                              |
