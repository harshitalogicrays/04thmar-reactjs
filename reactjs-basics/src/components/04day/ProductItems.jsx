import React from 'react'
import ProductCard from './ProductCard'
import {Row,Container} from 'react-bootstrap'
const ProductItems = ({products}) => {
  return (
   <>
   <Container>
    {products.length==0 && <h1>No product found</h1>}
    <Row>
        {products.map((product,i)=><ProductCard key={product.id} product={product}/>)}
    </Row>
    </Container>
   </>
  )
}

export default ProductItems
