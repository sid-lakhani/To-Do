import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
    const {children} = props

    return (
        <div className='flex flex-col min-h-screen relative bg-slate-900 text-white'>
            <Header />
            <div className='fixed top-20 bottom-10 left-0 w-full overflow-hidden'>
                <main className='h-full overflow-y-auto p-4'>{children}</main>
            </div>
            <Footer />
        </div>
    )
}