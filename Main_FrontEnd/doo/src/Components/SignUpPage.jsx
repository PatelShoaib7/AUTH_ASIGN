import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const SignUpPage = () => 
{ const [user , setUser]= useState({})
   
  
  const handleChange =(e)=>
   {
        let {name , value} = e.target
        setUser({...user , [name]:value})

   }
   const handleSubmit  =()=>{
     fetch("http://localhost:1111/auth/signup",{
      headers:{"Content-Type":'application/json'},
      method:'POST',
      body:JSON.stringify(user)
     })
    .then((res)=> res.json())
    .then((data)=> console.log(data))

   }

    //  const handleSubmit =ayns()=>{
      
    //   fetch("http://localhost:1111/auth/signup")
    //   .then((res)=> res.json)
    //   .then((data)=>
    //   ( console.log(data)
    //   ))
    //  }
 
    
  return (
    <div>  <h1>SignUpPage</h1>  
        <div>
          {/*  */}
                <input placeholder='Enter name'  name='name' onChange={handleChange} value={user.name} />
                <input placeholder='Enter UserName' name='username' onChange={handleChange}  value={user.username} />
                <input placeholder='Enter Email' name='email' onChange={handleChange} value={user.email} />
                <input placeholder='Enter password' name='password ' onChange={handleChange}  value={user.password}/>
               <input type='submit'/>
          
          </div>
    </div>
   
  )
}
