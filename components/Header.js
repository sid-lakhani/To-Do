import React, { useEffect, useState } from 'react'
// import Modal from './Modal'
import { useAuth } from '@/context/AuthContext'


export default function Header() {
    // const [openModal, setOpenModal] = useState(false)
    const { currentUser } = useAuth()
    const { logout } = useAuth()

    // const logoutDropDown = () => {
    //     return (
    //         <div className="absolute z-20 text-sm bg-slate-600 shadow-md rounded mt-2">
    //             <ul className="py-1">
    //                 <li className="hover:bg-slate-300 px-4 py-2">Logout</li>
    //             </ul>
    //         </div>
    //     );
    // }

    // const [isDropdownOpen, setIsDropdownOpen] = useState(false)


    return (
        <>
            {/* {/* {openModal && <Modal setOpenModal={setOpenModal}/>} */}
            {/* <div className='p-4 flex flex-col gap-3'>
                <h2 onClick = {() => {
                    logout()
                    setOpenModal(false)
                }} className='select-none duration-300 px-4 sm:px-8 py-2 duration-300 hover:pl-12 cursor-pointer'>Logout</h2>
            </div> */}
            <div className='fixed top-0 w-full left-0 bg-inherit flex items-center justify-between px-5 sm:px-10 border-b border-solid border-white'>
                <h1 className='text-6xl font-extrabold select-none py-2'>TO-DO</h1>
                {/* {currentUser && <i onClick={() => setOpenModal(true)} className="fa-solid fa-user text-4xl duration-300 hover:opacity-40 cursor-pointer"></i>} */}
                <div>
                    {currentUser && <i
                        onClick={(e) => {
                            logout()
                        }}
                        // onMouseEnter={() => setIsDropdownOpen(true)}
                        // onMouseLeave={() => setIsDropdownOpen(false)}
                        className="fa-solid fa-right-from-bracket text-4xl duration-300 hover:opacity-40 cursor-pointer">
                    </i>}
                    {/* {isDropdownOpen && logoutDropDown()} */}
                </div>
                {!currentUser && <i className="fa-solid fa-check text-4xl"></i>}
            </div>
        </>
    )
}