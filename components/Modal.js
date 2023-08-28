// import { useAuth } from '@/context/AuthContext'
// import React, { useState, useEffect } from 'react'
// import ReactDom from 'react-dom'

// export default function Modal(props) {
//     const { setOpenModal } = props
//     const [_document, set_document] = useState(null)
//     const { logout } = useAuth()

//     useEffect(() => {
//         set_document(document)
//     }, [])

//     if (!_document){ return null }

//     return ReactDom.createPortal(
//         <div className='fixed w-screen w-full h-screen top-0 left-0 text-lg sm:text-xl bg-white text-slate-900 flex flex-col'>
//             <div className='flex items-center justify-between border-b border-solid border-slate-900 px-5 sm:px-10'> 
//                 <h1 className='text-6xl font-extrabold select-none py-2'>MENU</h1>
//                 <i onClick={() => setOpenModal(false)} className="fa-solid fa-xmark duration-300 hover:rotate-90 cursor-pointer text-4xl"></i>
//             </div>
//             <div className='p-4 flex flex-col gap-3'>
//                 <h2 onClick = {() => {
//                     logout()
//                     setOpenModal(false)
//                 }} className='select-none duration-300 px-4 sm:px-8 py-2 duration-300 hover:pl-12 cursor-pointer'>Logout</h2>
//             </div>
//         </div>,
//         _document.getElementById('portal')
//     )
// }