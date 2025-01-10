import { Component } from "react";
import SingleBook from "./SingleBook";
import { Form } from "react-bootstrap";

class BookList extends Component {
  state = {
    inputValue: "",
  };

  render() {
    return (
      <>
        <Form.Control
          onChange={(e) => {
            this.setState({ inputValue: e.target.value });
          }}
          value={this.state.inputValue}
          type='text'
          placeholder='cerca libri...'
          className='my-3'
        />

        {this.state.inputValue === ""
          ? this.props.scifi.map((book) => {
              return <SingleBook bookProp={book} key={book.asin} />;
            })
          : this.props.scifi
              .filter((book) =>
                book.title
                  .toLowerCase()
                  .includes(this.state.inputValue.toLowerCase())
              )
              .map((book) => {
                return <SingleBook key={book.asin} bookProp={book} />;
              })}
      </>
    );
  }
}

export default BookList;
