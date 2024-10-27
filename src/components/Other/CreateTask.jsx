import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData , setuserData] = useContext(AuthContext)


  const [taskTitle, settaskTitle] = useState('')
  const [taskDesc, settaskDesc] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignto, setassignto] = useState('')
  const [category, setcategory] = useState('')

  const [task, settask] = useState('')
  

  const submitHandler = (e) => {
    e.preventDefault();
    settask({ taskTitle, taskDesc, taskDate, category, active: false, newTask: true, failed:false, completed: false })


    userData.forEach(i => {
      if (i.name === assignto) {
        i.tasks.push(task)
        i.taskCounts.newTask++; 
      }
    })
    // localStorage.setItem('employees', JSON.stringify(data))
    setuserData(userData)
    console.log(userData);
    
    settaskDate('')
    settaskDesc('')
    settaskTitle('')
    setassignto('')
    setcategory('')
  }

  return (
    <div className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <form onSubmit={(e) => { submitHandler(e) }} className="bg-zinc-800 rounded-xl p-4 sm:p-6 shadow-lg w-full max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4 sm:mb-6">Create New Task</h2>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          <div className="lg:w-1/2">
            <div className="mb-4">
              <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-300 mb-2">Task Title</label>
              <input value={taskTitle} onChange={(e) => { settaskTitle(e.target.value) }} type="text" id="taskTitle" placeholder="Make a UI Design" className="w-full px-3 py-2 bg-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="mb-4">
              <label htmlFor="dueDate" className="block text-sm font-medium text-gray-300 mb-2">Due Date</label>
              <input value={taskDate} onChange={(e) => { settaskDate(e.target.value) }} type="date" id="dueDate" className="w-full px-3 py-2 bg-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="mb-4">
              <label htmlFor="assignTo" className="block text-sm font-medium text-gray-300 mb-2">Assign to</label>
              <input value={assignto} onChange={(e) => { setassignto(e.target.value) }} type="text" id="assignTo" placeholder="Employee Name" className="w-full px-3 py-2 bg-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="mb-4 lg:mb-0">
              <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <input value={category} onChange={(e) => { setcategory(e.target.value) }} type="text" id="category" placeholder="design, dev, etc." className="w-full px-3 py-2 bg-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">Description</label>
              <textarea value={taskDesc} onChange={(e) => { settaskDesc(e.target.value) }} id="description" rows="8" className="w-full px-3 py-2 bg-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter task description..."></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
