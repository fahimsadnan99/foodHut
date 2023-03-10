import React from 'react'
import Left from './Left'
import Right from './Right'
import WhyFodHutSideIcon from "../../../assets/WhayFoodHutSideIcon.svg"
import Arrow from "../../../assets/ShapeArrow.svg"


const index = () => {
  return (
    <div className='whyFoodHutWrapper'>
        <img className='whyFoodHutIcon' src={WhyFodHutSideIcon} alt='whyFoodHutIcon'/>
        <img src={Arrow} className='whyFoodArrow' alt="arrow"/>
        <div className='xs:w-[95%] md:w-[92%] mx-auto'>
        <div className='grid lg:grid-cols-2'>
       <Left></Left>
       <Right></Right>
       </div>
       </div>
    </div>
  )
}

export default index