import React from 'react'
import Sidebar from './component/Sidebar'
import Hero from './component/Hero'
import OurTask from './component/OurTask'
import Status from './component/Status'

function App() {
  return (
    <>
      <Sidebar />
      <div className=' grid grid-cols-2'>
        <div className=''>
          <Hero />
          <OurTask />
        </div>
        <div className=' relative ml-80 overflow-hidden'>
          <Status />

        </div>
      </div>
    </>
  )
}

export default App