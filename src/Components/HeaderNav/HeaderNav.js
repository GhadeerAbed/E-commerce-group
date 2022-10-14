import React from 'react'
import './HeaderNav.css'
const HeaderNav = ({name}) => {
  return (
    <div>
    <div className='Nav'>
    <h3>Home/{name}</h3>
    </div>
    </div>
  )
}

export default HeaderNav

 
