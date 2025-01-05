import React from 'react'

function om() {
    return (
        <>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Conatct</li>
                    <button name='login' onClick={() => alert('hello')}>Login</button>
                </ul>
            </div>
        </>
    )
}

export default om
