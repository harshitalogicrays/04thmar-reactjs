import axios from 'axios'
import React, { useState } from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import { FaPenAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {
  let [user,setUser]=useState({username:'',email:'',password:'',cpassword:'',role:"1"})
  let [errors,setErrors]=useState({})
  const navigate=useNavigate()
let handleSubmit=async(e)=>{
  e.preventDefault()
  let myerrors=validations()
  if(Object.keys(myerrors).length == 0){
      setErrors({})
     await axios.post("https://66262ccc052332d55321e6a9.mockapi.io/users",user)
    toast.success("registered successfully")
    navigate('/')
    }
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
  <Container className='col-6 mt-5 shadow p-2'>
      <h1><FaPenAlt/> Register Here</h1><hr/>
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
          <p>Already an account?? <Link to='/login'>Login</Link></p>
      </Form>

  </Container>
</>
)
}

export default Register
