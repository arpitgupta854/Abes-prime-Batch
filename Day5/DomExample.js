// document.querySelectorAll("h1").forEach(el => el.style.color = "red");

// var ans=document.getElementById("outer");
// ans.style.backgroundColor="blue"

// var ans1 = document.getElementsByClassName("inner");
// for (let i = 0; i < ans1.length; i++) {
//     ans1[i].style.backgroundColor = "yellow";
// }
const mappings={
    Invitation:"You are the invited for event",
    Remainder:"You are remainder for task",
    Notice:"You have a notice from college",
    Message:"You have 7 message"
}

// Array.form(outer.childern).forEach((child)=>{
//     let key=child.childern[0].innerText;
//     child.childern[1].innerText=mappings[key]
// })


const newElemnt=document.createElement("div")
const rootele=document.querySelector("body");
// newElemnt.innerHTML="hello"
rootele.appendChild(newElemnt)

console.log(Object.entries(mappings));

Object.entries(mappings).forEach((ele)=>{
    const newchilddiv=document.createElement("div");
    // newchilddiv.innerText="hello"
    newchilddiv.style.border="1px solid red"
    newchilddiv.innerHTML=`
    <h4 style="color:red">${ele[0]}</h4>
    <p> ${ele[1]}</p>
    `
    newElemnt.appendChild(newchilddiv)
})