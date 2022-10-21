import React from 'react'
import { NavLink } from 'react-router-dom'
export default function MyNavLink(props) {
  return (
    <NavLink className="mt-[25px] text-sm" {...props} style={({isActive})=> ({color: isActive ? 'black' : '#9E9E9E'})}></NavLink>
  )
}
