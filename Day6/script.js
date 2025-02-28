const Data=[
    {
        name:"Arpit",
        city:"jalaun",
        email:"arpit12@3gmail.com"
    },
    {
        name:"kshtiz",
        city:"kolkata",
        email:"k12@gmail.com"
    },
    {
        name:"mohan",
        city:"lucknow",
        email:"m12@3gmail.com"
    },
    {
        name:"shyam",
        city:"sitapur",
        email:"s12@3gmail.com"
    },
]

const root=document.getElementById("parent");
Data.forEach((ele)=>{
   const newCard=document.createElement('div');
   //setAttribute
   //classList.add
    newCard.addEventListener("click",()=>{
        console.log("card clicked")
        newCard.style.backgroundColor=getRandomColor();
    })

   newCard.className='card'
   newCard.innerHTML=`
   <h4>${ele.name}</h4> 
   <h6>${ele.city}</h6> 
   <p class="text">${ele.email}</p> 
   `;
   root.appendChild(newCard)
},true)

const handleBychange=()=>{
    console.log("button clicked")
    //logic to change background color
    let temp1=document.querySelector('body')
    temp1.style.backgroundColor=getRandomColor();
}

const getRandomColor = () => {
    const ele = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += ele[Math.floor(Math.random() * 16)];
    }
    return color;
};
const textElements = document.querySelectorAll('.text');
textElements.forEach((ele) => {
    ele.addEventListener('click', () => {
        event.stopPropagation();
        ele.style.backgroundColor = getRandomColor();
    });
},true);
