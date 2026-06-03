const gradePoints = {

  "S":10,
  "A":9,
  "B":8,
  "C":7,
  "D":6,
  "E":5,
  "F":0

};

const tableBody =
  document.getElementById("tableBody");

function addRow(){

  const rowCount =
    tableBody.rows.length + 1;

  const row =
    document.createElement("tr");

  row.innerHTML = `

    <td>${rowCount}.</td>

    <td>

      <input
        type="number"
        class="credit"
        placeholder="Credits"
        min="1"
      >

    </td>

    <td>

      <select class="grade">

        <option value="S">S</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>

      </select>

    </td>

  `;

  tableBody.appendChild(row);

}

function calculateGPA(){

  const credits =
    document.querySelectorAll(".credit");

  const grades =
    document.querySelectorAll(".grade");

  let totalCredits = 0;
  let totalPoints = 0;

  for(let i = 0; i < credits.length; i++){

    const credit =
      parseFloat(credits[i].value);

    if(!isNaN(credit)){

      const grade = grades[i].value;

      totalCredits += credit;

      totalPoints +=
        credit * gradePoints[grade];

    }

  }

  let gpa = 0;

  if(totalCredits > 0){

    gpa = totalPoints / totalCredits;

  }

  document.getElementById("gpa").innerText =
    gpa.toFixed(2);

  const progress =
    (gpa / 10) * 100;

  document.getElementById("progressBar")
    .style.width = progress + "%";

}

function resetAll(){

  tableBody.innerHTML = "";

  document.getElementById("gpa")
    .innerText = "0.00";

  document.getElementById("progressBar")
    .style.width = "0%";

  addDefaultRows();

}

function addDefaultRows(){

  for(let i = 0; i < 6; i++){

    addRow();

  }

}

addDefaultRows();