import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='w-full min-h-screen bg-zinc-900 text-white'>
            <Header />
            <Outlet />
        </div>
    )
}

export default HomePage