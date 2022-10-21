import React from 'react'
import ButtonWrapper from './ButtonWrapper'
export default function Buttons() {
  return (
    <div>
    <div className="mt-[53px] text-[#4F4F4F]">Buttons</div>
    <div className="flex flex-col">
        <div className="flex mt-[74px] ">
            <ButtonWrapper content="<Button/>" text="Default" ></ButtonWrapper>
            <ButtonWrapper hoverAndFocus content="<&:hover,&:focus/>" text="Default"></ButtonWrapper>
        </div>
        <div className="flex mt-[45px]">
          <ButtonWrapper content="<Button variant='outline'/>" variant="outline" text="Default" ></ButtonWrapper>
          <ButtonWrapper hoverAndFocus content="<&:hover,&:focus/>" variant="outline" text="Default"></ButtonWrapper>
        </div>
        </div>
    </div>
  )
}
