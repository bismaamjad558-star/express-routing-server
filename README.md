# Express Routing Server

A simple **Express.js Routing Server** built as part of the **Full Stack Development - Week 4 Curriculum**. This project demonstrates Express routing, MVC architecture, HTTP requests, query parameters, and Swagger API documentation.

---

# 🚀 Features

* Express.js Server
* MVC Folder Structure
* RESTful API
* GET, POST, PUT & DELETE Endpoints
* Query Parameters
* JSON Request & Response Handling
* Swagger API Documentation
* Vercel Deployment Ready

---

# 🛠️ Technologies Used

* Node.js
* Express.js
* CORS
* Dotenv
* Nodemon
* Swagger UI Express
* Swagger JSDoc

---

# 📂 Project Structure

```text
express-routing-server/
│
├── controllers/
│   └── userController.js
│
├── routes/
│   └── userRoutes.js
│
├── models/
│
├── screenshots/
│   ├── swagger.png
│   └── API.png
│
├── app.js
├── swagger.js
├── package.json
├── vercel.json
├── .gitignore
└── README.md
```

---

# ⚙️ Installation & Setup

### Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/express-routing-server.git
```

### Navigate to the project folder

```bash
cd express-routing-server
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The server will start at:

```text
http://localhost:5000
```

---

# 📡 API Endpoints

| Method | Endpoint                | Description                         |
| ------ | ----------------------- | ----------------------------------- |
| GET    | `/api/users`            | Retrieve all users                  |
| GET    | `/api/users?name=Bisma` | Retrieve user using query parameter |
| POST   | `/api/users`            | Create a new user                   |
| PUT    | `/api/users/:id`        | Update a user                       |
| DELETE | `/api/users/:id`        | Delete a user                       |

---

# 📖 Swagger API Documentation

### Local

```
http://localhost:5000/api-docs
```

# 📷 Screenshots

## Swagger Documentation

![Swagger Documentation](screenshots/swagger.png)

## API Testing (Postman)

![API Testing](screenshots/API.png)

---


# 📚 Learning Outcomes

After completing this project, I learned:

* Express.js fundamentals
* Express routing
* MVC architecture
* Handling HTTP requests
* Using query parameters
* Creating REST APIs
* Testing APIs using Postman
* Documenting APIs with Swagger
* Managing projects with Git & GitHub
* Preparing projects for deployment

---

# 👩‍💻 Author

**Bisma Amjad**

BS Computer Science Student

Aspiring Full Stack (MERN) Developer
