import './App.css';
import React, { useState, useEffect } from 'react'
import Form from './Form'
import * as yup from 'yup'
import axios from 'axios'
import formSchema from './formSchema'
import User from './User'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}
const initialFormErros = {
  name: '',
  email: '',
  password: '',
  terms: false,
}
const initalUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initalUsers)
  const [formValue, setFormValue] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErros)
  const [disabled, setDisabled] = useState(initialDisabled)

  // const getUsers = () => {
  //   axios.get('https://reqres.in/api/users')
  //   .then(res => {
  //     setUsers(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  const inputChange = (name, value) => {
    //insert yup schema here
    yup.reach(formSchema, name)
    .validate(value)
    .then(res => {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })

    setFormValue({
      ...formValue, [name]: value
    })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([res.data, ...users])
    })
    .catch(err => {
      console.log(err)
    })
    setFormValue(initialFormValues)
  }

  const formSubmit = () => {
    const newUser = {
      name: formValue.name.trim(),
      email: formValue.email.trim(),
      password: formValue.password.trim(),
      terms: formValue.terms
    }
    postNewUser(newUser)
  }

  // useEffect(() => {
  //   getUsers()
  // }, [])

  useEffect(() =>{
    formSchema.isValid(formValue).then(valid => setDisabled(!valid))
  }, [formValue])

  return (
    <div className="App">
      <header><h1>Oh, so you wanna be a User?</h1></header>
      <Form
      values={formValue}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
