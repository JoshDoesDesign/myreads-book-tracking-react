import React, { Component } from 'react'
import '../App.css'

class BookShelf extends Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            bookList: []
        };
    }
    componentDidMount() {
        console.log('this.props: ', this.props);
    }
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        { this.props.books.map(book => (
                            <li key={book.id}>
                                <img src={book.imageLinks.smallThumbnail} alt={book.title}/>
                                <p>{book.title}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;