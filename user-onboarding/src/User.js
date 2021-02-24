import React from 'react'


function User ({details}) {
    if (!details) {
        return <h4> Working on retreiving User details</h4>
    }
    return (
        <div className='friend container'>
            <h2>{details.name}</h2>
            <p>Email:{details.email}</p>
            <p>Password (we promise it's private): {details.password}</p>
        </div>
    )
}


export default User