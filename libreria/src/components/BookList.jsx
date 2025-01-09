import scifi from '../data/scifi.json'
import { Component } from 'react'
import SingleBook from './SingleBook'

class BookList extends Component {
    render() {
        return(
            scifi.map((book) => {
                return(
                    <SingleBook key={book} img={book.img} title={book.title} price={book.price} category={book.price} />
                )
            })
        )
    }
}

export default BookList