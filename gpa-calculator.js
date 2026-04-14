function calculateGPA() {
  const grades = document.querySelectorAll(".grade");
  const credits = document.querySelectorAll(".credit");

  let totalPoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < grades.length; i++) {
    let grade = parseFloat(grades[i].value);
    let credit = parseFloat(credits[i].value);

    if (!isNaN(grade) && !isNaN(credit)) {

      totalPoints += grade * credit;
      totalCredits += credit;
    }
  }

  if (totalCredits === 0) {
    alert("Please enter valid grades and credits");
    return;
  }

  let gpa = totalPoints / totalCredits;

  document.getElementById("gpaResult").textContent = gpa.toFixed(2);
}