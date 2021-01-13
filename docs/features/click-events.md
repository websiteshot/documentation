---
id: click-events
title: Click Events
---

When it comes to automating screenshots, an accessible URL must exist for each screenshot. With modern web frameworks, different views can be implemented without changing the route. In such cases click events can be defined. The URL or route remains the same, but different click paths can be used depending on `ElementIds`.

With this feature for example

- Menus can be opened,
- Menu items can be clicked, or
- Popups like cookie banners can be closed.

The only requirement is a unique `ElementId` for an element that is clickable.
