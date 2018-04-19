import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './components/listBooks'
import SearchBooks from './components/searchBooks'
import './App.css'

class BooksApp extends React.Component {
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false
  // }

  constructor() {
    super();
    this.state = {
      homeLink: "Home",
      bookList: []
    };
  }

  getBookList(newBookList) {
    // alert("Hello!");
    console.log("this.state.bookList BEFORE: ", this.state.bookList);
    this.setState({
      bookList: newBookList
    });
    console.log("this.state.bookList AFTER: ", this.state.bookList);
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
