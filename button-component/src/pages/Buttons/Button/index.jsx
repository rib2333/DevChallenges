import React, { Fragment } from 'react'

export default function Button({text,variable}) {
  
  return (
   <Fragment>
     <button className='flex-1'>{text}</button>
   </Fragment>
  )
}
