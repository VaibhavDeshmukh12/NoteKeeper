import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p className='text-center' style={{color:"#ccc",position:'relative',bottom:'0',width:'100%'}}>Copyright @{year}</p>
        </footer>
    )
}

export default Footer
