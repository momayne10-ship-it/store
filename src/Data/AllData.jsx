import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'


const apiValue =createContext();

function AllData({children}) {

const [text,setText] = useState([]) ;

useEffect (()=>{
axios.get("https://api.sampleapis.com/coffee/hot")
.then((element)=>{
    setText(element.data)
})
},[])

  return (
    <apiValue.Provider  value={text}>
       {children} 
    </apiValue.Provider>
  )
}

export {apiValue,AllData};