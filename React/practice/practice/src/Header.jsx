import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (<>
    <div>Header Always show component</div>
   <div style={{display:'flex',gap:'20px'}}>
     <Link to={'/'}>Home</Link>
     <Link to={'/Footer'}>Footer</Link>
      <Link to={'/Body'}>Body</Link>

   </div>
    </>
  )
}

export default Header