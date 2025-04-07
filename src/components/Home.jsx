import React from 'react'

const Home = () => {
    return (
        <main className='p-10 md:w-[70%] h-full '>
            <h1 className='md:text-5xl text-3xl my-10'>Make good communication with your employees</h1>
            <p>An Employee Management System (EMS) is a comprehensive software application designed to streamline the human resource functions of an organization. It enables businesses to efficiently manage employee information, monitor performance, track attendance, process payroll, and handle other administrative tasks. By digitizing and automating routine HR activities, EMS reduces manual errors, saves time, and enhances organizational productivity.</p>
            <a className=' bg-green-600 my-5 text-lg w-20 text-center font-bold inline-block rounded-lg p-2 ' href="/login">Login</a>
        </main>
    )
}

export default Home