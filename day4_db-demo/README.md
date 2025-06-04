// before reading this , in the folder dbconnection -> mongo.js , there is a code line [const db_url=`mongodb+srv://<user_id>:<password>.iadvoaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`]  
make your account on Atlas and use your user_id and password and paste them in this line at the place mentioned , otherwise the project  will not work


```markdown
# 📚 Student Management API (Node.js + Express + MongoDB)

A simple RESTful API for managing student records, including features like registration, login, viewing student data, and updating student details using email.

---

## 🚀 Features

- Add a new student (with required fields)
- Login with email & password
- View all students
- Update student details by email

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Tools**: Postman or any REST client for testing

---

## 📁 Folder Structure

```

/db-demo
│
├── index.js                 # Main entry point
├── /models
│   └── studentDetail.js     # Mongoose schema for students
├── /dbconnection
│   └── mongo.js             # MongoDB connection setup

````

---

## ⚙️ Setup Instructions

1. **Clone the project**
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure MongoDB**

   * Open `dbconnection/mongo.js`
   * Replace the connection URI with your MongoDB Atlas or local URI.

4. **Run the server**

   ```bash
   node index.js
   ```

5. **Server is live at**:

   ```
   http://localhost:3000
   ```

---

## 📬 API Endpoints

### ➕ Create Student

```http
POST /student
```

**Body:**

```json
{
  "firstName": "Tushar",
  "lastName": "Saini",
  "email": "tushar@example.com",
  "password": "123456",
  "phone": 9876543210,
  "age": 20,
  "gender": "Male",
  "enrollmentNumber": "ENR2025001",
  "course": "B.Tech",
  "yearOfStudy": 2
}
```

---

### 🔐 Login

```http
POST /login
```

**Body:**

```json
{
  "email": "tushar@example.com",
  "password": "123456"
}
```

---

### 📄 Get All Students

```http
GET /student
```

---

### ✏️ Update Student By Email

```http
PUT /student/email/:email
```

**Example URL**:

```
PUT /student/email/tushar@example.com
```

**Body (fields to update):**

```json
{
  "firstName": "TusharUpdated",
  "age": 22
}
```

---

## 🧪 Testing

You can test all routes using:

* [Postman](https://www.postman.com/)
* [Insomnia](https://insomnia.rest/)
* cURL

---

## 📌 Notes

* No password hashing yet (for simplicity).
* Password is removed from API responses for security.
* Validations like `required`, `enum`, and `min/max` are enforced through Mongoose.

---

## 📧 Contact

Created by **Tushar Saini**
For queries: [LinkedIn](https://www.linkedin.com)

```

Let me know if you want me to add GitHub link, sample responses, or deploy instructions.
```
