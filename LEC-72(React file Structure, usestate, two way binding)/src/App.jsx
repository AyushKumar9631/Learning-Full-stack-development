import React from 'react'
import { useState } from 'react';

const App = () => {

  const [userName, setuserName] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(userName)
    setuserName('')
  }

  const chnageHandler=(e)=>{
    setuserName(e.target.value)
  }

  return (
    <div>
      <form className=' flex flex-col' onSubmit={submitHandler}>
        <input  
        value={userName}
        onChange={chnageHandler}
        className="m-5 rounded px-4 py-3 text-xl bg-green-100 w-100" 
        type="text"  
        placeholder='Enter your name'/>
        <button className=" m-5 px-4 py-3 text-xl bg-green-600 rounded-md font-semibold br-20 w-30">Submit</button>
      </form>
    </div>
  )
}

export default App