import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {base} from "./BaseUrl"

const Getall = () => {

    const [alldata,setalldata]=useState([]);

    useEffect(   () =>{
    axios.get(`${base}/route/getall`).then((res) =>{
       
       setalldata(res.data.data);
        
    }).then(() => console.log("fetched data",alldata));
        
    },[])
  return (
    <div >
      <h1>This is getall page</h1>

      { alldata?.map((e) =>{
        return <div> 
            <p>Name: {e.name}</p>
            <p>NICK: {e.nickname}</p>
            <hr></hr>
        </div>
      })} 
    </div>
  )
}

export default Getall
