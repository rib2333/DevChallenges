import React, { Fragment } from 'react'
import clsx from 'clsx'
export default function Button({text,variant,hoverAndFocus=false,disabled = false}) {
  console.log(hoverAndFocus)
const defaultButton = clsx('text-sm font-medium text-center text-[#3F3F3F] bg-[#E0E0E0]', 
                           'w-[81px] h-[36px] rounded-md py-2 px-4  drop-shadow-md',
                           'hover:bg-[#AEAEAE] focus:bg-[#AEAEAE] disabled:bg-[#AEAEAE] '
                           );
const outLineButton = clsx('text-sm font-medium text-center text-[#3D5AFE]', 
                           'w-[81px] h-[36px] rounded-md py-2 px-4 border border-solid border-[#3D5AFE] ',
                           'hover:bg-outlineBg focus:outlineBg disabled:bg-outlineBg ')
                           
  return (
   <Fragment>
     <button 
     disabled={disabled || hoverAndFocus}
     className={variant === 'outline' ? clsx(outLineButton) : clsx(defaultButton)}>{text}</button>
   </Fragment>
  )
}
