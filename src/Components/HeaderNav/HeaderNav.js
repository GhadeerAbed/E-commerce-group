import React from 'react'
import './HeaderNav.css'
const HeaderNav = ({name}) => {
  return (
    <div>
    <div className='HedNav'>
    <h3>Home/{name}</h3>
    </div>
    </div>
  )
}

export default HeaderNav;

 
