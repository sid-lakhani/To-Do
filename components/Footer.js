import React from 'react'

export default function Footer() {
    return (
        <div className='fixed bottom-0 w-full left-0 bg-inherit flex items-center justify-center p-2 border-t border-solid border-white'>
            <h2 className='text-lg select-none px-2 sm:px-3'><span className='italic '>~sid-lakhani </span></h2>
            <a href ='https://www.instagram.com/sidlakhani_/'>
                <i className="fa-brands fa-instagram text-xl duration-300 hover:opacity-30 cursor-pointer px-2 sm:px-3"></i>
            </a>
            <a href ='https://www.linkedin.com/in/siddhesh-lakhani'>
                <i className="fa-brands fa-linkedin text-xl duration-300 hover:opacity-30 cursor-pointer px-2 sm:px-3"></i>
            </a>
            <a href='https://github.com/sid-lakhani'>
                <i className="fa-brands fa-github text-xl duration-300 hover:opacity-30 cursor-pointer px-2 sm:px-3"></i>
            </a>
        </div>
    )
}