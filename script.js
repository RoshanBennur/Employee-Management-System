let employees = [];

// Add Employee
function addEmployee() {

    let empid = document.getElementById("empid").value;
    let name = document.getElementById("name").value;

    let salary = parseFloat(
        prompt("Enter Employee Salary")
    );

    employees.push({
        empid: empid,
        name: name,
        salary: salary
    });

    document.getElementById("result").innerHTML =
        "Employee Added Successfully" +
        "<br>Employee ID : " + empid +
        "<br>Name : " + name +
        "<br>Salary : " + salary;
}


// Search Employee
function searchEmployee() {

    let empid =
        document.getElementById("empid").value;

    let employee =
        employees.find(e => e.empid === empid);

    if(employee) {

        document.getElementById("result").innerHTML =
            "<h3>Employee Details</h3>" +
            "Employee ID : " + employee.empid +
            "<br>Name : " + employee.name +
            "<br>Salary : " + employee.salary;
    }
    else {

        document.getElementById("result").innerHTML =
            "Employee Not Found";
    }
}


// Update Salary
function updateSalary() {

    let empid =
        document.getElementById("empid").value;

    let employee =
        employees.find(e => e.empid === empid);

    if(employee) {

        let newsalary =
            parseFloat(
                prompt("Enter New Salary")
            );

        employee.salary = newsalary;

        document.getElementById("result").innerHTML =
            "<h3>Salary Updated Successfully</h3>" +
            "Employee ID : " + employee.empid +
            "<br>Name : " + employee.name +
            "<br>Updated Salary : " + employee.salary;
    }
    else {

        document.getElementById("result").innerHTML =
            "Employee Not Found";
    }
}


// Delete Employee
function deleteEmployee() {

    let empid =
        document.getElementById("empid").value;

    let index =
        employees.findIndex(
            e => e.empid === empid
        );

    if(index !== -1) {

        employees.splice(index, 1);

        document.getElementById("result").innerHTML =
            "Employee Deleted Successfully";
    }
    else {

        document.getElementById("result").innerHTML =
            "Employee Not Found";
    }
}


// Display All Employees
function displayEmployees() {

    let output =
        "<h3>Employee List</h3>";

    employees.forEach(e => {

        output +=
            "ID : " + e.empid +
            " | Name : " + e.name +
            " | Salary : " + e.salary +
            "<br>";
    });

    document.getElementById("result").innerHTML =
        output;
}