# Workout APP - backend

### About
[<img src="preview.png" height="250" align="right"/>](preview.png)

Backend for the "**Workout App**", built with **Express** and **Prisma**. It provides `API endpoints` for user management, workout tracking, and exercise logging. It features secure data storage, relational database support, and efficient queries for a seamless fitness experience.

<br />

### 🧩 Tech Stack

![express](https://img.shields.io/badge/express_4.21.0-424242?logo=express&logoSize=auto)
![prisma](https://img.shields.io/badge/prisma_5.19.1-424242?logo=prisma&logoSize=auto)
![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken_9.0.2-424242?logo=jsonwebtokens&logoSize=auto)
![dotenv](https://img.shields.io/badge/dotenv_16.4.5-424242?logo=dotenv&logoSize=auto)
![cors](https://img.shields.io/badge/cors_2.8.5-424242)
![express-async-handler](https://img.shields.io/badge/express--async--handler_1.2.0-424242?)
![pg](https://img.shields.io/badge/pg_8.13.0-424242?)
![argon2](https://img.shields.io/badge/argon2_0.41.1-424242)

<br />

<details style="border:1px solid #d4d4d4; border-radius:2px; padding:1rem;">
<summary><h4 style="display:inline; padding-left:6px;">Dependencies:</h4></summary>

```bash
npm install --save-dev @trivago/prettier-plugin-sort-imports
npm install -D prettier
npm i express
npm i -D colors
npm i dotenv
npm i -D morgan nodemon
npm i prisma pg
npm i express-async-handler
npm i argon2
npm i jsonwebtoken
npm i cors
```
</details>

<br />
<br />

<details style="border:1px solid #d4d4d4; border-radius:2px; padding:1rem;">
<summary><h4 style="display:inline; padding-left:6px;">✅ Done:</h4></summary>

- [x] Async error handling for method (express-async-handler)
- [x] App.use notFound, errorHandler
- [x] generate token (jsonwebtoken)
- [x] user registration
- [x] user  login
- [x] exercise and workout models
- [x] exercise endpoint, create new exercise
- [x] update exercise
- [x] delete exercise
- [x] workout endpoint, create new workout
- [x] update workout
- [x] delete workout
- [x] workout log model
- [x] exercise log model
- [x] create endpoints for exercise log
- [x] exercise log:
  - [x] create new log
  - [x] get log (include if exist previous sets to compare)
  - [x] update log (time/set) 
  - [x] is exercise completed
- [x] create endpoints for workout log
- [x] workout log:
  - [x] create new log
  - [x] get log
  - [x] update log isCompleted 
- [x] get user statistic
 
</details>

