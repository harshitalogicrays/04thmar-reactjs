import React, { useState } from 'react'
import {Container,Form,Button} from 'react-bootstrap'
const Register = () => {
  let [user,setUser]=useState({username:'',email:'',password:'',cpassword:''})
  let handleSubmit=(e)=>{
    e.preventDefault()
    alert(JSON.stringify(user))
  }
  return (
      <>
        <Container className='col-6'>
            <h1><i className='bi bi-pencil-square'></i> Register form</h1><hr/>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>email</Form.Label>
                  <Form.Control value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>password</Form.Label>
                  <Form.Control type="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>confirm password</Form.Label>
                  <Form.Control type="password" value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})}></Form.Control>
                </Form.Group>
                <Button type="submit" variant='info'>Submit</Button><br/>
                <p>Already an account?? <a href="">Login</a></p>
            </Form>

        </Container>
      </>
  )
}

export default Register
