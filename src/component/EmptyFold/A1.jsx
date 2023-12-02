import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react'

const context =createContext();
function A1() {
    let [name,setname]=useState("sreenu")
  return (
    <>
        <context.Provider value={name}>
            <h1>{`Welcome ${name}.`}</h1>
            <h2>A1 component</h2>
            <B1/>
        </context.Provider>
    </>
  )
  }
  function B1(){
     return(
        <div>
            <h2>B1 component</h2>
            <C1/>
        </div>
     )
  }
  function C1(){
     return(
        <div>
            <h2>C1 component</h2>
            <D1/>
        </div>
     )
  }
  function D1(){
    const user=useContext(context)
    return (
        <div>
            <h1>{`Hello ${user} again!!`}</h1>
            <h2>D1 component</h2>
        </div>
    )
  }

export default A1