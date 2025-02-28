const data = [
    { id: "1we", name: "John", age: 26, city: "Delhi", email: "arpit12@3gmail.com" },
    { id: "2we", name: "Siva", age: 27, city: "Mumbai", email: "arpit123@3gmail.com" },
    { id: "3we", name: "Ravi", age: 28, city: "Noida", email: "arpit124@3gmail.com" },
    { id: "4we", name: "hari", age: 28, city: "Delhi", email: "arpit124@3gmail.com" },
];

const root = document.getElementById('root');

const showcard = (newData) => {
    showoptions();
    root.innerHTML = "";
    newData.forEach((ele) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <h2>${ele.name}</h2>
        <p>${ele.age}</p>
        <p>${ele.city}</p>
        <button onClick="deletecard(event,'${ele.id}')">Delete</button>
        `;
        root.appendChild(card);
    });
};

// const city=data.map((ele)=>ele.city);

// const citiesobj={}
// data.forEach((ele)=>{
//     citiesobj[ele.city]=true;
// });
// const city=Object.keys(citiesobj);

const selectedCity=document.getElementsByTagName('select')[0];
const showoptions=()=>{
    selectedCity.innerHTML='';
    const citiesobj={}
    data.forEach((ele)=>{
        citiesobj[ele.city]=true;
    });
    const city=Object.keys(citiesobj);

    city.forEach((ele)=>{
        const option=document.createElement('option');
        option.value=ele;
        option.innerText=ele;
        selectedCity.appendChild(option);
    });
}




const deletecard = (e, i) => {
    e.target.parentElement.remove();
    data.forEach((ele, index) => {
        if (ele.id === i) {
            data.splice(index, 1);
        }
    });
    showoptions()
};

const HandleSelect = (e) => {
    const selectedCity = e.target.value;
    const filteredData = data.filter((ele) => ele.city === selectedCity);
    showcard(filteredData);
};

showcard(data);

const handleformSubmit = (event) => {
    event.preventDefault();
    const email = event.target[3].value;

    if (isEmailExit(email)) {
        alert("Email already exists");
        return;
    }

    const newEle = {
        name: event.target[0].value,
        age: event.target[1].value,
        city: event.target[2].value,
        // email: email,
    };
    data.push(newEle);
    showcard(data);
};

const isEmailExit = (email) => {
    return data.some((ele) => ele.email === email);
};
