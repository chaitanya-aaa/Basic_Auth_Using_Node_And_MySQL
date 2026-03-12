# 🛡️ Authentication System

## 📌 Project Overview

This project demonstrates the development of a **basic full-stack authentication system**. It allows users to **sign up and log in using their credentials**, while storing user information securely in a database.

The application integrates **frontend forms with backend APIs and a relational database** to validate and store user data. It is built using **HTML, CSS, Node.js, Express.js, and MySQL**.

This project highlights fundamental full-stack development concepts including **user authentication, backend API creation, database connectivity, and form handling**.

> Note: This project focuses on **core authentication logic and backend integration** for learning purposes.

---

## 🎯 Problem Statement

To design a simple authentication system where users can **create accounts and log in using stored credentials**, while demonstrating **frontend–backend communication and database interaction**.

---

## 🛠️ Project Modules Covered

### 1️⃣ User Signup
- Created a signup form for new user registration.
- Collected user details such as **Name, Email, and Password**.
- Stored user credentials in a **MySQL database**.

### 2️⃣ User Login
- Implemented a login form for user authentication.
- Verified login credentials against stored database records.

### 3️⃣ Database Integration
- Connected the backend server to **MySQL** using the `mysql2` package.
- Stored and retrieved user data using SQL queries.

### 4️⃣ Error Handling
- Implemented validation to detect **invalid email or password during login**.
- Displayed error messages directly on the login page.

### 5️⃣ Backend Server
- Built the backend using **Node.js and Express.js**.
- Created REST API routes for **signup and login operations**.

---

## 🌟 Key Features

### 🔐 User Authentication
Users can register and log in using email and password.

### 🗄️ MySQL Database Storage
User information is stored and retrieved from a **MySQL database table**.

### ⚡ Backend API Integration
Frontend forms communicate with backend APIs using **HTTP POST requests**.

### ❌ Login Error Identification
Displays **invalid email or password messages** when login credentials are incorrect.

### 🧩 Organized Project Structure
Separate **Frontend and Backend folders** for better project organization.

---

## 🧰 Tools & Technologies Used

| Component | Technology |
|-----------|------------|
| Frontend | HTML5, CSS3 |
| Backend | Node.js, Express.js |
| Database | MySQL |
| Database Driver | mysql2 |
| Middleware | body-parser |

---

## 🚀 Implementation Steps Summary

1. Designed the **signup and login forms** using HTML and CSS.
2. Created a backend server using **Node.js and Express.js**.
3. Connected the application to **MySQL database**.
4. Created a **users table** to store user credentials.
5. Implemented a **signup API** to insert user details into the database.
6. Implemented a **login API** to validate stored user credentials.
7. Added **basic error handling for invalid login attempts**.
8. Organized the project into **frontend and backend directories**.

---

## 📚 Concepts Used

| Concept | Description |
|--------|-------------|
| Authentication | Verifying user login credentials |
| REST APIs | Backend endpoints for signup and login |
| Form Handling | Sending form data from frontend to backend |
| SQL Queries | Storing and validating user data |
| Express Middleware | Handling HTTP request parsing |

---

## 📁 Project Structure

```
ProjectAuth
│
├── Backend
│ ├── server.js
│ ├── package.json
│ └── node_modules
│
└── Frontend
├── dashboard.html
├── login.html
├── signup.html
└── style.css
```

---


### Fork the Repository

Click the **Fork** button on the top right of this repository to create a copy in your GitHub account. (OR)

Then clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/Authentication_Dashboard.git

```
---
Note: You need have MySQL Workbench installed in your local machine.
[Download MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

---

## 📄 License

This project is created for **learning and educational purposes** to demonstrate authentication systems using **Node.js, Express, and MySQL**.
