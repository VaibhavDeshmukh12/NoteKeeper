import React from 'react'

function Note(props) {

    return (
        <div className='shadow-lg rounded m-4 note'>
            <input type="text" className='fw-bold pt-2 px-4 fs-5' 
            value={props.title} spellCheck="false" readOnly />
            <textarea className=' px-4 fs-6' spellCheck="false" 
            readOnly>{props.desc}</textarea>
            <button onClick={()=>props.handleClick(props.id)} 
            className='text-warning px-4'>Delete</button>
        </div>
    )
}

export default Note
