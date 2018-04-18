import React from 'react'
import ReactDOM from 'react-dom'
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

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  componentDidMount() {
    BooksAPI.getAll().then(res => {
        console.log('RES IS: ', res);
    });
  }

  componentDidUpdate() {
    console.log("this.state.bookList componentDidUpdate: ", this.state.bookList);
  }

  render() {
    return (
      <div className="app">
          {/* <Route exact path="/" component={ListBooks}/> */}
          <p>{this.state.homeLink}</p>
          <Route path="/search" component={SearchBooks}/>
          <Route 
            exact path="/" 
            render={() => <ListBooks 
              sendBookList={this.getBookList.bind(this)} 
              changeLink={this.onChangeLinkName.bind(this)}
              // homeLink={this.state.homeLink}
            /> }
          />
          <Route 
            path="/search" 
            render={() => <SearchBooks changeLink={this.onChangeLinkName.bind(this)} /> }
          />
      </div>
    )
  }
}

export default BooksApp
