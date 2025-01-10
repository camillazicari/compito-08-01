import { Component } from "react";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return this.props.scifi.map((book) => {
      return (
        <SingleBook
          key={book.asin}
          img={book.img}
          title={book.title}
          price={book.price}
          category={book.price}
        />
      );
    });
  }
}

export default BookList;
