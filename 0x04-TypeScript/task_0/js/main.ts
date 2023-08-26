    interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string
    };

    const student1: Student = {
    firstName: 'Mubarik',
    lastName: 'Tamiru',
    age: 25,
    location: 'Jimma'
    };
    const student2: Student = {
    firstName: 'Amir',
    lastName: 'Edris',
    age: 25,
    location: 'Addis Ababa'
    };

    const studentsList: Student[] = [student1, student2];

    function renderTable(){
    const table = document.createElement('table');
    const tableHeaders = ['first name', 'location'];

    const headerRow = document.createElement('tr');

    for (const header of tableHeaders){
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    for (const student of studentsList){
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    

    table.appendChild(row);
    document.body.appendChild(table);
    }
}

    renderTable();
