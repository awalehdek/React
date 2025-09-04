import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './components/Homepage'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col max-w-4xl mx-auto'>
        
        <section className='min-h-screen flex flex-col'>
          <Header/>
          <Homepage/>
        </section>

        <h1 className='text-indigo-400'>Transcript Viewer</h1> 
        <footer></footer>
    </div>
  )
}

export default App
