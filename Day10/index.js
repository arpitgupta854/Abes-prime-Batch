const showSuggestion=(text)=>
    {
        const pr=fetch(
            `https://google-map-places.p.rapidapi.com/maps/api/place/queryautocomplete/json?input=${text}&radius=1000&language=en&location=40%2C-110&offset=3`,
            {
                "headers":
                {
                    "x-rapidapi-host":"google-map-places.p.rapidapi.com",
                    "x-rapidapi-key":"9bd7790a85msh29e8f1b16c0db20p1dfb16jsn833ae8fd8acd"
                }
            }
        )
        pr.then((res)=>
        {
            const pr2=res.json();
            pr2.then((data)=>
            {
                printSuggestion(data.predictions);
            })
        })
    }
    
    const printSuggestion=(dataArr)=>
    {
        const root=document.querySelector("#container");
        root.innerHTML="";
        dataArr.forEach(element => {
            const div=document.createElement("div");
            div.className="suggestion";
            div.innerHTML=`
            <p>${element.description}</p>
            `;
            root.appendChild(div);
        });
    }
    let setTimeOutId=null;
    const handleSearch=(e)=>
    {
        if(setTimeOutId !== null)
        {
            clearTimeout(setTimeOutId);
        }
        const text=e.target.value;
        setTimeOutId=setTimeout(() => showSuggestion(text),1000);
    }