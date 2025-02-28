// const sum=(a,b)=>{
//     const ans=a+b;
//     return ans;
// }
// const printpreety=(txt)=>{
//     console.log("------")
//     console.log(txt);
//     console.log("------")
// }

// console.log(sum(10,20))
// console.log(printpreety("Arpit"));


// const sum=(a,b)=>{
//     const ans=a+b;
//     return ans;
// }
// const printpreety=(txt)=>{
//     console.log("------")
//     console.log(txt);
//     console.log("------")
// }

// console.log(printpreety(sum(10,20)))

// const sum=(a,b,c)=>{

//     //higher order function
//     const ans=a+b;
//     // return ans;
//     c(ans);
// }
// const printpreety=(txt)=>{
//     //second order function
//     //call back function
//     console.log("------")
//     console.log(txt);
//     console.log("------")
// }
// console.log(sum(20,30,printpreety));

// // console.log(printpreety(sum(10,20)))
// //prin pereey is a call back function


// const getMetaData = () => {
//     const name = prompt("Please enter your name");
//     console.log("Hello", name);
//     const subject = prompt("Please enter the number of subjects");
//     const numOfSub = parseInt(subject);
//     return numOfSub;
// };

// const getSubjects = (num) => {
//     const record = {};
//     for (let i = 0; i < num; i++) {
//         const subName = prompt(`Enter the name of Subject ${i + 1}`);
//         const marks = Number(prompt(`Enter the marks for Subject ${subName}`));
//         record[subName] = marks;
//     }
//     console.log(record);
//     return record; // FIX: Return the collected data
// };

// const getPercentage = (obj) => {
//     const marks = Object.values(obj);
//     let totalMarks = 0;
//     let totalSubjects = 0;
//     marks.forEach((a) => {
//         totalMarks += a;
//         totalSubjects++;
//     });

//     const percentage = totalMarks / totalSubjects;
//     return percentage;
// };

// const getHighestScoringSubject = (obj) => {
//     const marks = Object.entries(obj);
//     let maxScore = 0;
//     let maxScoreSubject = "";

//     marks.forEach((a) => {
//         const subName = a[0];
//         const subMarks = a[1];
//         if (subMarks >= maxScore) {
//             maxScore = subMarks;
//             maxScoreSubject = subName;
//         }
//     });
//     return maxScoreSubject;
// };

// const getGrade = (percentage) => {
//     const grade = [
//         [90, "A+"],
//         [80, "A"],
//         [70, "B+"],
//         [60, "B"],
//     ];
//     let finalGrade = "C"; 

//     grade.forEach((arr) => {
//         if (percentage >= arr[0]) { 
//             finalGrade = arr[1];
//         }
//     });

//     return finalGrade; 
// };


// const num = getMetaData();
// const record = getSubjects(num); 

// const percentage = getPercentage(record);
// const highestScoringSubject = getHighestScoringSubject(record);
// console.log("Percentage:", percentage);
// console.log("Highest Scoring Subject:", highestScoringSubject);

// const grade = getGrade(percentage); 
// console.log("Grade:", grade);




