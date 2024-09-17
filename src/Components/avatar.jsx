import React from 'react'
import DP from "../assets/dp.jpg"
import Stats from './stats'
import Overview from './Overview'
import '../styles/avatar.css'

function Avatar() {
  return (
    <div className='flex profile lg:block lg:w-full'>
    <div className="avatar lg:px-10">
    <div className="w-64 lg:w-32 border-4 lg:border border-yellow-400 rounded-full">
    <img src={DP} />
    </div>
</div>
{/* <div><Stats/></div> */}
<div className='block'><Overview/></div>
    </div>
  )
}

export default Avatar
