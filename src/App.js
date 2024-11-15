import { useState, useEffect } from "react";


export default function App() {

  const [objT,setObjT]=useState()
  let obj = {
    "name":"",
    "age":"",
    "group":""
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    obj[name]=value
    setObjT(obj)
    console.log(obj);

  };

 
 
  
 
  return (
    <div className="App">
      <h1>{objT?.name}</h1>
      <form>
        <input type="text" name="name" onChange={(e)=>handleChange(e)} placeholder="Name" />
        <input type="text" name="age" onChange={(e)=>handleChange(e)} placeholder="Age" />
        <input type="text" name="group" onChange={(e)=>handleChange(e)} placeholder="Group" />
        
      </form>
    </div>
  );
}
