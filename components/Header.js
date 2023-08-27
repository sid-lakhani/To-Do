import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import { useAuth } from '@/context/AuthContext'

export default function Header() {
    const [openModal, setOpenModal] = useState(false)
    const {currentUser} = useAuth()

    return (
        <>
            {openModal && <Modal setOpenModal={setOpenModal}/>}
            <div className='sticky top-0 w-full left-0 bg-inherit flex items-center justify-between px-5 sm:px-10 border-b border-solid border-white'>
                <h1 className='text-6xl font-extrabold select-none py-2'>TO-DO</h1>
                {currentUser && <i onClick={() => setOpenModal(true)} className="fa-solid fa-user text-4xl duration-300 hover:opacity-40 cursor-pointer"></i>}
                {!currentUser && <i className="fa-solid fa-check text-4xl duration-300 hover: "></i>}
            </div>
        </>
    )
}