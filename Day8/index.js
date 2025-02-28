// console.log("Start");
// const handleInnerCall = () => {
//     console.log("Inner Call");
// };
// const handleCall = () => {
//     console.log("Outer Call");
//     handleInnerCall();
//     console.log("Done");
// }

// //handleCall();
// //document.querySelector("body").addEventListener("click",handleCall);
// setTimeout(handleCall,10000); //Time in milliseconds
// console.log("End");

// //setTimeOut is used to call a function after a number of milliseconds.
// //The function is called after the specified time has elapsed.

// //setInterval(handleCall,10000); //Time in milliseconds

// //setInterval is used to call a function at specified intervals.
// //The function is called after the specified time has elapsed.

// //Asynchronous functions are those that are running parallel to one another
// //They are difficult to write and debug.
// //Most modern asynchronous JavaScript methods dont use callbacks. Instead , in JS this asynchronous programming is solved using Promises.            


// console.log("A");
// const handleCall = () =>{
//     console.log("H");
// }

// setTimeout(()=>{
//     console.log("N");
//     setTimeout(()=>{
//         console.log("P");
//     },0);
//     handleCall();
//     console.log("B");
// },5000);
// console.log("C");

//--------------------------------------------------------------------------------------------------------------------------------------------------------

/*

hyderabad : take user credentials and authenticate
-> handleUser()

noide : make payment from the wallet using the required checks
-> handlePayment(id)

bangalore : to handle these two teams and implement wallet functionality
// **USER REQUIREMENTS (CASE 1)**
-> cont userId = handleUser()
-> if(userId){
    const resp=handlePayment(userID)
    console.log(resp);
}
    else{
    console.log("Incorrect or invalid details");
    }

// **USING CALLBACKS**
    const resp = handleUser(handlePayment)
                    //what if the team calls handlePayment 2 times
                    //or even with wrong credentials
                    //or never calls it
    console.log(resp);


// ***USING THE PROMISES
    const user = handleUser() --> returns a promise
    THEN{
        const resp = handlePayment(user);
        console.log(resp)
    }
    ELSE{
        console.log("Invalid Credentials");
    }
*/


//********************************************************************************************************************************************************* */
/*
Promises are the objects that represents the eventual completion or failure of an asynchronous operation and its resulting value
It helps asynchronous methods to return values like synchronous methods,instead of returning the final value the method returns a promise to supply the value at some time in the future
It has three states:
i)pending : initial state, neither fulfilled nor rejected
ii.)fulfilled : meaning that the operation was completed successfully
iii.)rejected : meaning that the operation has failed.
*/


//********************************************************************************************************************************************************* */
//Promises : fetch()
const searchProduct = (e) =>{
    const id = e.target.value;
    const pro=fetch(`https://dummyjson.com/products/${id}`);
    pro.then((a)=>{
        console.log("a",a);
        const pr2=a.json();
        pr2.then((data)=>{
            //console.log(data);
            showUI(data);
        }).catch((e)=>{
            console.log("e",e);
        })
    }).catch((b)=>{
        console.log("b",b)
        const pr3=b.json();
        pr3.then((data)=>{
            console.log(data);
        }).catch((e)=>{});
        console.log(data);
    });
    //fetch() returns a promise.
    
    }
    //searchProduct();
    function showUI (data) {
        //responsible for creating a visualization
        // console.log("data:",data);
        // const pro = data.products;
        // console.log(pro[0]);
        console.log("Data:",data);
        const root = document.getElementById("cards");
        const newCard = document.createElement("div");
        newCard.id = "card";
        newCard.innerHTML = `
        <h4>${data.title}</h4>
        <p>${data.price}</p>
        <p>${data.description}</p>
        <img src=${data.thumbnail}/>
        `
        root.appendChild(newCard);  
        storeData(data);
    }
    //Store the searched product in the local storage
    function storeData(data){
        //store the data in the local storage
        const oldData = localStorage.getItem("product");
        const arr = JSON.parse(oldData || "[]");
        arr.push(data);
        localStorage.setItem("product",JSON.stringify(arr));
    }
    
    function showHistory (){
        const oldData = localStorage.getItem("product");
        const arr = JSON.parse(oldData || "[]");
        arr.forEach((data)=>{
            showUI(data);
        })
    }
    
    showHistory();
    /*
    console.log(pro);
    */
    
    //************************************************************************************************************************************************************ */
    /*
    // Destructuring refers to unpacking the object properties into variables
    for eg:
        const obj ={
            name: "John",
            city: "New York",
        }
        const {name,city} = obj;
        console.log(name,city); //John New York
    */