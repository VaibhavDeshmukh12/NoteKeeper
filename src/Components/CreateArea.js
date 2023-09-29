import React, { useState } from 'react'

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "Input") {
            setNote(prev => {
                return {
                    title: value,
                    content: prev.content
                }
            })
        }
        else if (name === "textArea") {
            setNote(prev => {
                return {
                    title: prev.title,
                    content: value
                }
            })
        }
    }

    return (
        <div className='formm'>
            <form action="/"
                className='shadow-lg form d-flex flex-column justify-content-center align-items-center'>
                <input name='Input' value={note.title}
                    onChange={handleChange} type="title" spellCheck="false"
                    placeholder='Title' className='mt-3 m-1' />
                <textarea name='textArea' value={note.content}
                    onChange={handleChange} spellCheck="false"
                    placeholder='Take a note...'></textarea>
                <button
                    onClick={e => {
                        e.preventDefault();
                        props.addNote(note);
                        setNote()
                    }} 
                    className='btn btn-warning mb-1 text-light'>Add Notes
                </button>
            </form>
        </div>
    )
}

export default CreateArea
