---
id: guarded-websites
title: Guarded Websites
---

When it comes to web applications, many views are only visible when a user is logged in. If we look at the Websiteshot Console, only a few routes are publicly accessible. When it comes to performing certain actions in the Websiteshot Console, a user must be logged in.

For this case, login credentials can be configured to allow the Websiteshot backend to execute the login and then reach non-public. This works (currently) only for logins with **username/email** and **password** (without 2FA). The following data is needed for an automated login:

- `Element Id` of the input field for the username
- `Element Id` of the input field for the password
- `Element Id` of the button for the login
- `Username` and `Password`

:::info
The configured password is only used unencrypted for the actual login process. For all other steps in the backend, the password is only encrypted. As soon as a job is completed, the credentials are deleted and cannot be restored.
:::

The same applies when configuring login credentials within [templates](./templates.md). Passwords are always encrypted.
