# Project name: Workout APP - backend

### 💎 Description
[<img src="preview.png" height="250" align="right" style="margin-left:20px" />](preview.png)

Backend for the "**Workout App**", built with **Express** and **Prisma**. It provides `API endpoints` for user management, workout tracking, and exercise logging. It features secure data storage, relational database support, and efficient queries for a seamless fitness experience.

### 🧩 Tech Stack

![Express](https://img.shields.io/badge/Express_4.21.0-424242?logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma_5.19.1-424242?logo=prisma)
![pg](https://img.shields.io/badge/pg_8.13.0-424242)
![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken_9.0.2-424242?logo=jsonwebtokens)
![cors](https://img.shields.io/badge/cors_2.8.5-424242)
![express-async-handler](https://img.shields.io/badge/express--async--handler_1.2.0-424242)
![argon2](https://img.shields.io/badge/argon2_0.41.1-424242)

<!-- end:tech-stack -->
![@prisma/client](https://img.shields.io/badge/%40prisma%2Fclient_5.19.1-424242)
![dotenv](https://img.shields.io/badge/dotenv_16.4.5-424242?logo=dotenv)
![colors](https://img.shields.io/badge/colors_1.4.0-424242)
![morgan](https://img.shields.io/badge/morgan_1.10.0-424242)
![nodemon](https://img.shields.io/badge/nodemon_3.1.7-424242)

<details style="border:1px solid #d4d4d4; border-radius:2px; padding:1rem;">
<summary><h4 style="display:inline; padding-left:6px;">🗃 Dependencies</h4></summary>

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

---

<details style="border:1px solid #d4d4d4; border-radius:2px; padding:1rem;">
<summary><h3 style="display:inline; padding-left:6px;">✅ Done</h3></summary>

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

