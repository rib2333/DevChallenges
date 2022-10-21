import React, { Fragment } from 'react'
import clsx from 'clsx'
export default function Button({text, variant, hoverAndFocus = false, disabled = false, disableShadow = false,color='default'}) {
const outLineButton = clsx('!text-[#3D5AFE] bg-[#FFFFFF]', 
                           '!border !border-solid !border-[#3D5AFE] ',
                           'hover:!bg-outlineBg focus:!bg-outlineBg disabled:!bg-outlineBg')
const textButton = clsx('!text-[#3D5AFE] !bg-[#FFFFFF]', 
                        'hover:!bg-outlineBg focus:!bg-outlineBg disabled:!bg-outlineBg ')
                        
const defaultButton = clsx('text-[#3F3F3F] bg-[#E0E0E0]', 
                           'shadow-default',
                        'hover:bg-[#AEAEAE] focus:bg-[#AEAEAE] disabled:bg-[#AEAEAE] '
                        );
const primaryButton = clsx('text-[#FFFFFF] bg-[#3D5AFE]', 
                           'shadow-primary',
                           'hover:bg-[#0039CB] focus:bg-[#0039CB] disabled:bg-[#0039CB] '      
                          );    
const secondaryButton = clsx('text-[#FFFFFF] bg-[#455A64]', 
                             'shadow-secondary',
                             'hover:bg-[#1C313A] focus:bg-[#1C313A] disabled:bg-[#1C313A] '
                             );
const dangerButton = clsx('text-[#FFFFFF] bg-[#D32F2F]', 
                             'shadow-danger',
                             'hover:bg-[#9A0007] focus:bg-[#9A0007] disabled:bg-[#9A0007] '
                             );
  /*
  taiwind样式规则：
  1.后面的样式覆盖前面的样式
  2.！可以提交样式的优先级
  
  
  */                  
  return (
   <Fragment>
     <button 
     disabled={disabled || hoverAndFocus}
     className={ `text-sm font-medium text-center w-[81px] h-[36px] rounded-md py-2 
                  ${color === 'primary' ? clsx(primaryButton) : 
                    color === 'secondary' ? clsx(secondaryButton): 
                    color === 'danger' ? clsx(dangerButton):
                    color === 'default' && !variant ? clsx(defaultButton) :
                    ''}
                  ${variant === 'outline' ? clsx(outLineButton) : ''}
                  ${variant === 'text' ? clsx(textButton): ''}
                  ${disableShadow ? 'shadow-none' : ''}
                  ${disabled && !variant ? 'text-[#9E9E9E] disabled:bg-[#E0E0E0] shadow-none' : 
                    variant === 'text' ? 'disabled:!bg-[#FFFFFF] disabled:!text-[#9E9E9E] shadow-none' : 
                    variant === 'outline' ? 'disabled:!bg-[#FFFFFF] disabled:!text-[#9E9E9E] shadow-none' : ''}
  }
     
    `}>{text}</button>
   </Fragment>
  )
}
