import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    color: slateblue;
    font-size: 120%;
`;
const StyledDiv1 = styled.div`

    border: 3px solid slategrey;
`;


function User ({details}) {
    if (!details) {
        return <h4> Working on retreiving User details</h4>
    }
    return (
        <StyledDiv className='friend container'>
            <h2>{details.name}</h2>
            <StyledDiv1>
            <p>Email:{details.email}</p>
            <p>Password (we promise it's private): {details.password}</p>
            </StyledDiv1>
        </StyledDiv>
    )
}


export default User