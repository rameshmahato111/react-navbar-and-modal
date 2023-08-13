import React from 'react'
import ShoModal from './ShoModal'
const NavItems = () => {


    return (
        <>
            {/* nav items */}
            <ul className='hidden sm:flex space-x-4 text-white font-sairo text-xl items-center'>
                <li>home</li>
                <li>about us</li>
                <li>contact</li>
                <li>services</li>
                <li>portfolio</li>
                <li><ShoModal  /></li>




            </ul>

            {/* end of nav items */}

        </>
    )
}

export default NavItems