const username = prompt("Enter the username");
const numSubjects = parseInt(prompt("Enter the number of subjects"));
let obj = {};

for (let i = 0; i < numSubjects; i++) {
  const subjectName = prompt("Enter the subject name");
  const marks = parseInt(prompt("Enter the marks"));
  obj[subjectName] = marks; 
}

let sum = 0;
let highestScore = 0;
let highestSubject = "";

for (let subject in obj) { 
  sum += obj[subject];
}

const percentage = (sum / (numSubjects * 100)) * 100; 

if (obj[subject] > highestScore) {
    highestScore = obj[subject];
    highestSubject = subject;
    let grade;
    if (percentage >= 90) {
      grade = "A+";
    } else if (percentage >= 80) {
      grade = "A";
    } else if (percentage >= 70) {
      grade = "B";
    } else if (percentage >= 60) {
      grade = "C";
    } else if (percentage >= 50) {
      grade = "D";
    } else {
      grade = "F (Fail)";
    }
    }

console.log(`Total Percentage: ${percentage.toFixed(2)}%`);
console.log(highestSubject);
console.log(grade);
console.log(obj)