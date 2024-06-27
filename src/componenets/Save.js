import React, { useState } from 'react'
import axios from 'axios';
import { base } from './BaseUrl';


const Save = () => {
    const [name,setname]=useState();
    const [nickname,setnick]=useState();
    const [fdata,setfdata]=useState({name:"",nickname:""});
    const click= async ()=>{
        
    //    setfdata({name,nickname})
    //    console.log(fdata);
    //     await axios.post("http://localhost:6001/route/save",fdata).then((res) =>{
    //         alert("posted sussefully");
    //     });
    fetch(`${base}/route/save`,{
        method:"post",
        headers:{
          "Content-Type": "application/json",
          
        },
        body:JSON.stringify({
          name:name,
          nickname:nickname
        })
    }).then(res => res.json).then(() =>{
        alert("posted")
    })

    }

  return (

    <div>
        <h1>This is save pageee</h1>
      <input placeholder='name' value={name} onChange={(e) =>setname(e.target.value)}></input>

      <input placeholder='nickname' value={nickname} onChange={(e) =>setnick(e.target.value)}></input>
     
     <button onClick={click}>CLick to submit </button>
    
    </div>
  )
}

export default Save
