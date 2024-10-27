import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='w-full sm:w-[20vw] sm:min-w-[20vw] flex flex-col justify-between rounded-xl min-h-[65vh] sm:h-full bg-zinc-800 shrink-0 shadow-lg mb-4 sm:mb-0 sm:mr-4'>
        <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-4">{data.category}</h1>
            <div className="flex items-center mb-4">
                <svg className="w-5 h-5 text-indigo-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <h4 className="text-sm font-medium text-gray-300">Due Date: {data.taskDate}</h4>
            </div>
            <div className="bg-indigo-900/20 rounded-lg p-4 mb-6">
                <h2 className="text-lg font-semibold text-white mb-2">D{data.taskDate}</h2>
                <p className="text-sm text-gray-300">{data.taskDescription}</p>
            </div>
            <div className="flex justify-center">
                <button className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition duration-300 ease-in-out">
                   Completed
                </button>
            </div>
        </div>
    </div>
  )
}

export default CompleteTask
