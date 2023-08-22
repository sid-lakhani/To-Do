import React from 'react'

export default function TodoCard(props) {
    const { children } = props
    return (
        <div className='p-2 sm:p-3 border flex items-stretch border-white-300 border-solid'>
            <div className='flex-1 capitalize'>
                {children}
            </div>
            <div className='flex items-center'>
                <i className="fa-solid fa-pen-to-square px-2 duration-300 hover:opacity-50 hover:scale-125 cursor-pointer"></i>
                <i className="fa-solid fa-trash px-2 duration-300 hover:opacity-50 hover:scale-125 cursor-pointer"></i>
            </div>
        </div>
    )
}
