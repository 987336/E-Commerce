import { useState } from "react";

function TestComp(){
    const[data,setData]=useState(null);
    console.log("msg from setDATA",data);
   function Currency(){
    fetch("https://v6.exchangerate-api.com/v6/8d960273bd9f575f7e3c1b8d/latest/USD").then((result)=> result.json()).then((resp)=>{
        console.log(resp);
        setData(resp.message);
    })
   }
   return(
    <div>
        <button onClick={()=>Currency()}> Click Me</button>
        {
            <p>{data}</p>
        }
    </div>
   )
}
export  {TestComp};