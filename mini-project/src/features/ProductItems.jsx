import React from 'react'
import ProductCard from './ProductCard'
import {Row,Container} from 'react-bootstrap'
const ProductItems = ({products}) => {
  return (
   <>
   <Container className='mt-5'>
    {products.length==0 && <h1>No product found</h1>}
    <Row>
        {products.map((product,i)=><ProductCard key={product.id} product={product}/>)}
    </Row>
    </Container>
   </>
  )
}

export default ProductItems
