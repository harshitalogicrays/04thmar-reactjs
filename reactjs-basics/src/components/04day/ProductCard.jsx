import React from 'react'
import {Button,Card,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {

  return (
    <Col xs={3} className='mb-3'> 
        <Card>
        <Card.Img variant="top" src={require(`../../assets/${product.image}`)}  height={170}/>
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text> ${product.price}<br/>{product.stock}
            </Card.Text>
            <Button variant="primary" as={Link} to={`/details/${product.id}`}>Add to Cart</Button>
        </Card.Body>
        </Card>
    </Col>
  )
}

export default ProductCard
