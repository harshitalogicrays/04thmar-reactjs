import React, { useState } from 'react'
import {Container,Form,Button} from 'react-bootstrap'

const FormValidations = () => {
    let [user,setUser]=useState({username:'',email:'',password:'',cpassword:''})
    let [errors,setErrors]=useState({})
  let handleSubmit=(e)=>{
    e.preventDefault()
    let myerrors=validations()
    if(Object.keys(myerrors).length == 0){
        setErrors({})
        alert(JSON.stringify(user)) }
    else { e.preventDefault()
        setErrors(myerrors) }  }

  let validations=()=>{
    let formerrors={}
    let emailpattern=/^[\w\!\#\$\%\^\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/
    if(user.username=='')
        formerrors.unameerr="Username is required" // formerrors={unameerr:"Username is required" }
    if(user.email=='')
        formerrors.emailerr="email is required"
    else if(!emailpattern.test(user.email))
        formerrors.emailerr="invalid email"
    if(user.password=='')
        formerrors.pwderr="password is required"
    if(user.cpassword =='' || user.password !=user.cpassword)
        formerrors.cpwderr="password not same"
    return formerrors
  }
  return (
    <>
    <Container className='col-6'>
        <h1><i className='bi bi-pencil-square'></i> Form Validations</h1><hr/>
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>Username</Form.Label>
              <Form.Control value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} className={errors.unameerr && `is-invalid`}></Form.Control>
              {errors.unameerr && <span className='text-danger'>{errors.unameerr}</span>}
            </Form.Group>
           
            <Form.Group className='mb-3'>
              <Form.Label>email</Form.Label>
              <Form.Control value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} className={errors.emailerr && `is-invalid`}></Form.Control>
              {errors.emailerr && <span className='text-danger'>{errors.emailerr}</span>}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>password</Form.Label>
              <Form.Control type="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}></Form.Control>
              {errors.pwderr && <span className='text-danger'>{errors.pwderr}</span>}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>confirm password</Form.Label>
              <Form.Control type="password" value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})}></Form.Control>
              {errors.cpwderr && <span className='text-danger'>{errors.cpwderr}</span>}
            </Form.Group>
            <Button type="submit" variant='info'>Submit</Button><br/>
            <p>Already an account?? <a href="">Login</a></p>
        </Form>

    </Container>
  </>
  )
}

export default FormValidations
