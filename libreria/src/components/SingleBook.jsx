import { Container, Row, Col, Card } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {

    state = {
        selected: false
    }

    render() {
    return (
        <Container>
      <Row className='flex-wrap'>
            <Col xs={3}className='mb-4'>
              <Card style={{height: "700px", width:"400px"}}                 
              className={this.state.selected ? 'border-danger border-5' : 'border-0'}
              >
                <Card.Img
                onClick={ () => {
                    if (this.state.selected) {
                        this.setState({selected: false})
                    } else {
                        this.setState({selected: true})
                    }
                }}
                className="h-75"
                  src={this.props.img}
                  alt='Card image'
                  style={{objectFit: "cover", objectPosition:"top"}}
                />
                <Card.Body className="d-flex flex-column justify-content-evenly h-25 py-0">
                    <h6 className="text-center">{this.props.title}</h6>
                    <p className="btn btn-warning btn-sm w-50 align-self-center"> {this.props.category} </p>
                    <div className="d-flex justify-content-evenly">
                    <p className="m-0 align-self-center">€{this.props.price}</p>
                    <button type="button" className="btn btn-sm bg-success text-white m-0 align-self-center"><i className="bi bi-cart-check"></i> Add to cart</button>   
                    </div>
                    
                </Card.Body>
              </Card>
            </Col>
      </Row>
    </Container>
    )
}
}

export default SingleBook;