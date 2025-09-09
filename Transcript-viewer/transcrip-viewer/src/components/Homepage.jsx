import React from 'react'

export default function Homepage() {
  return (
    <main className='flex-1 p-4 flex flex-col justify-center pb-25 '>
        <h1 className="font-extrabold tracking-tight text-5xl sm:text-6xl md:text-7xl">
          Transcript <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Viewer</span>
        </h1>
        <h3  className='font-medium'>Record<span 
            className='text-blue-400'>&rarr;</span> Translate
            <span className='text-blue-400'>&rarr;</span> View & Edit 
        </h3>
        <button>
          <p>Recording</p>
          <i class="fa-solid fa-microphone"></i>
          
        </button>
    </main>
  )
}
