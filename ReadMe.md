# Backend

First Feature
Authentication System

Backend APIs
Database
Security
JWT
Middleware
Redux
Protected Routes
Persistent login
Role-based access


Flow
Register ---> Login ---> JWT Token ---> Password Hashing ---> Protected APIs ---> Redux Auth State ---> Proetected Frontend Routes

Authentication ---> Who you are ?
Authorization  ---> What are you allowed to access ? (Permissions)


JWT Flow

User Login ---> Backend verified credentials ---> Backend creates JWT Token ---> Frontend stores token ---> Frontend sends token in APIs ---> Backend Validates token

Now 
Installing ---> mongoose bcryptjs jsonwebtoken (npm install mongoose bcryptjs jsonwebtoken)
| Package      | Purpose            |
| ------------ | ------------------ |
| mongoose     | MongoDB ODM        |
| bcryptjs     | Password hashing   |
| jsonwebtoken | JWT authentication |


MongoDB Setup

using MongoDB Atlas

JWT Secret in terminal - node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

controllers ---> request and response handling logic + business logic + database oprations

without controllers routes will become huge and diffecult to debug and duplicate logic and poor scalability

Read Req --> call databse --> validate data --> business logic --> generate tokens --> send response --> handle errors

Note:
# Client Request ---> Route ---> Controller ---> Service (optional) ---> Database ---> Response

| Layer      | Responsibility            |
| ---------- | ------------------------- |
| Routes     | URL mapping               |
| Controller | Request/response handling |
| Service    | Business logic            |
| Model      | Database operations       |


| Package         | Purpose         |
| --------------- | --------------- |
| react-hook-form | Efficient forms |
| react-hot-toast | Notifications   |
