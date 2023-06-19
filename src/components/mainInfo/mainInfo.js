import React from 'react'
import './mainInfo.css'

const MainInfo = ({items}) => {
  return (
    <div className='main-info'>
        <h2>MOST POPULAR CHARACTERS</h2>
        <p><span className='red'>Number of heroes:</span> {items.length}</p>
    </div>
  )
}

export default MainInfo;