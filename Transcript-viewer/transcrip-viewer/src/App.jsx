import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './components/Homepage'
import Header from './components/Header'
import DisplayFile from './components/DisplayFile'

function App() {
  const [file, setCount_file] = useState(null)
  const [audioStream, setCount_audio] = useState(null)

  const audioRecordAvailable= file || audioStream

  return (
    <div className='flex flex-col max-w-4xl mx-auto'>
        
        <section className='min-h-screen flex flex-col'>
          <Header/>
          { audioRecordAvailable ? (
            <DisplayFile/>
          ):(<Homepage/>)}
        </section>

        <h1 className='text-indigo-400'>Transcript Viewer</h1> 
        <footer></footer>
    </div>
  )
}

export default App
