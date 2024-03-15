// main.ts

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
  
  // Render a table and append a new row for each student
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  
  studentsList.forEach((student) => {
    const row = tbody.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);
  