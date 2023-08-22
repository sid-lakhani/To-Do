import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
    const {children} = props

    return (
        <div className='flex flex-col min-h-screen relative bg-slate-900 text-white'>
        <Header />
        <main className='flex-1 flex flex-col p-4'>
            {children}
        </main> 
        <Footer />

        </div>
    )
}
