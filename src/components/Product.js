import Button from 'react-bootstrap/Button'
import React from 'react'
import { Col } from 'react-bootstrap'
import { useDispatchCart } from './Cart'


const Product = ({product}) => {

    const dispatch = useDispatchCart();
    const addTOCart =(item)=>{
        dispatch({type:'ADD', item});
    }

    return (
        <Col className="col-12 col-md-3 mt-5"  >
            <div className="product-box p-2 border rounded overflow-hidden" >
             <img className="img-fluid"src={product.image} alt="" />
             <hr />
             <p className="m-0  product-text">{product.name}<br /> Rs.{product.rate}</p>
             
             <Button variant="outline-danger" onClick={()=>addTOCart(product)}>Add To Cart</Button>
            </div>
            
        </Col>
    )
}

export default Product;
