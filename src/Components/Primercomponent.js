import React from 'react'
import { useState } from 'react'

const Primercomponent = () => {
  const[primercomponent,setContador] = useState(0)
  const incrementar = () => {
    setContador(primercomponent + 1)
  }
  const decrementar = () => {
    setContador(primercomponent - 1)
  }
  const borrar = () =>{
    setContador(0)
  }
  return (
    <>
    <div>
      <h2>{primercomponent}</h2>
    </div>
    <div>
      <button onClick={incrementar}>incrementar</button>
      <button onClick={decrementar}>decrementar</button>
      <button onClick={borrar}>borrar</button>
    </div>
    
    </>
  )
}

export default Primercomponent