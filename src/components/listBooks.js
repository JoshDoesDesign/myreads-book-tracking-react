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
      console.log("componentDidMount listBooks.js was called");
      BooksAPI.getAll().then(res => {
        console.log('RES listBooks IS: ', res);
        this.setState({
          bookList: res
        })
      });
    }

    componentDidUpdate() {
      console.log("componentDidUpdate listBooks.js was called");
    }

    onChangeLink() {
      this.props.changeLink(this.state.homeLink);
    }

    componentWillReceiveProps() {
      console.log('componentWillReceiveProps was called');
      console.log('this.props.bookList: ', this.props.bookList);
    }

  render() {
    return (
      <div className="list-books">
          <div className="list-books-title">
              <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <BookShelf books={this.state.bookList} title="Currently Reading"/>
            <BookShelf books={this.state.bookList} title="Want To Read"/>
            <BookShelf books={this.state.bookList} title="Read"/>
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