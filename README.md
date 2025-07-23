# My Project

This repository contains a full-stack application with a React frontend and a NestJS backend, connected to a MongoDB database.

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js** 

* **npm**

* **MongoDB**

### 1. Clone the Repository

First, clone the project repository from GitHub to your local machine:

```bash
git clone [YOUR_GITHUB_REPO_LINK_HERE]
```

Replace `[YOUR_GITHUB_REPO_LINK_HERE]` with the actual URL of your GitHub repository.

### 2. Set Up and Run the Frontend

Navigate into the `frontend` directory, install dependencies, and start the development server.

```bash
cd my-proj/frontend
npm install # Corrected: Use npm install to install dependencies
npm run dev
```

After running `npm run dev`, the terminal will provide a local development server link (e.g., `http://localhost:3000`). Open this link in your web browser to view the frontend application.

### 3. Set Up and Run the Backend

Now, set up the NestJS backend, which will connect to your MongoDB database.

```bash
cd .. # Go back to the root directory (my-proj)
cd backend
npm install # Corrected: Use npm install to install dependencies
```

#### Create `.env` File

The backend requires environment variables for database connection and security.

1. Create a new file named `.env` in the `backend` directory.

2. Based on the `backend/.env.example` file, add your environment variables. At a minimum, you will need:

   * `MONGO_URI`: Your MongoDB connection string.

   * `JWT_SECRET`: A strong, random secret key for JWT authentication.

   **Example `.env` content:**

```bash
MONGO_URI="MongoDb URL"
JWT_SECRET="Key"
PORT = 4000
FRONTEND_URL = http://localhost:5173
```

*Replace `MongoDb URL` and `Key` with your actual values.*

#### Start the Backend

Once the `.env` file is configured, you can start the backend development server:

```bash
npm run start:dev
```




The backend server will typically run on `http://localhost:4000` (or the port specified in your `.env` file).

## Features

* **User Authentication:** Secure user registration and login.

* **Protected Home Page**

## Technologies Used

### Frontend

* **React:** JavaScript library for building user interfaces.

* **React Router DOM:** For declarative routing in React applications.

### Backend

* **NestJS:** A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

* **MongoDB:** NoSQL database for data storage.

* **Mongoose:** MongoDB object data modeling (ODM) for Node.js.

* **JWT:** For authentication strategies and JSON Web Tokens.

## API Endpoints (Backend)

The backend exposes several API endpoints for interaction. Key endpoints include:

* `POST /auth/register`: Register a new user.

* `POST /auth/login`: Authenticate a user and receive a JWT.

* `GET /`: Protected URL for Home Page Can’t Be Accessed Unless Logged In

## Project Structure

* `frontend/`: Contains the React application.

* `backend/`: Contains the NestJS application.
