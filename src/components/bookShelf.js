import React, { Component } from 'react'
import '../App.css'

class BookShelf extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('this.props: ', this.props);
    }
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li key={this.props.books.id}>
                            {/* <img src={this.props.books.imageLinks.smallThumbnail} alt={this.props.books.title}/> */}
                            <p>{this.props.books.title}</p>
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;