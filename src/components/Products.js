
import { Container, Row, Col } from "react-bootstrap";
import Store from "./ProductList";




const Products = () => {
  return (
    <>
      <Container className=" container-fluid mt-5">
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <p className="hero-para text-center">
              we see you’ve met our summer slippers. it’s our lightest design
              yet, made for the summer months and warmer climates. using an
              innovative Tencel™ woven upper these mahabis are breathable and
              contour to your foot.
            </p>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row className="text-center ">
          
            <Store />
            
          
        </Row>
      </Container>
    </>
  );
};

export default Products;

