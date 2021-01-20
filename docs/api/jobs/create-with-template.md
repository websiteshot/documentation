---
id: create-with-template
title: Create with Template
---

`POST` /api/projects/:projectId/templates/:templateId

## Request Parameters

| Parameter             | Type                                                   | Mandatory | Description                                                                                         |
| --------------------- | ------------------------------------------------------ | --------- | --------------------------------------------------------------------------------------------------- |
| `scheduledTs`         | number                                                 | no        | Timestamp in future when to schedule a Screenshot Job                                               |
| `scheduleDescription` | [ScheduleDescription](../types/ScheduleDescription.md) | no        | A description to schedule a Job                                                                     |
| `urls`                | Array of [UrlConfig](../types/UrlConfig.md)            | no        | URLs of Screenshots. If set those URLs will be used instead of the URLs configured in the Template. |

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
