import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='p-5 flex items-center justify-between border-b-zinc-700 border-b'>
            <Link to="/" className='md:text-xl text-zinc-300 text-lg'>Employee Management System</Link>
            <div className='hidden md:block'>
                <NavLink className={({ isActive }) => isActive ? 'text-white mx-2' : 'text-zinc-400 mx-2'} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-white mx-2' : 'text-zinc-400 mx-2'} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-white mx-2' : 'text-zinc-400 mx-2'} to="/pricing">Pricing</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'text-white mx-2' : 'text-zinc-400 mx-2'} to="/contact">Contact Us</NavLink>
            </div>
            <div>
                <Link className='mx-2 border-1 font-semibold border-zinc-700 align-middle text-sm rounded-lg p-2 ' to="/login">Login</Link>
            </div>
        </header>
    )
}

export default Header