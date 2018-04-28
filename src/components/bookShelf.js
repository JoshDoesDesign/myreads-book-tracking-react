import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'

class BookShelf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: []
        }
    }
    componentDidMount() {
        // console.log('BookShelf.componentDidMount - this.props:', this.props);
    }
    componentWillReceiveProps(nextProps) {
        // console.log('nextProps: ', nextProps);
    }
    updateBookStatus(book, event) {
        BooksAPI.update(book, event.target.value).then(res => {
            this.setState({
                bookList: res
            })
        });
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
                                    <select value={book.shelf} onChange={(event) => this.updateBookStatus(book, event)}>
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