import React from 'react'
import Button from '../Button'
export default function ButtonWrapper(props) {
  return (
    <div className="flex flex-col w-full">
      <div>{props.content}</div>
        <Button {...props}></Button>
    </div>
  )
}
