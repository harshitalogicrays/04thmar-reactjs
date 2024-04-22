import React from 'react'
import {Container,Form,Button, Row, Col, Image} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login = () => {
  const {register,handleSubmit,trigger, formState:{errors},getValues}=useForm()
    const submitForm=(data)=>{
        alert(JSON.stringify(data))
    }
  return (
    <Container className='col-6 shadow p-2 mt-5'>
    <h1>Login Page </h1><hr/>
    <Row>
      <Col>
      <Image src='/src/assets/login.png' className='img-fluid'/></Col>
      <Col>
      <Form onSubmit={handleSubmit(submitForm)}>   
        <Form.Group className='mb-3'>
          <Form.Label>email</Form.Label>
          <Form.Control {...register('email',{required:"email is required",
          pattern:{  value:/^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/,
            message:"Invalid email"  }})} onBlur={()=>trigger('email')} ></Form.Control>
             {errors.email && <span className='text-danger'>{errors.email.message}</span>}
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>password</Form.Label>
          <Form.Control type="password" {...register('password',{required:"password is required"})}  onBlur={()=>trigger('password')}></Form.Control>
          {errors.password && <span className='text-danger'>{errors.password.message}</span>}
        </Form.Group>
        <Button type="submit" variant='info'>Submit</Button><br/>
        <p>Create an account?? <Link to='/register'>Login</Link></p>
    </Form></Col>

    </Row>
   

</Container>
  )
}

export default Login
