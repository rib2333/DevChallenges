import React from 'react'
import MyNavLink from '../MyNavLink'
export default function SideBar() {
const sideBarItems = ['Colors','Typography','Buttons','Inputs','Grid'];
  return (
    <>
    <div className="w-[237px] p-[56.5px] bg-[#FAFBFD] mr-[90px]">
      <p>DevChallenges.io</p>
      <div className= " flex flex-col mt-[60px]">
      {/* <MyNavLink to="/about">About</MyNavLink>
      <MyNavLink to="/home">Home</MyNavLink> */}
      
       {sideBarItems.map((item,index)=>{
           return <MyNavLink to={`/${item.toLowerCase()}`} key={index}>{item}</MyNavLink>
       })}
      </div>
      </div>
    </>
  )
}
