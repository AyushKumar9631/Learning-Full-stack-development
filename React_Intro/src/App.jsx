import React, { useState } from 'react'


const App = () => {

  // let a=2

  //this will not work
  const abc= ()=>{
    // a++;
    // console.log(a);
    setA(a+1);
  }

  const cba= ()=>{
    setA(a-1);
  }

  const [a, setA]= useState(1)

  return (
    <div>
      <h1>Hello {a}</h1>
      <h2>Hii a</h2>
      <button onClick={abc}>Increase</button>
      <button onClick={cba}>Decrease</button>
    </div>
  )
}

export default App