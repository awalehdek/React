import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-4 p-4'>
            <h1>Transcript<span className='text-purple-400'> Viewer</span></h1>

            <button className='flex items-center gap-2 '>
              <p>New</p>
              <i class="fa-solid fa-plus"></i>
            </button>
          </header>
  )
}
