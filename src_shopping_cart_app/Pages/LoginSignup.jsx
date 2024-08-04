import React, { useState } from 'react'

const LoginSignup = () => {
  const [islogin,setIslogin]=useState(true)
   const handlelogin=()=>{
    setIslogin(!islogin);
   }

   const [Name,setName]=useState("");
   const [Email,setEmail]=useState("");
   const [Password,setPassword]=useState("");

 
  return (
    <div className='bg-[#fbe4fe] h-[100vh] mx-[10%] sm:p-auto p-4 flex justify-center align-middle pt-32 '>
        <div className="bg-white h-[65vh] sm:w-[50%]  w-[90%] sm:min-h-[55vh] min-h-[90vh] pb-10 sm:mt-[0vh] mt-[-20vh]">
          <h1 className='text-left text-[35px] font-black ml-[10vh] mt-4'>{islogin?"Login":"Sign Up"}</h1>
          <div className="flex flex-col my-5 gap-5">
            {!islogin && <input value={Name} onChange={(e)=>setName(e.target.value)} 
            type="text" placeholder='Name' className='h-[40px] w-[60vh] ml-[10vh] p-4 border border-black' />}
            <input type="email" value={Email} onChange={(e)=>setName(e.target.value)} 
             placeholder='Email' className='h-[40px] w-[60vh] ml-[10vh] p-4 border border-black' />
            <input type="password"value={Password} onChange={(e)=>setName(e.target.value)} 
             placeholder='Password' className='h-[40px] w-[60vh] ml-[10vh] p-4 border border-black'/>
            <button  className='bg-[red] text-white w-[60vh] h-[50px] ml-[10vh] rounded'>
              Continue
            </button>
            <p className='text-left mt-[-10px] ml-[10vh]'> {islogin? "New User?":"Already have an account?"}  <span className='text-[red] cursor-pointer' onClick={handlelogin}>{!islogin?"Login":"Sign Up"} </span> </p>
            <p className='mt-[-10px] ml-[10vh]  text-left sm:text-center flex gap-2'>
              <input type="checkbox" name="" id="" />
               By continuing,I agree to the terms and use of privacy policy
            </p> 
            

          </div>
          <div className="">
            

          </div>

        </div>
      
    </div>
  )
}

export default LoginSignup
