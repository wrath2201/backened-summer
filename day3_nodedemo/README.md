

---

# 🚀 Basic Express.js Login API

This is a simple login API built using **Express.js**, demonstrating basic routing, middleware, and authentication logic.

---

## 📦 Requirements

* **Node.js** (v14 or higher)
* **npm** (comes with Node.js)
* [**Postman**](https://www.postman.com/downloads/) or any API testing tool

---

## ⚙️ Getting Started

### 1. Initialize a Node.js project

```bash
mkdir day3_node-demo
cd day3_node-demo
npm init -y
```

### 2. Install Express

```bash
npm install express
```

---

---

## 🧪 How to Test Using Postman

### 1. Open Postman

Download and install Postman from [here](https://www.postman.com/downloads/) if you haven’t already.

### 2. Send a POST Request

* **URL:** `http://localhost:3000/login`
* **Method:** `POST`
* **Headers:**
  `Content-Type: application/json`
* **Body:** (Select `raw` and choose `JSON` format)

Copy-paste this into the body:

```json
{
  "email": "tushar@example.com",
  "password": "12345"
}
```

### 3. Expected Responses

* ✅ **Correct Credentials:**
  Response → `Authorization complete`

* ❌ **Wrong Credentials:**
  Response → `invalid email or password`
  Status Code → `401 Unauthorized`

---

## 🛠 Next Steps (Future Enhancements)

* 🔗 Connect this API to a **MongoDB** database
* 🧬 Use **Mongoose** for schema validation
* 🔐 Add **JWT** token-based authentication for secure login

---

## 📚 What I Learned

* Setting up a basic Express server
* Using middleware like `express.json()` to parse JSON bodies
* Creating POST routes and handling request data
* Testing REST APIs using Postman


