import React from 'react'
import './index.css'
import Main from './Main'
import Sidebar from './Sidebar'

function index() {
  return (
    <div className='stack-index'>
        <div className="stack-index-content">
            <Sidebar/>
            <Main />
        </div>
    </div>
  )
}

export default index