import React from 'react'
import Sidebar from './component/Sidebar'
import Hero from './component/Hero'
import OurTask from './component/OurTask'
import Status from './component/Status'

function App() {
  return (
    <>
      <Sidebar />
      <div className=' flex flex-row'>
        <div className=''>
          <Hero />
          <OurTask />
        </div>
        <div className=' border-l-2 ml-16 border-gray-300 relative   overflow-hidden'>
          <Status />

        </div>
      </div>
    </>
  )
}

export default App