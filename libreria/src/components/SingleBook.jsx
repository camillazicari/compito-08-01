import { Container, Row, Col, Card } from "react-bootstrap";

const SingleBook = (props) => {
    return (
        <Container>
      <Row className='flex-wrap'>
            <Col xs={3}className='mb-4'>
              <Card style={{height: "700px", width:"400px"}}>
                <Card.Img
                //onClick={}
                  src={props.img}
                  alt='Card image'
                  style={{objectFit: "cover", objectPosition:"top"}}
                  className="h-75"
                />
                <Card.Body className="d-flex flex-column justify-content-evenly h-25 py-0">
                    <h6 className="text-center">{props.title}</h6>
                    <p className="btn btn-warning btn-sm w-50 align-self-center"> {props.category} </p>
                    <div className="d-flex justify-content-evenly">
                    <p className="m-0 align-self-center">€{props.price}</p>
                    <button type="button" className="btn btn-sm bg-success text-white m-0 align-self-center"><i className="bi bi-cart-check"></i> Add to cart</button>   
                    </div>
                    
                </Card.Body>
              </Card>
            </Col>
      </Row>
    </Container>
    )
}

export default SingleBook;