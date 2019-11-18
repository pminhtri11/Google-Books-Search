import React from "react";
import { Col } from "../components/Grid";
import { BookList, Books } from "../components/BookList"
import "./style.css";

import API from "../utils/API";
// import API from "../utils/API";
class Book extends React.Component {
    state = {
        books: [],
    };
    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err))
    }

    handleDeleteButton = (id) => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Col size="md-12">
                    <BookList>
                        {this.state.books.map(book => {
                            return (
                                <Books
                                    key={book.id}
                                    id={book._id}
                                    title={book.title}
                                    src={book.src}
                                    href={book.href}
                                    authors={book.authors}
                                    description={book.description}
                                    handleDeleteButton={this.handleDeleteButton}
                                />
                            )
                        })}
                    </BookList>
                </Col>
            </div >
        )
    }
}

export default Book;
