import {BsTrash} from 'react-icons/bs'
import React from "react";
import {Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart, useDispatchCart } from "./Cart";
import NavBar from './NavBar';

const CartItems = ({product, index, handleRemove }) => {
  return (
    <>
      <Container>

         <Row as={Link} to="#" className="cart-item-row mt-2">
        <div className=" d-flex justify-content-between p-0">
            <div className=" d-flex " >
                <img src={product.image} alt="bcbc" />
                <div className=" d-flex align-items-center justify-content-center p-2">
                <p>{product.name}<br />Rs.{product.rate}</p>
                </div>
            </div>
            {/* <p className="d-flex align-items-center justify-content-center p-2">add and sub button</p> */}
            <div className="d-flex align-items-center justify-content-center p-2">
                <BsTrash className="remove-btn"onClick={()=>handleRemove(index)} />
            </div>
            {/* onClick={() => handleRemove(index)} */}
        </div>
        </Row>
        
        
      </Container>
    </>
  );
};

export default function CartStore() {
  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce((total, b)=> total + b.rate, 0);


  const handleRemove = (index) => {
      dispatch({type:'REMOVE', index})
  }

  if (items.length === 0) {
    return (
      <main>
        <p>cart is empty</p>
      </main>
    );
  }
  else{
  return (
    <>
      <NavBar />
      {items.map((item, index) =>
        <CartItems handleRemove={handleRemove} product={item} key={index}  index={index} />)}
        
        <Container>
            <hr />
        <Row>
        <p className="d-flex justify-content-center cart-total">Total price:{totalPrice}</p>
        </Row>
        </Container>
    </>
  );
      }
}
