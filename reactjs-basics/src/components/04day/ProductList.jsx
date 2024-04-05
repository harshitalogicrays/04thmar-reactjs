import React from 'react'
import ProductItems from './ProductItems'

const ProductList = () => {
    let productslist=[{id:"1",name:"product1",image:"images/a.jpg",price:90000,stock:100},
    {id:"2",name:"product2",image:"images/b.jpg",price:70000,stock:10},
    {id:"3",name:"product3",image:"images/d.jpg",price:1000,stock:20},
    {id:"4",name:"product4",image:"images/c.jpeg",price:9000,stock:9},
    {id:"5",name:"product5",image:"images/a.jpg",price:10000,stock:10},
    {id:"6",name:"product6",image:"images/b.jpg",price:900,stock:198},
    {id:"7",name:"product7",image:"images/d.jpg",price:20000,stock:10},]
  return (
   <>
    <ProductItems products={productslist}/>
   </>
  )
}

export default ProductList
