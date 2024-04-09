import React from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const ReactHookFormDemo = () => {
    const {register,handleSubmit,trigger, formState:{errors},getValues}=useForm()
    const submitForm=(data)=>{
        alert(JSON.stringify(data))
    }
  return (
    <Container className='col-6'>
    <h1><i className='bi bi-pencil-square'></i> Form Validations using react hook form</h1><hr/>
    <Form onSubmit={handleSubmit(submitForm)}>
        <Form.Group className='mb-3'>
          <Form.Label>Username</Form.Label>
          <Form.Control {...register('username',{required:"username is required",minLength:{
            value:5,message:"min 5 char"
          }})}
          onBlur={()=>trigger('username')}></Form.Control>
          {errors.username && <span className='text-danger'>{errors.username.message}</span>}
        </Form.Group>      
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
        <Form.Group className='mb-3'>
          <Form.Label>confirm password</Form.Label>
          <Form.Control type="password"  {...register('cpassword',{required:"confirm password is required",
            validate:(cpwd)=>{
                let {password}=getValues()
                return password == cpwd || "password not same"
            }
        })}  onBlur={()=>trigger('cpassword')}></Form.Control>
          {errors.cpassword && <span className='text-danger'>{errors.cpassword.message}</span>}
        </Form.Group>
        <Button type="submit" variant='info'>Submit</Button><br/>
        <p>Already an account?? <a href="">Login</a></p>
    </Form>

</Container>
  )
}

export default ReactHookFormDemo
