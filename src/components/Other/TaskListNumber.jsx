import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex flex-col gap-3 sm:flex-row'>
      <div className='grid grid-cols-2 sm:grid-cols-4 w-full gap-3'>
        <div className='flex bg-zinc-800 rounded-lg items-start p-3 flex-col justify-between gap-1 w-full h-28 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105'>
          <h1 className='text-2xl font-bold text-blue-400'>{data.taskCounts.newTask}</h1>
          <h2 className='text-base font-semibold text-white'>New Tasks</h2>
        </div>
        <div className='flex bg-zinc-800 rounded-lg items-start p-3 flex-col justify-between gap-1 w-full h-28 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105'>
          <h1 className='text-2xl font-bold text-yellow-400'>{data.taskCounts.completed}</h1>
          <h2 className='text-base font-semibold text-white'>Completed</h2>
        </div>
        <div className='flex bg-zinc-800 rounded-lg items-start p-3 flex-col justify-between gap-1 w-full h-28 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105'>
          <h1 className='text-2xl font-bold text-green-400'>{data.taskCounts.active}</h1>
          <h2 className='text-base font-semibold text-white'>Accepted</h2>
        </div>
        <div className='flex bg-zinc-800 rounded-lg items-start p-3 flex-col justify-between gap-1 w-full h-28 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105'>
          <h1 className='text-2xl font-bold text-red-400'>{data.taskCounts.failed}</h1>
          <h2 className='text-base font-semibold text-white'>Failed</h2>
        </div>
      </div>
    </div>
  )
}

export default TaskListNumber
