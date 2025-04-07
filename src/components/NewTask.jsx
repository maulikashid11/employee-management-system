import React, { useContext } from 'react'
import { EmployeeContext } from '../contexts/EmployeeData'

const NewTask = ({ id, task }) => {
  const [employees, setEmployees, admin, loggedIn, setLoggedIn, toComplete, toPending, toFailed] = useContext(EmployeeContext)

  return (
    <div className='bg-blue-500 w-70 p-5 rounded-md'>
      <h3 className='font-bold text-lg mb-2'>{task.title}</h3>
      <p className='text-sm text-zinc-300'>{task.description}</p>
      <p className='text-lg font-bold mt-2'><span className='font-medium '>Status: </span>New</p>
      <div className="buttons flex flex-col mt-5">
        <button className='block border-2 border-green-500 rounded-md p-1 my-1  font-bold cursor-pointer' onClick={(e) => { setEmployees(toComplete(id, task)) }}>Mark as completed</button>
        <button className='block border-2 border-yellow-500 rounded-md p-1 my-1  font-bold cursor-pointer' onClick={(e) => { setEmployees(toPending(id, task)) }}>Mark as pending</button>
        <button className='block border-2 border-red-500 rounded-md p-1 my-1  font-bold cursor-pointer' onClick={(e) => { setEmployees(toFailed(id, task)) }}>Mark as failed</button>
      </div>
    </div>
  )
}

export default NewTask