import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div id='task-list' className='w-full min-h-[50vh] sm:h-[45%] flex flex-col sm:flex-row flex-nowrap overflow-x-auto py-4 gap-4 mt-10 rounded-lg'>
      {data.tasks.map((task, index) => {
        if (task.active) {
          return <AcceptTask data={task} key={index} />
        }
        if (task.completed) {
          return <CompleteTask data={task} key={index} />
        }
        if (task.failed) {
          return <FailedTask data={task} key={index} />
        }
        if (task.newTask) {
          return <NewTask data={task} key={index} />
        }
        return null;
      })}
    </div>
  )
}

export default TaskList
