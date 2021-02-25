import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    
`;

const StyledH2 = styled.h2`
    font-size: 160%;
    text-transform: uppercase;
    position: relative;
    font-family: verdana;
    color: #F40A35;
`;

const StyledButton = styled.button`
    border-radius: 17px;
    color: #426DFB;
    background-color: darkgrey;
    font-size: 140%;
`;
const StyledInput = styled.input`
    width:100%
    padding: 10px 15px;
    margin: 8px;
    box-sizing: border-box;
    border: none;
    border-left: 6px solid dodgerblue;
    border-bottom: 4px solid dodgerblue;
    color: white
    background-color: #3CBC8D;
`;

function Form(props) {
    const{
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <StyledH2>Get in here</StyledH2>
                <StyledButton disabled={disabled}>Finalize</StyledButton>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>
            <div className='form-group inputs'>
                <h3>Share some dets</h3>
                <StyledDiv className='inputs'>
                <label>What do ya go by
                    <StyledInput 
                    value={values.name} 
                    onChange={onChange} 
                    name='name' 
                    type='text'
                    />
                </label>
                <label> How can the fam reach you?
                <StyledInput 
                    value={values.email} 
                    onChange={onChange} 
                    name='email' 
                    type='text'
                    />
                </label>
                <label>Make this password eXtra secure
                <StyledInput 
                    value={values.password} 
                    onChange={onChange} 
                    name='password' 
                    type='text'
                    />
                </label>
                <label>Do you 'eggcept' to all the Terms and Conditions 😈 
                <input 
                    checked={values.terms} 
                    onChange={onChange} 
                    name='terms' 
                    type='checkbox'
                    />
                </label>
                </StyledDiv>
            </div>
        </form>
    )
}

export default Form
