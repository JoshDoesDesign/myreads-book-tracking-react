import React, { Component } from 'react'
import '../App.css'

class BookShelf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: [],
            bookToUpdate: null
        }
        this.handleBookUpdate = this.handleBookUpdate.bind(this)
    }
    handleBookUpdate(book, newShelf) {
        this.props.updateBook(book, newShelf);
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
                                <div className="book-shelf-changer">
                                    <select value={book.shelf} onChange={(event) => {
                                        this.handleBookUpdate(book, event.target.value)
                                        }}>
                                        <option value="none" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;