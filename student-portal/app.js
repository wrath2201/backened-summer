function displayStudents() {
    const list = document.getElementById('studentList');
    list.innerHTML = "";

    data.students.forEach((student, index) => {
        const school = data.schools.find(s => s.school_id === student.school_id);

        const li = document.createElement("li");

        // Show just name and a "Show Details" button initially
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

        list.appendChild(li);
    });
}

function toggleDetails(index) {
    const detailsDiv = document.getElementById(`details-${index}`);
    const btn = document.getElementById(`btn-${index}`);

    if (detailsDiv.style.display === "none") {
        detailsDiv.style.display = "block";
        btn.textContent = "Hide Details";
    } else {
        detailsDiv.style.display = "none";
        btn.textContent = "Show Details";
    }
}


function assignRollNumber(){
    const input=document.getElementById("schoolIdInput").value;
    const schoolId=parseInt(input);

    if(isNaN(schoolId)){
        alert("please enter a valid school id");
        return;
    }

    let roll=1;
    data.students.forEach(student=>{
        if(student.school_id===schoolId){
            student.roll_no=roll;
            roll++;
        }
    });

    localStorage.setItem('studentsData', JSON.stringify(data.students));

    displayStudents();
}

function updateStudent(){
    // 1. Get the email input value, trimmed to remove extra spaces
    const email = document.getElementById("updateEmail").value.trim();

    // 2. Get the new contact input value, trimmed
    const newContact = document.getElementById("newContact").value.trim();

    // 3. If email is empty, alert user and stop function
    if(!email){
        alert("enter email to identify student");
        return;
    }

    // 4. If new contact is empty, alert user and stop function
    if(!newContact){
        alert("enter new contact to update");
        return;
    }

    // 5. Find the student object in data.students where email matches
    const student = data.students.find(s => s.email === email);

    // 6. If student is not found, alert user and stop function
    if(!student){
        alert("student not found");
        return;
    }

    // 7. Update the contact property of the found student object
    student.contact = newContact;

    // 8. Save the updated students array to localStorage (persist changes)
    localStorage.setItem('studentsData', JSON.stringify(data.students));

    // 9. Refresh the displayed student list to show updated info
    displayStudents();

    // 10. Alert success message to user
    alert("contact updated successfully");
}


function deleteStudent(){
    const email=document.getElementById("deleteEmail").value.trim();

    if(!email){
        alert("Enter email to identify student");
        return;
    }

    const initialLength=data.students.length;
    data.students=data.students.filter(s=>s.email!=email);
    
    if(data.students.length===initialLength){
        alert("student not found");
    }
   localStorage.setItem('studentsData',JSON.stringify(data.students));
   displayStudents();

   alert("students deleted successfuly")
}

function searchStudent(){
    const name=document.getElementById("searchInput").value.trim();
    if(!name){
        alert("enter a name or email")
    }

    const list=document.getElementById("studentList");
    list.innerHTML="";
    let found=false;

   data.students.forEach(student => {
        if (student.name === name || student.email === name) {
            const school = data.schools.find(s => s.school_id === student.school_id);
            const li = document.createElement("li");
            li.textContent = `${student.name}, Email: ${student.email}, Contact: ${student.contact}, School: ${school.school_name}`;
            list.appendChild(li);
            found = true;
        }
    });

    if(!found){
        alert("no match found");
    }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
}

window.onload = () => {
    // Restore saved students
    const savedStudents = localStorage.getItem('studentsData');
    if (savedStudents) {
        data.students = JSON.parse(savedStudents);
    }

    // Restore dark mode setting
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "enabled") {
        document.body.classList.add("dark");
        const toggle = document.getElementById("darkModeToggle");
        if (toggle) toggle.checked = true;
    }

    // Display student list
    displayStudents();
};
