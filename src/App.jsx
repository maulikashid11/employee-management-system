import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'


function App() {
  return (
    <main className='w-full min-h-screen bg-zinc-900 text-white'>
      <Header />
      <Outlet />
    </main>
  )
}

export default App
