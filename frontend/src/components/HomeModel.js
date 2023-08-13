import React from 'react'
const HomeModel = () => {
    return (
        <>

            <div className='fixed top-16 right-0  bg-gray-500 text-black rounded-lg shadow-lg'>
                <ul className='text-center text-white px-2 py-4 mt-2 space-y-4'>
                    <li className='hover:text-yellow-400'>
                        <button>
                            <a href='/'>Setting</a>
                        </button>
                    </li>
                    <li className='hover:text-yellow-400'>
                        <button>
                            <a href='/'>Myprofile</a>
                        </button>
                    </li>
                    <li className='hover:text-yellow-400'>
                        <button>
                            <a href='/'>Logout</a>
                        </button>
                    </li>
                </ul>
                </div>

        </>
    )
}

export default HomeModel