import React from 'react'
import ButtonWrapper from './ButtonWrapper'
export default function Buttons() {
  return (
    <div>
    <div className="mt-[53px] text-[#4F4F4F] text-2xl font-medium">Buttons</div>
    <div className="flex flex-col mt-[28px]">
        <div className="flex  flex-initial max-w-lg">
            <ButtonWrapper content="<Button/>" text="Default"></ButtonWrapper>
            <ButtonWrapper hoverAndFocus content="<&:hover,&:focus/>" text="Default"></ButtonWrapper>
        </div>
        <div className="flex flex-initial mt-[45px] max-w-lg ">
          <ButtonWrapper content="<Button variant='outline'/>" variant="outline" text="Default" ></ButtonWrapper>
          <ButtonWrapper hoverAndFocus content="<&:hover,&:focus/>" variant="outline" text="Default"></ButtonWrapper>
        </div>
        <div className="flex mt-[47px] max-w-lg ">
          <ButtonWrapper content="<Button variant='text'/>" variant="text" text="Default" ></ButtonWrapper>
          <ButtonWrapper hoverAndFocus content="<&:hover,&:focus/>" variant="text" text="Default"></ButtonWrapper>
        </div>
        <div className="flex mt-[47px] max-w-lg">
          <ButtonWrapper disableShadow color='primary' content="<Button disableShadow/>"  text="Default" ></ButtonWrapper>
        </div>
        <div className="flex mt-[47px] max-w-lg ">
          <ButtonWrapper disabled  content="<Button disabled/>"  text="Disabled" ></ButtonWrapper>
          <ButtonWrapper disabled  content="<Button variant='text' disabled/>" variant='text' text="Disabled" ></ButtonWrapper>
        </div>
        <div className="flex mt-[47px] max-w-lg ">
          <ButtonWrapper color='primary' text="Default" content="<Button startIcon='local_grocery_store' />"  startIcon='gouwucheman'  ></ButtonWrapper>
          <ButtonWrapper color='primary' text="Default" content="<Button endIcon='local_grocery_store'/>"  endIcon ='gouwucheman'></ButtonWrapper>
        </div>
        <div className="flex mt-[47px] max-w-3xl ">
          <ButtonWrapper content="<Button size='sm'/>" size="sm" text="Default" ></ButtonWrapper>
          <ButtonWrapper content="<Button size='md'/>" size="md" text="Default" ></ButtonWrapper>
          <ButtonWrapper content="<Button size='lg'/>" size="lg" text="Default" ></ButtonWrapper>
        </div>
        <div className="flex mt-[47px] max-w-5xl">
            <ButtonWrapper content="<Button color='default'/>"color='default' text="default" ></ButtonWrapper>
            <ButtonWrapper content="<Button color='primary'/>"color='primary' text="default" ></ButtonWrapper>
            <ButtonWrapper content="<Button color='secondary'/>"color='secondary' text="secondary" ></ButtonWrapper>
            <ButtonWrapper content="<Button color='danger'/>"color='danger' text="danger" ></ButtonWrapper>
        </div>
        <div className="flex mt-[47px] max-w-5xl">
            <ButtonWrapper hoverAndFocus content="<&:hover,&:focus/>"color='default' text="default" ></ButtonWrapper>
            <ButtonWrapper hoverAndFocus content=" "color='primary' text="default" ></ButtonWrapper>
            <ButtonWrapper hoverAndFocus content=" "color='secondary' text="secondary" ></ButtonWrapper>
            <ButtonWrapper hoverAndFocus content=" "color='danger' text="danger" ></ButtonWrapper>
        </div>
        </div>
    </div>
  )
}
