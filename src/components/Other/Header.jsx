import React, { useState } from 'react'

const Header = ({handleLogout , data}) => {
  // const [username, setusername] = useState('')

  // if(!data){
  //   setusername("Kroloadster")
  // }else{
  //   setusername(data.name)
  // }


  return (
    <div className='flex flex-col sm:flex-row items-center justify-between w-full py-4 px-6 bg-[#1c1c1c] rounded-lg space-y-4 sm:space-y-0'>
      <h1 className='text-xl sm:text-2xl font-bold text-white text-center sm:text-left'>
        Hello <br className='hidden sm:inline' />
        <span className='text-2xl sm:text-3xl text-blue-400'>{data ? data.name : 'Kroload'}👋</span> 
      </h1>
      <button onClick={()=>{handleLogout()}} className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-sm sm:text-base'>
        LogOut
      </button>
    </div>
  )
}

export default Header
