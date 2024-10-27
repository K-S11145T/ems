import React, { useState } from 'react'

const Login = ({handleLogin}) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email,password)

    setEmail('');
    setPassword('');
  };


  return (
    <div className='flex h-screen w-full items-center justify-center px-4'>
      <div className='border-2 w-full p-5 max-w-md rounded-3xl border-zinc-400'>
        <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-5 p-4'>
          <input required value={email} onChange={(e) =>setEmail(e.target.value)} className='p-2 rounded-md border-b-2 border-zinc-400 outline-none bg-transparent placeholder:text-zinc-400 w-full'  type="email" placeholder='Email' />
          
          <input required value={password} onChange={(e) => setPassword(e.target.value)} className='p-2 rounded-md border-b-2 border-zinc-400 outline-none bg-transparent placeholder:text-zinc-400 w-full' type="password" placeholder='Password' />
          
          <button className='p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full'>
            <span className='flex items-center justify-center'>
              <span>Login</span>
              <svg className='w-5 h-5 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
              </svg>
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
