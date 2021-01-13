---
id: get-screenshot-jobs
title: Get
---

`GET` /api/projects/:projectId/screenshots/root

## Response

| Attribute | Type                                          | Description    |
| --------- | --------------------------------------------- | -------------- |
|           | Array of [ProjectJob](../types/ProjectJob.md) | Available Jobs |

### Example Response

```json
[
  {
    "rootId": "e9879ee2-bae9-40fe-865f-e30f2368d808",
    "meta": {
      "created": 1605813006223
    },
    "jobs": [
      {
        "data": "https://storage.googleapis.com/websiteshot-poc.appspot.com/02886ddf-2c12-40d6-aad8-5572028e88ee/02d25f25-d853-4272-925c-986892549a7a.png?GoogleAccessId=...",
        "rootId": "e9879ee2-bae9-40fe-865f-e30f2368d808",
        "projectId": "02886ddf-2c12-40d6-aad8-5572028e88ee",
        "uuid": "02d25f25-d853-4272-925c-986892549a7a",
        "url": {
          "url": "https://console.websiteshot.app/guarded",
          "name": "Just a Test",
          "loadingTime": 15000
        },
        "meta": {
          "created": 1605813006223
        },
        "screenshotParameter": {
          "height": 720,
          "width": 1200,
          "basepath": "/tmp",
          "name": "02d25f25-d853-4272-925c-986892549a7a"
        },
        "preview": "https://storage.googleapis.com/websiteshot-poc.appspot.com/02886ddf-2c12-40d6-aad8-5572028e88ee/02d25f25-d853-4272-925c-986892549a7a-preview.png?GoogleAccessId=..."
      }
    ]
  }
]
```
