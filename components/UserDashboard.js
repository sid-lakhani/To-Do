import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'
import TodoCard from './TodoCard'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import useFetchTodos from '../hooks/fetchTodos'

export default function UserDashboard() {
    const { userInfo, currentUser } = useAuth()
    const [addTodo, setAddTodo] = useState('')
    const [todo, setTodo] = useState('')

    const { todos, setTodos, loading, error } = useFetchTodos()

    console.log(todos)

    // useEffect(() => {
    //     if (!userInfo || Object.keys(userInfo).length === 0) {
    //         setAddTodo(true)
    //     }
    // }, [userInfo])

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            handleAddTodo();
        }
    }

    async function handleAddTodo() {
        if (!todo) { return }
        const newKey = Object.keys(todos).length === 0 ? 1 : Math.max(...Object.keys(todos)) + 1
        setTodos({ ...todos, [newKey]: todo })
        const userRef = doc(db, 'users', currentUser.uid)
        await setDoc(userRef, {
            'todos': {
                [newKey]: todo
            }
        }, { merge: true })
        setTodo('')
    }
    return (
        <div className='w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-1 flex-col gap-3 sm:gap-5'>
            <div className='flex items-stretch'>
                <input type="text" placeholder='Enter TODO' onChange={(e) => setTodo(e.target.value)} onKeyDown={handleKeyDown} className='outline-none p-3 text-base sm:text-lg text-slate-900 flex-1' />
                <button onClick={handleAddTodo} className='w-fit px-4 sm:px-6 py-2 sm:py-3 bg-slate-400 text-white font-medium text-base duration-300 hover:bg-slate-700'>ADD</button>
            </div>
            {(userInfo && loading) && (<div className='flex-1 grid place-items-center'>
                <i className="fa-solid fa-spinner fa-spin text-6xl"></i>
            </div>)}
            {(userInfo && !loading) && (
                <>
                    {Object.keys(todos).map((todo, i) => {
                        return (
                            <TodoCard key={i}>
                                {todos[todo]}
                            </TodoCard>
                        )
                    })}
                </>
            )}
            {/* {!addTodo && <button onClick={() => setAddTodo(true)} className='text-white-300 border border-solid border-white-300 py-2 text-center uppercase text-lg duration-300 hover:opacity-30'>ADD TODO</button>} */}
        </div>
    )
}