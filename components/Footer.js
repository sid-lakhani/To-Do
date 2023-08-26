import React from 'react'

export default function Footer() {
    return (
        <div className='flex justify-center py-justify items-center gap-5 py-3 shadow'>
            <a href ='https://www.instagram.com/sidlakhani_/'>
                <i className="fa-brands fa-instagram duration-300 hover:opacity-30 cursor-pointer"></i>
            </a>
            <a href ='https://www.linkedin.com/in/siddhesh-lakhani'>
                <i className="fa-brands fa-linkedin duration-300 hover:opacity-30 cursor-pointer"></i>
            </a>
            <a href='https://github.com/sid-lakhani'>
                <i className="fa-brands fa-github duration-300 hover:opacity-30 cursor-pointer"></i>
            </a>
        </div>
    )
}