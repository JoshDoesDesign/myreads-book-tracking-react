import React from 'react'
import { Switch, Route } from 'react-router-dom'
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

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/search" component={SearchBooks}/>
          <Route 
            exact path="/" 
            render={() => <ListBooks dumbMethod={this.dummyMethod}  /> }
          />
          <Route 
            path="/search" 
            render={() => <SearchBooks /> }
          />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
