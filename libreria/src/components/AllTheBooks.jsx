import { Container, Row, Col } from "react-bootstrap";
import books from "../data/romance.json";
import Card from "react-bootstrap/Card";

const AllTheBooks = function () {
  return (
    <Container>
      <Row className='flex-wrap'>
        {books.map((book) => {
          return (
            <Col xs={3} key={book.asin} className='mb-4'>
              <Card style={{height: "700px"}}>
                <Card.Img
                  src={book.img}
                  alt='Card image'
                  style={{objectFit: "cover", objectPosition:"top"}}
                  className="h-75"
                />
                <Card.Body className="d-flex flex-column justify-content-evenly h-25 py-0">
                    <h6 className="text-center">{book.title}</h6>
                    <p className="btn btn-warning btn-sm w-50 align-self-center"> {book.category} </p>
                    <div className="d-flex justify-content-evenly">
                    <p className="m-0 align-self-center">€{book.price}</p>
                    <button type="button" className="btn btn-sm bg-success text-white m-0 align-self-center"><i className="bi bi-cart-check"></i> Add to cart</button>   
                    </div>
                    
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
