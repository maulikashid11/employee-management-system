import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import PendingTask from './PendingTask'
import FailedTask from './FailedTask'
import { EmployeeContext } from '../contexts/EmployeeData'

const TasksOfEmployee = () => {
    const [employees, setEmployees, admin, loggedIn, setLoggedIn] = useContext(EmployeeContext)
    const name = useParams().employeename
    const employee = employees.find((employee) => employee.name === name)
    return (
        <>
            <Link className='border border-zinc-700 rounded-md p-2 mb-5 text-blue-500' to="/dashboard/admin">Go To Dashboard</Link>
            <h1 className="text-3xl my-3">{employee.name[0].toUpperCase().concat(employee.name.slice(1))}'s Tasks</h1>
            <div className="task-number mb-10 flex justify-center gap-10 flex-wrap">
                <div className='bg-blue-500 min-w-65 p-5 rounded-md'>
                    <h2 className='text-2xl font-bold text-center mb-2'>New Task</h2>
                    <p className='text-3xl text-center font-bold'>{employee.tasksNumber.newTask}</p>
                </div>
                <div className='bg-green-500 min-w-65 p-5 rounded-md'>
                    <h2 className='text-2xl font-bold text-center mb-2'>Completed Task</h2>
                    <p className='text-3xl text-center font-bold'>{employee.tasksNumber.completedTask}</p>
                </div>
                <div className='bg-yellow-500 min-w-65 p-5 rounded-md'>
                    <h2 className='text-2xl font-bold text-center mb-2'>Pending Task</h2>
                    <p className='text-3xl text-center font-bold'>{employee.tasksNumber.pendingTask}</p>
                </div>
                <div className='bg-red-500 min-w-65 p-5 rounded-md'>
                    <h2 className='text-2xl font-bold text-center mb-2'>Failed Task</h2>
                    <p className='text-3xl text-center font-bold'>{employee.tasksNumber.failedTask}</p>
                </div>
            </div>
            <div>
                <h2 className='text-3xl mb-5'>Your Tasks</h2>
                <div className='flex gap-10 flex-wrap justify-center md:justify-start'>
                    {
                        employee.tasks.map((task) => {
                            if (task.status === 'new') {
                                return <NewTask key={task.title} id={employee.id} task={task} />
                            }
                            else if (task.status === 'completed') {
                                return <CompletedTask key={task.title} task={task} />
                            }
                            else if (task.status === 'pending') {
                                return <PendingTask key={task.title} id={employee.id} task={task} />
                            } else {
                                return <FailedTask key={task.title} id={employee.id} task={task} />
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TasksOfEmployee