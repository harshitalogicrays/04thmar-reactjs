import React, { Component, createRef } from 'react'
import {Container,Row,Col,Image,Form,Button} from 'react-bootstrap'
import Image1 from '../../assets/images/a.jpg'
import { MyCustomButton } from '../05day/MyCustomButton'
export default class ForminClassComp extends Component {
  constructor(props) {
    super(props)
      this.state = {user:{email:'',password:''}}
      this.emailRef=createRef()
  }
  handleChange=(e)=>{
    this.setState({
      user:{
        ...this.state.user,
        [e.target.name]:e.target.value
      }
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    alert(JSON.stringify(this.state.user))
  }
  componentDidMount(){
    this.emailRef.current.focus()
    this.emailRef.current.style.color="red"
  }
  render() {
    return (
     <>
      <Container>
          <Row>
            <Col>
              <Image src={Image1} className='img-fluid'/>
            </Col>
            <Col>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group className="mb-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" name="email" value={this.state.user.email} 
                      onChange={this.handleChange} ref={this.emailRef}></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-2">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" name="password" value={this.state.user.password}
                       onChange={this.handleChange}></Form.Control>
                  </Form.Group>
                  <Button type="submit" variant="primary">Submit</Button>
                </Form></Col>
          </Row>
      </Container>
     </>
    )
  }
}
