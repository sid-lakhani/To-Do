import React from 'react'

export default function Footer() {
    return (
        <div className='flex justify-center items-center gap-5 py-3'>
            <a href ='https://www.instagram.com/sidlakhani_/'>
                <i className="fa-brands fa-instagram duration-300 hover:opacity-30 cursor-pointer"></i>
            </a>
            <a href ='https://www.linkedin.com/in/siddhesh-lakhani-0aa228257/'>
                <i className="fa-brands fa-linkedin duration-300 hover:opacity-30 cursor-pointer"></i>
            </a>
            <a href='https://github.com/sid-lakhani'>
                <i className="fa-brands fa-github duration-300 hover:opacity-30 cursor-pointer"></i>
            </a>
        </div>
    )
}
