import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData , setuserData] = useContext(AuthContext)


  return (
    <div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="bg-zinc-800 rounded-xl p-4 sm:p-6 shadow-lg overflow-x-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4">All Tasks</h2>
        <div className="overflow-x-auto">


          <table className="w-full text-xs sm:text-sm text-left text-gray-300">
            <thead className="text-xs uppercase bg-zinc-700 text-gray-400">
              <tr>
                <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3">Employee Name</th>
                <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3">New Task</th>
                <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3">Active Task</th>
                <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3">Completed Task</th>
                <th scope="col" className="px-3 sm:px-6 py-2 sm:py-3">Failed Task</th>
              </tr>
            </thead>
            <tbody>
                {userData.map((i,e) => {

                return <tr key={e} className="bg-zinc-600 border-b border-zinc-700">
                  <td className="px-3 sm:px-6 py-2 sm:py-4 font-medium text-white whitespace-nowrap">{i.name}</td>
                  <td className="px-3 sm:px-6 py-2 sm:py-4 ">{i.taskCounts.newTask}</td>
                  <td className="px-3 sm:px-6 py-2 sm:py-4">{i.taskCounts.active}</td>
                  <td className="px-3 sm:px-6 py-2 sm:py-4">{i.taskCounts.completed}</td>
                  <td className="px-3 sm:px-6 py-2 sm:py-4">{i.taskCounts.failed}</td>
                </tr>
              })}


            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AllTask
