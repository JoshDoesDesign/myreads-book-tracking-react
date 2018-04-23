import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './components/listBooks'
import SearchBooks from './components/searchBooks'
import './App.css'

class BooksApp extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home",
      bookList: []
    };
  }

  getBookList(newBookList) {
    this.setState({
      bookList: newBookList
    });
  }

  render() {
    return (
      <div className="app">
          <Route path="/search" component={SearchBooks}/>
          <Route 
            exact path="/" 
            render={() => <ListBooks /> }
          />
          <Route 
            path="/search" 
            render={() => <SearchBooks /> }
          />
      </div>
    )
  }
}

export default BooksApp
