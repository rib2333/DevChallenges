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
        <div className="flex mt-[47px]">
          <ButtonWrapper content="<Button variant='text'/>" variant="text" text="Default" ></ButtonWrapper>
          <ButtonWrapper hoverAndFocus content="<&:hover,&:focus/>" variant="text" text="Default"></ButtonWrapper>
        </div>
        <div className="flex mt-[47px]">
          <ButtonWrapper disableShadow  content="<Button disableShadow/>"  text="Default" ></ButtonWrapper>
        </div>
        <div className="flex mt-[47px]">
          <ButtonWrapper disabled  content="<Button disabled/>"  text="Disabled" ></ButtonWrapper>
          <ButtonWrapper disabled  content="<Button variant='text' disabled/>" variant='text' text="Disabled" ></ButtonWrapper>
        </div>
        <div className="flex mt-[47px] ">
            <ButtonWrapper content="<Button color='danger'/>"color='danger' text="danger" ></ButtonWrapper>
            <ButtonWrapper color='danger'content="-" hoverAndFocus text="danger"></ButtonWrapper>
        </div>
        </div>
    </div>
  )
}
