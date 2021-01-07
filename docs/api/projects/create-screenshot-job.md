---
id: create-screenshot-job
title: Create Screenshot Job
---

`POST` /api/projects/:projectId

## Request Parameters

| Parameter             | Type                                                   | Mandatory | Description                                           |
| --------------------- | ------------------------------------------------------ | --------- | ----------------------------------------------------- |
| `screenshotParameter` | [ScreenshotParameter](../types/ScreenshotParameter.md) | yes       | Screenshot Configuration                              |
| `urls`                | Array of [UrlConfig](../types/UrlConfig.md)            | yes       | URLs of Screenshots                                   |
| `scheduledTs`         | number                                                 | no        | Timestamp in future when to schedule a Screenshot Job |
| `scheduleDescription` | [ScheduleDescription](../types/ScheduleDescription.md) | no        | A description to schedule a Job                       |

### Example Request

```json
{
  "screenshotParameter": {
    "width": 1200,
    "height": 720,
    "style": "macos-simple-dark",
    "loginParameter": {
      "username": {
        "elementId": "#email",
        "username": "adam@websiteshot.app"
      },
      "password": {
        "elementId": "#password",
        "password": "s3cret"
      },
      "loginButton": {
        "elementId": "#login"
      }
    }
  },
  "urls": [
    {
      "url": "https://console.websiteshot.app/guarded",
      "name": "Just a Test",
      "loadingTime": 15000
    }
  ]
}
```

## Response

| Attribute | Type   | Description                                     |
| --------- | ------ | ----------------------------------------------- |
| `jobId`   | string | JobId that you need to download all Screenshots |

### Example Response

```json
{
  "jobId": "abcdefgh-ijkl-mnop-qrst-uvwxyz"
}
```
