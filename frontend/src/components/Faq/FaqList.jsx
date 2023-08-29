import React from 'react'

// import {raqs} from "../../assets/data/faqs"
import Faqs from "./Faqs.json"
import FaqItem from "./FaqItem"


const FaqList = () => {

  return (
    <ul className='mt-[38px]'>
        {Faqs.map((item, index)=> <FaqItem item={item} key={index}/>)}
    </ul>
  )
}

export default FaqList