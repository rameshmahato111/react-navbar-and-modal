import React from 'react'
import { AiOutlineMenuUnfold } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx"
import logo from "../assets/logo/79736236-hand-drawn-sketch-of-bullock-cart-in-vector-illustration.jpg"
import NavItems from './NavItems'
import ShoModal from './ShoModal'
const Navbar = () => {
  const [nav, setNav] = React.useState(false)

  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <>
      <div className='max-w-[1200px] flex justify-between items-center mx-auto bg-zinc-500 px-3 py-6 sticky top-0'>

        <div className='flex gap-3 items-center'>
          <img src={logo} alt='logo' className='w-10 h-10 rounded-full' />
          <h1 className='text-xl text-white font-sairo'>T</h1><span className='text-xl text-[#c18136]'>C</span>
          <span className='text-[#d8ccc0] text-xl'>M</span>
        </div>
        <NavItems />

        <div className='focus:outline-none text-white text-xl cursor-pointer sm:hidden'>
          {nav ? <RxCross1 onClick={handleClick} />
            : <AiOutlineMenuUnfold onClick={handleClick} />

          }
        </div>

      </div>

      {/* mobile responsive */}

      <div>
        <ul className={nav ? 'w-full h-screen space-y-4 flex-row font-sairo text-xl bg-[#b6985e] text-white sm:hidden' : 'fixed left-[-100%]'} >
          <li className='text-white shadow px-3 py-6'>home</li>
          <li className='text-white shadow px-3 py-6'>about us</li>
          <li className='text-white shadow px-3 py-6'>contact</li>
          <li className='text-white shadow px-3 py-6'>services</li>
          <li className='text-white shadow px-3 py-6'>portfolio</li>
          <li><ShoModal /></li>



        </ul>

      </div>





    </>
  )
}

export default Navbar