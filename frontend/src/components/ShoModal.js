import React from 'react'
import HomeModel from './HomeModel'
import {AiFillSetting} from "react-icons/ai"
const ShoModal = () => {
    const [modal, setModal] = React.useState(false)
   
  return (
    <>
       <button onClick={()=> setModal(!modal)} className='rounded-full border-2 border-yellow-400 bg-yellow-400 outline-none p-1'><AiFillSetting  /></button>
       {modal && <HomeModel  />}

       
    </>
  )
}

export default ShoModal