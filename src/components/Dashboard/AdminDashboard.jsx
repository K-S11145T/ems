import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = ({ handleLogout }) => {
  return (
    <div>
      <div className='px-4 sm:px-6 md:px-10 py-5 min-h-screen bg-[#1c1c1c] w-full'>
        <Header handleLogout={handleLogout} />
        <CreateTask />
        <AllTask />
      </div>
    </div>
  )
}

export default AdminDashboard
