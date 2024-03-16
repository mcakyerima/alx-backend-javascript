// Define the interface for a student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Mohammed",
  lastName: "Kaka",
  age: 20,
  location: "Nigeria",
};

const student2: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Create table styles
const styles = `
  .custom-table {
    font-family: Arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  .custom-table th, .custom-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #dddddd;
  }
  
  .custom-table th {
    background-color: #f2f2f2;
    border-top: 1px solid #dddddd;
    border-bottom: 2px solid #dddddd;
  }
  
  .custom-table th:first-child,
  .custom-table td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  
  .custom-table th:last-child,
  .custom-table td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

// Create a style element and inject the styles
const styleElement = document.createElement("style");
styleElement.textContent = styles;
document.head.appendChild(styleElement);

// Render a table and append a new row for each student
const table = document.createElement("table");
table.classList.add("custom-table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Create table headers
const headerRow = thead.insertRow();
const headerCell1 = headerRow.insertCell();
const headerCell2 = headerRow.insertCell();
headerCell1.textContent = "Firstname";
headerCell2.textContent = "Location";

// Append table headers
table.appendChild(thead);

// Append table body with student data
studentsList.forEach((student) => {
  const row = tbody.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append table body
table.appendChild(tbody);

// Append table to the document body
document.body.appendChild(table);
