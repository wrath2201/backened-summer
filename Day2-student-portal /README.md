
# Student Portal

A simple web application to manage student data — assign roll numbers, update contact info, delete students, and search by name or email. Data is stored locally in the browser using `localStorage`.

---

## Features

* Display a list of students with their details and school name
* Assign roll numbers to students of a specific school
* Update student contact information by email
* Delete a student by email
* Search students by name or email
* Persistent data saved in browser `localStorage`
* Responsive and clean UI with a light/dark mode ready CSS design

---

## Folder Structure

```
student-portal/
│
├── index.html          # Main HTML file
├── style.css           # CSS styles for the project
├── data.js             # Static data for students and schools
└── app.js   # JavaScript logic for managing students
```

---

## How to Use

1. Open `index.html` in your browser.
2. Use the input fields and buttons to:

   * Search students by name or email.
   * Enter a school ID and assign roll numbers to students in that school.
   * Update a student's contact info by entering their email.
   * Delete a student by email.
3. Student data is saved in your browser's local storage, so your changes will persist across page reloads.
4. To reset data, clear the browser's local storage for this site.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla)
* Browser Local Storage API

---

## Future Improvements

* Add backend support for persistent storage on a server.
* Enhance UI with better responsiveness and accessibility.
* Add pagination for large student lists.
* Add filters and sorting options.
* Implement authentication for secure data access.

---

## License

This project is open source and free to use.

---


