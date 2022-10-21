import React from 'react'
import Button from '../Button'
export default function ButtonWrapper(props) {
  return (
    <div className="flex flex-col w-full">
      <div className="text-xs text-[#33333] my-[12px] whitespace-nowrap">{props.content}</div>
        <Button {...props}></Button>
    </div>
  )
}
