// Function to display the list of students on the page
function displayStudents() {
    const list = document.getElementById('studentList');  // Get the HTML element where students will be listed
    list.innerHTML = "";  // Clear previous list content

    // Loop through each student in the data.students array
    data.students.forEach((student, index) => {
        // Find the school object corresponding to the student's school_id
        const school = data.schools.find(s => s.school_id === student.school_id);

        // Create a new list item element
        const li = document.createElement("li");

        // Set the HTML content of the list item: student's name, a button to toggle details,
        // and a hidden div showing more details (roll number, email, contact, school)
        li.innerHTML = `
            <strong>${student.name}</strong> 
            <button onclick="toggleDetails(${index})" id="btn-${index}">Show Details</button>
            <div id="details-${index}" style="display:none; margin-top: 8px;">
                Roll No: ${student.roll_no ? student.roll_no : "N/A"}<br>
                Email: ${student.email}<br>
                Contact: ${student.contact}<br>
                School: ${school.school_name}
            </div>
        `;

        // Append this list item to the student list in the DOM
        list.appendChild(li);
    });
}

// Function to toggle the visibility of detailed student info
function toggleDetails(index) {
    const detailsDiv = document.getElementById(`details-${index}`);  // Get the details div for this student
    const btn = document.getElementById(`btn-${index}`);             // Get the button for this student

    // If details are hidden, show them and change button text to "Hide Details"
    // Otherwise, hide details and set button text to "Show Details"
    if (detailsDiv.style.display === "none") {
        detailsDiv.style.display = "block";
        btn.textContent = "Hide Details";
    } else {
        detailsDiv.style.display = "none";
        btn.textContent = "Show Details";
    }
}

// Function to assign roll numbers to students of a specific school
function assignRollNumber(){
    const input = document.getElementById("schoolIdInput").value;  // Get the entered school ID from input field
    const schoolId = parseInt(input);  // Convert input string to integer

    // If input is not a number, alert user and exit
    if(isNaN(schoolId)){
        alert("please enter a valid school id");
        return;
    }

    let roll = 1;  // Start roll numbering from 1

    // Loop through students and assign roll numbers to those who belong to the given school
    data.students.forEach(student => {
        if(student.school_id === schoolId){
            student.roll_no = roll;  // Assign roll number
            roll++;                 // Increment roll number for next student
        }
    });

    // Save the updated students data to localStorage for persistence
    localStorage.setItem('studentsData', JSON.stringify(data.students));

    // Refresh the student list display to show updated roll numbers
    displayStudents();
}

// Function to update a student's contact information based on their email
function updateStudent(){
    // Get email and new contact values from input fields, trimming extra spaces
    const email = document.getElementById("updateEmail").value.trim();
    const newContact = document.getElementById("newContact").value.trim();

    // Validate that email input is not empty
    if(!email){
        alert("enter email to identify student");
        return;
    }

    // Validate that new contact input is not empty
    if(!newContact){
        alert("enter new contact to update");
        return;
    }

    // Find the student with the matching email
    const student = data.students.find(s => s.email === email);

    // If no student found, alert the user
    if(!student){
        alert("student not found");
        return;
    }

    // Update the student's contact information
    student.contact = newContact;

    // Save updated student data to localStorage
    localStorage.setItem('studentsData', JSON.stringify(data.students));

    // Refresh the student list display to reflect the update
    displayStudents();

    // Notify the user of successful update
    alert("contact updated successfully");
}

// Function to delete a student based on email
function deleteStudent(){
    const email = document.getElementById("deleteEmail").value.trim();  // Get email input and trim spaces

    // If email is empty, alert and stop
    if(!email){
        alert("Enter email to identify student");
        return;
    }

    const initialLength = data.students.length;  // Store initial number of students

    // Filter out the student with the matching email (keeps all except that student)
    data.students = data.students.filter(s => s.email != email);

    // If length didn't change, student was not found
    if(data.students.length === initialLength){
        alert("student not found");
    }

    // Save updated student data to localStorage
    localStorage.setItem('studentsData', JSON.stringify(data.students));

    // Refresh student list display
    displayStudents();

    // Alert successful deletion (even if student not found, this still shows)
    alert("students deleted successfuly");
}

// Function to search for students by name or email and display matching students
function searchStudent(){
    const name = document.getElementById("searchInput").value.trim();  // Get search input and trim spaces

    // If search input is empty, alert user
    if(!name){
        alert("enter a name or email");
        return;
    }

    const list = document.getElementById("studentList");  // Get the student list element
    list.innerHTML = "";  // Clear previous search results
    let found = false;    // Flag to check if any match is found

    // Loop through all students to find matches by name or email
    data.students.forEach(student => {
        if (student.name === name || student.email === name) {
            // Find the student's school object
            const school = data.schools.find(s => s.school_id === student.school_id);

            // Create a list item with student's details
            const li = document.createElement("li");
            li.textContent = `${student.name}, Email: ${student.email}, Contact: ${student.contact}, School: ${school.school_name}`;

            // Append to the student list display
            list.appendChild(li);
            found = true;  // Mark as found
        }
    });

    // If no matches found, alert the user
    if(!found){
        alert("no match found");
    }
}

// Function to toggle dark mode on/off and save preference to localStorage
function toggleDarkMode() {
    document.body.classList.toggle("dark");  // Toggle "dark" class on the body element

    const isDark = document.body.classList.contains("dark");  // Check if dark mode is active

    // Save the current dark mode status to localStorage ("enabled" or "disabled")
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
}

// When the page loads, run this function
window.onload = () => {
    // Retrieve saved students data from localStorage if available
    const savedStudents = localStorage.getItem('studentsData');
    if (savedStudents) {
        data.students = JSON.parse(savedStudents);  // Parse and assign to data.students
    }

    // Retrieve saved dark mode setting from localStorage
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "enabled") {
        document.body.classList.add("dark");  // Enable dark mode
        const toggle = document.getElementById("darkModeToggle");  // Get toggle checkbox if exists
        if (toggle) toggle.checked = true;    // Set toggle checkbox to checked
    }

    // Display the list of students on the page
    displayStudents();
};

