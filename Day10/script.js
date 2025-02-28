
//dummyjson.com/recipes/search?q=Margherita'


const getData=(text)=>{
  const promise=fetch(`https://dummyjson.com/recipes/search?q=${text}`)
    promise.then((res)=>{
          const pr2=res.json();
          pr2.then((data)=>{
            showCards(data.recipes);
          })
    })
  }
  const temp=document.getElementById("cards-container");

  const showCards=(dataArr)=>{
    temp.innerHTML='';
    dataArr.forEach((elem) => {
        const newDiv=document.createElement("div");
        newDiv.className="card";
        newDiv.innerHTML=`
        <h4>${elem.name}</h4>
        <img src="${elem.image}" width=100px>
        <p>${elem.cuisine}</p>
        `
       temp.appendChild(newDiv)
    });
  }
 let timeoutId=null;
  const handleSearch=(e)=>{

     if(timeoutId){
        clearTimeout(timeoutId)
     }

    timeoutId=setTimeout(()=>{
        getData(e.target.value);
    },1000);
  }