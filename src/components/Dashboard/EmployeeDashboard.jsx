import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({handleLogout , data}) => {
  console.log(data);
  return (
    <div>
      <div className='px-10 py-5 min-h-screen bg-[#1c1c1c] w-full '>
        <Header handleLogout={handleLogout} data={data} />
        <TaskListNumber data={data} />
        <TaskList data={data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard
