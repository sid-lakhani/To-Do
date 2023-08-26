import React from 'react'

export default function TodoCard(props) {
    const { children, edit, handleAddEdit, edittedValue, setEdittedValue, todoKey } = props

    return (
        <div className='p-2 relative sm:p-3 border flex items-stretch border-white-300 border-solid'>
            <div className='flex-1 capitalize'>
                {!(edit === todoKey) ? <>{children}</>: (
                    <input className='bg-inherit text-white-300 capitalize' value={edittedValue} onChange={(e) => setEdittedValue(e.target.value)}/>
                )}
            </div>
            <div className='flex items-center'>
                {(edit === todoKey) ? <i className="fa-solid fa-check px-2 duration-300 hover:opacity-50 hover:scale-125 cursor-pointer"></i> : <i onClick={handleAddEdit(todoKey)} className="fa-solid fa-pen-to-square px-2 duration-300 hover:opacity-50 hover:scale-125 cursor-pointer"></i>}
                <i className="fa-solid fa-trash px-2 duration-300 hover:opacity-50 hover:scale-125 cursor-pointer"></i>
            </div>
        </div>
    )
}