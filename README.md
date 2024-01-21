# Employee Management System

An Employee Management System with CRUD operations and authentication.

## Table of Contents

- [Employee Management System](#employee-management-system)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Technologies](#technologies)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Api Endpoints](#api-endpoints)
    - [Employee Api Endpoints](#employee-api-endpoints)
    - [User Api Endpoints](#user-api-endpoints)

## Introduction

This Employee Management System provides a set of API endpoints for managing employee records. It includes functionalities to create, read, update, and delete employee records. Authentication is required for accessing these endpoints.

For creating, updating and deleting employee records, User role have to be admin.

## Features

- Create, read, update, and delete employee records.
- Secure authentication for user access.
- Admin-only actions for managing employees(creating, updating and deleting records).

## Technologies

- Node.js
- Express.js
- MongoDB
- JWT for authentication

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed
- Your preferred API testing tool (e.g., Postman, thunderClient)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rahulpandey70/employee-management-system.git
   cd employee-management-system
    ```

2. Install dependencies

   ```bash
    npm install
   ```

3. Create .env file.

    ```bash
    PORT=8000

    MONGO_URI=YOUR MONGO URI

    CORS_ORIGIN=*

    JWT_ACCESS_TOKEN_SECRET=
    JWT_ACCESS_TOKEN_EXPIRY=

    REFRESH_TOKEN_SECRET=
    REFRESH_TOKEN_EXPIRY=
    ```

4. Start application

    ```bash
    npm start
    ```

## Api Endpoints

### Employee Api Endpoints

1. Creating employee

    ```bash
    POST /api/v1/employees
    ```

2. Get Single Employee details

    ```bash
    POST /api/v1/employees/:employeeId
    ```

3. Update employee details

    ```bash
    PUT /api/v1/employees/:employeeId
    ```

4. Delete employee

    ```bash
    DELETE /api/v1/employees/:employeeId
    ```

### User Api Endpoints

1. Creating User

    ```bash
    POST /api/v1/registerUser
    ```

2. Login User

    ```bash
    POST /api/v1/loginUser
    ```

3. Logout User

    ```bash
    POST /api/v1/logoutUser
    ```

4. Update User

    ```bash
    PUT /api/v1/updateUser/:userId
    ```

5. Update User role(Only admin allwoed)

    ```bash
    Put /api/v1/updateUserRole/:userId
    ```

6. Refresh Token

    ```bash
    POST /api/v1/refresh-token
    ```
