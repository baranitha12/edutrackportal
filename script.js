let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function addStudent(){

    let name = document.getElementById("name").value;
    let department = document.getElementById("department").value;
    let email = document.getElementById("email").value;

    if(name === "" || department === "" || email === ""){
        alert("Please fill all fields");
        return;
    }

    let student = {
        name:name,
        department:department,
        email:email
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("department").value = "";
    document.getElementById("email").value = "";
}

function displayStudents(){

    let table = document.getElementById("studentList");

    table.innerHTML = "";

    students.forEach((student,index)=>{

        let row = table.insertRow();

        row.insertCell(0).innerHTML = student.name;
        row.insertCell(1).innerHTML = student.department;
        row.insertCell(2).innerHTML = student.email;

        row.insertCell(3).innerHTML =
        `<button class="btn btn-danger btn-sm"
        onclick="deleteStudent(${index})">
        Delete
        </button>`;
    });
}

function deleteStudent(index){

    students.splice(index,1);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}
function searchStudent(){

    let input = document.getElementById("search").value.toLowerCase();

    let rows = document.querySelectorAll("#studentList tr");

    rows.forEach((row)=>{

        let name = row.cells[0].innerText.toLowerCase();

        if(name.includes(input)){
            row.style.display = "";
        }
        else{
            row.style.display = "none";
        }

    });

}