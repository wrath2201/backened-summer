// before reading this , in the folder dbconnection -> mongo.js , there is a code line [const db_url=`mongodb+srv://<user_id>:<password>.iadvoaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`]  
make your account on Atlas and use your user_id and password and paste them in this line at the place mentioned , otherwise the project  will not work



---

```markdown
# 📚 Student Management API (Node.js + Express + MongoDB)

A simple RESTful API for managing student records. Features include student registration, login, viewing all students, and updating student details via email.

---

## 🚀 Features

- Register a new student
- Login with email and password
- View all registered students
- Update student details using email

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Tools**: Postman / Insomnia for testing

---

## 📁 Folder Structure

```

/db-demo
│
├── index.js                    # Main server file (routes setup)
├── /controllers
│   └── studentAction.js        # All logic for student-related actions
├── /models
│   └── studentDetail.js        # Mongoose schema for students
├── /dbconnection
│   └── mongo.js                # MongoDB connection setup

````

---

## ⚙️ Setup Instructions

1. **Clone the repository**


````

2. **Install dependencies**

```bash
npm install
```

3. **Configure MongoDB**

* Open `dbconnection/mongo.js`
* Replace the URI with your **MongoDB Atlas** or **local MongoDB** URI

4. **Start the server**

```bash
node index.js
```

5. **Server will run at:**

```
http://localhost:3000
```

---

## 📬 API Endpoints

### ➕ Register Student

```http
POST /student
```

**Request Body:**

```json
{
  "firstName": "abc",
  "lastName": "xyz",
  "email": "lmn@example.com",
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

### 🔐 Login Student

```http
POST /login
```

**Request Body:**

```json
{
  "email": "lmn@example.com",
  "password": "123456"
}
```

---

### 📄 Get All Students

```http
GET /student
```

---

### ✏️ Update Student by Email

```http
PUT /student/email/:email
```

**Example URL:**

```
PUT /student/email/tushar@example.com
```

**Request Body (any fields to update):**

```json
{
  "firstName": "TusharUpdated",
  "age": 22
}
```

---

## 🧪 Testing

Use any of the following tools to test the API endpoints:

* [Postman](https://www.postman.com/)
* [Insomnia](https://insomnia.rest/)
* `curl` or similar HTTP clients

---

## 🛡 Security Notes

* Passwords are currently stored in plaintext (to be updated with hashing later).
* Password is removed from API responses for basic security.
* Mongoose validations (`required`, `enum`, `min/max`) are in place.

---

## 🌱 Future Improvements

* Add password hashing (bcrypt)
* JWT-based authentication and authorization
* Error handling middleware
* Input sanitization & validation with Joi or express-validator
* Environment variable config with `.env`

---

## 📧 Contact

Created by **Tushar Saini**
Feel free to connect: [LinkedIn](https://www.linkedin.com)

---

## 📌 License

This project is open-source and available under the MIT License.

```

Let me know if you'd like:
- A deployment guide (Render, Railway, or Vercel for backend)
- GitHub badge integrations (e.g., star, fork)
- README preview image or API collection link

I can help with that too!
```
