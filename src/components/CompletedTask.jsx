import React, { useContext } from 'react'

const CompletedTask = ({ task }) => {
  return (
    <div className='bg-green-500 w-70 p-5 rounded-md'>
      <h3 className='font-bold text-lg mb-2'>{task.title}</h3>
      <p className='text-sm text-zinc-300'>{task.description}</p>
      <p className='text-lg font-bold mt-2'><span className='font-medium '>Status: </span>Completed</p>
    </div>
  )
}

export default CompletedTask