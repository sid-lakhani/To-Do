import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { signInWithPopup } from 'firebase/auth'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoggingIn, setIsLoggingIn] = useState(true)

    const { login, signup, currentUser } = useAuth()
    console.log(currentUser)

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            submitHandler();
        }
    }
    
    async function submitHandler() {
        if (!email || !password) {
            setError('Please enter email and password')
            return
        }
        if (isLoggingIn) {
            try {
                await login(email, password)
            } catch (err) {
                setError('Incorrect email or password')
            }
            return 
        }
        await signup(email, password)
    }

    return (
        <div className='flex-1 text-xm sm:text-sm flex flex-col justify-center items-center gap-1 sm:gap-2'>
            <h1 className='font-extrabold select-none text-2xl sm:text-4xl uppercase'>{isLoggingIn ? 'Login' : 'Register'}</h1>
            {error && <div className='w-full max-w-[40ch] border-rose-300 border text-center select-none border-solid text-rose-400 py-2'>{error}</div>}
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email Address' onKeyDown= {handleKeyDown} className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 select-none p-2 w-full max-w-[40ch]' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' onKeyDown={handleKeyDown} className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 select-none p-2 w-full max-w-[40ch]' />
            <button onClick={submitHandler} className='w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900'>
                <h2 className='relative z-20 select-none '>SUBMIT</h2>
            </button>
            <h2 onClick={() => setIsLoggingIn(!isLoggingIn)} className='select-none duration-300 hover:scale-110 hover:opacity-50 cursor-pointer'> {!isLoggingIn ? 'Login' : 'Register'} </h2>
        </div>
    )
}