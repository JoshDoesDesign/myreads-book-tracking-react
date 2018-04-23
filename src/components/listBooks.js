import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import BookShelf from './bookShelf'
import '../App.css'

class ListBooks extends Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Changed Link",
      bookList: []
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then(res => {
      this.setState({
        bookList: res
      })
      console.log('this.state.bookList: ', this.state.bookList);
    });
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  render() {
    return (
      <div className="list-books">
          <div className="list-books-title">
              <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <BookShelf books={this.state.bookList.filter(book => book.shelf === 'currentlyReading')} title="Currently Reading"/>
            <BookShelf books={this.state.bookList.filter(book => book.shelf === 'wantToRead')} title="Want To Read"/>
            <BookShelf books={this.state.bookList.filter(book => book.shelf === 'read')} title="Read"/>
          </div>
          <div className="open-search">
            <Link
              to='/search'
            >Add a book</Link>
          </div>
      </div>
    )
  }
}

export default ListBooks;