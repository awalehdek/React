import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-4 p-4'>
            <h1>Transcript<span className='text-purple-400'> Viewer</span></h1>

            <button className="flex items-center gap-2 cursor-pointer specialbtn font-bold py-2 px-4 rounded">
              <p>New</p>
              <i className="fa-solid fa-plus"></i>
            </button>

          </header>
  )
}
