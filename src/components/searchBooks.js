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

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    changeValue(event) {
        if(event.target.value.length > 2) {
            BooksAPI.search(event.target.value).then(res => {
                let searchResult = res;
                BooksAPI.getAll().then(res => {
                    let getAllResult = res;
                    for(let i = 0; i < searchResult.length; i++) {
                        for(let j = 0; j < getAllResult.length; j++) {
                            if(searchResult[i].id === getAllResult[j].id) {
                                console.log(searchResult[i].id)
                                searchResult.splice(i, 1, getAllResult[j]);
                            }
                        }
                        if(!searchResult[i].shelf) {
                            searchResult[i].shelf = 'none'
                        }
                    }
                    this.setState({
                        bookList: searchResult
                    });
                });
            });
        }
    }

    updateBookStatus(book, event) {
        BooksAPI.update(book, event.target.value).then(res => {
            console.log('BooksAPI RES: ', res);
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
                                <img src={book.imageLinks ? book.imageLinks.smallThumbnail : 'https://via.placeholder.com/104x150'} alt={book.title}/>
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
                        )}
                    </ol>
                </div>
          </div>
        )
    }
}

export default SearchBooks;