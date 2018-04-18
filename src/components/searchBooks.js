import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import '../App.css'

class SearchBooks extends Component {
    constructor() {
        super();
        this.state = {
            typed: '',
            bookList: [],
            value: ''
        };
    }
    componentDidUpdate() {
        console.log("this.state.bookList componentDidUpdate: ", this.state.bookList);
    }
    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }
    changeValue(event) {
        this.setState({typed: event.target.value});
        console.log('VAL IS: ', event.target.value);
        if(event.target.value.length > 2) {
            BooksAPI.search(this.state.typed).then(res => {
                this.setState({bookList: res});
            });
        }
    }
    updateBookStatus(event) {
        this.setState({
            value: this.state.value
        });
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to='/'
                        className="close-search"
                    ></Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.changeValue.bind(this)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.bookList.map((book) =>
                            <li key={book.id}>
                                <img src={book.imageLinks.smallThumbnail}/>
                                <p>{book.title}</p>
                                <div className="book-shelf-changer">
                                    <select value={this.state.value} onChange={this.updateBookStatus}>
                                        <option value="none" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </li>
                        )}
                    </ol>
                </div>
          </div>
        )
    }
}

export default SearchBooks;