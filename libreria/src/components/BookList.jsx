import { Component } from 'react'
import SingleBook from './SingleBook'

class BookList extends Component {
    state = {
        selected : true
    }

    render() {
        return(
            this.props.scifi.map((book) => {
                return(
                    <SingleBook key={book} img={book.img} title={book.title} price={book.price} category={book.price} selected={this.state.selected}
                    />
                )
            })
        )
    }
}

export default BookList