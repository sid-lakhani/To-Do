import React from 'react'

export default function TodoCard(props) {
    const { 
        children, 
        edit, 
        handleAddEdit, 
        edittedValue, 
        setEdittedValue, 
        todoKey, 
        handleEditTodo, 
        handleDelete, 
        handleCompleteTodo, 
        isCompletedTodo
    } = props

    return (
        <div className='p-2 relative sm:p-3 border flex items-stretch border-white-300 border-solid'>
            <div className='flex-1 flex capitalize'>
                {!(edit === todoKey) ? <>{children}</>: (
                    <input className='bg-inherit flex-1 text-white-300 outline-none capitalize' value={edittedValue} onChange={(e) => setEdittedValue(e.target.value)}/>
                )}
            </div>
            <div className='flex items-center'>
                {isCompletedTodo ? null : ((edit === todoKey) ? (<i onClick={handleEditTodo} className="fa-solid fa-check px-2 duration-300 hover:opacity-50 hover:scale-125 cursor-pointer"></i>) : (<i onClick={handleAddEdit(todoKey)} className="fa-solid fa-pen-to-square px-2 duration-300 hover:opacity-50 hover:scale-125 cursor-pointer"></i>))}
                {isCompletedTodo ? null : <i onClick={handleCompleteTodo} className="fa-solid fa-square-check px-2 duration-300 hover:opacity-50 hover:scale-125 cursor-pointer"></i>}
                {isCompletedTodo ? null : <i onClick={handleDelete(todoKey)} className="fa-solid fa-trash px-2 duration-300 hover:opacity-50 hover:scale-125 cursor-pointer"></i>}
            </div>
        </div>
    )
}