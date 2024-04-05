import React from 'react'
import {Table,Button, Image} from 'react-bootstrap';

const Products = () => {
    let productslist=[{id:"1",name:"product1",image:"images/a.jpg",price:90000,stock:100},
    {id:"2",name:"product2",image:"images/b.jpg",price:70000,stock:10},
    {id:"3",name:"product3",image:"images/d.jpg",price:1000,stock:20},
    {id:"4",name:"product4",image:"images/c.jpeg",price:9000,stock:9},
    {id:"5",name:"product5",image:"images/a.jpg",price:10000,stock:10},
    {id:"6",name:"product6",image:"images/b.jpg",price:900,stock:198},
    {id:"7",name:"product7",image:"images/d.jpg",price:20000,stock:10},]
    // console.log(productslist[0].name)
  return (
    <>
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {productslist.length == 0 && <tr><td colSpan={6}>No product found</td></tr>}
            {productslist.map((product,index)=>
                <tr key={product.id}>
                <td>{product.id}</td> <td>{product.name}</td>
                <td><Image src={require(`../../assets/${product.image}`)} height={50} width={50}/></td>
                <td>{product.price}</td> <td>{product.stock}</td>
                <td>
                    <Button type="button" variant='success' className='me-2'><i className='bi bi-pencil-square'></i></Button>
                    <Button type="button" variant='danger' className='me-2'><i className='bi bi-trash'></i></Button>
                </td>
                </tr>
            )}
        </tbody>
    </Table>
    </>
  )
}

export default Products
