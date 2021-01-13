---
id: create-with-template
title: Create with Template
---

`POST` /api/projects/:projectId/templates/:templateId

## Request Parameters

| Parameter             | Type                                                   | Mandatory | Description                                           |
| --------------------- | ------------------------------------------------------ | --------- | ----------------------------------------------------- |
| `scheduledTs`         | number                                                 | no        | Timestamp in future when to schedule a Screenshot Job |
| `scheduleDescription` | [ScheduleDescription](../types/ScheduleDescription.md) | no        | A description to schedule a Job                       |

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
