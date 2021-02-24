import React from 'react'

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
                <h2>Get in here</h2>
                <button disabled={disabled}>Finalize</button>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>
            <div className='form-group inputs'>
                <h3>Share some dets</h3>
                <label>What do ya go by
                    <input 
                    value={values.name} 
                    onChange={onChange} 
                    name='name' 
                    type='text'
                    />
                </label>
                <label> How can the fam reach you?
                <input 
                    value={values.email} 
                    onChange={onChange} 
                    name='email' 
                    type='text'
                    />
                </label>
                <label>Make this password eXtra secure
                <input 
                    value={values.password} 
                    onChange={onChange} 
                    name='password' 
                    type='text'
                    />
                </label>
                <label>Do you agree to all the Terms and Conditions 😈 
                <input 
                    checked={values.terms} 
                    onChange={onChange} 
                    name='terms' 
                    type='checkbox'
                    />
                </label>
            </div>
        </form>
    )
}

export default Form
