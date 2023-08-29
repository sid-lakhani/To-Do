import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { signInWithPopup } from 'firebase/auth'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoggingIn, setIsLoggingIn] = useState(true)

    const { login, signup, currentUser } = useAuth()

    // const demoDropDown = () => {
    //     return (
    //       <div className="absolute z-20 text-xs bg-slate-600 shadow-md rounded mt-2">
    //         <ul className="py-1">
    //           <li className="hover:bg-slate-300 px-4 py-2">Demo-Email: demo@gmail.com</li>
    //           <li className="hover:bg-slate-300 px-4 py-2">Demo-Pass: demo1234</li>
    //         </ul>
    //       </div>
    //     );
    //   }

    // const [isDropdownOpen, setIsDropdownOpen] = useState(false)

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
        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }
        await signup(email, password)
    }

    async function demoPass() {
        if (isLoggingIn || !isLoggingIn) {
            await login('demo@gmail.com', 'demo1234')
            return
        }
    }

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-inherit overflow-hidden'>
            <div className='flex-1 flex flex-col text-xm sm:text-sm justify-center items-center gap-1 p-4'>
                <h1 className='font-extrabold select-none text-3xl pb-1 uppercase underline'>
                    {isLoggingIn ? 'Login' : 'Register'}
                </h1>
                {error && <div className='w-full max-w-[40ch] border-rose-300 border text-center select-none border-solid text-rose-400 py-2'>{error}</div>}
                <input
                    value={email}
                    id='email'
                    onChange={(e) => setEmail(e.target.value.toLowerCase())}
                    type="text"
                    placeholder='Email Address'
                    onKeyDown={handleKeyDown}
                    autoComplete='email'
                    className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 select-none p-2 w-full max-w-[40ch]' />
                <input
                    value={password}
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder='Password'
                    onKeyDown={handleKeyDown}
                    autoComplete="current-password"
                    className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 select-none p-2 w-full max-w-[40ch]' />
                {!isLoggingIn && <input
                    value={confirmPassword}
                    id='password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder='Confirm Password'
                    onKeyDown={handleKeyDown}
                    className={`outline-none duration-300 border-b-2 border-solid ${confirmPassword !== password ? 'border-red-500' : 'border-white focus:border-cyan-300'
                        } text-slate-900 select-none p-2 w-full max-w-[40ch]`}
                />
                }
                <button onClick={submitHandler} className='w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900'>
                    <h2 className='relative z-20 select-none'>SUBMIT</h2>
                </button>
                <h3 className='select-none text-sm pt-1 underline capitalize'>{isLoggingIn ? 'Dont have an account?' : 'Have an account already?'}</h3>
                <h2 onClick={() => setIsLoggingIn(!isLoggingIn)} className='select-none duration-300 hover:scale-110 hover:opacity-50 cursor-pointer '> {!isLoggingIn ? 'Login' : 'Register'} </h2>
                {isLoggingIn && <div className='pt-2'>
                    <button
                        onClick={demoPass}
                        // onMouseEnter={() => setIsDropdownOpen(true)}
                        // onMouseLeave={() => setIsDropdownOpen(false)}
                        className='w-full max-w-[15ch] bg-white text-slate-900 uppercase p-2 duration-300 hover:opacity-60'>
                        <h2 className='relative z-20 select-none'>
                            Demo Account
                        </h2>
                    </button>
                    {/* {isDropdownOpen && demoDropDown()} */}
                </div>}
            </div>
        </div>
    )
}