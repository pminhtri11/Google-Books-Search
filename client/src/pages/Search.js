import React from "react";
import axios from "axios";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import { Row, Col } from "../components/Grid";
import { BookList, Books } from "../components/BookList"
import "./style.css";



class Book extends React.Component {
    state = {
        books: [],
        search: "",
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => (console.log(this.state.search)));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`)
            .then(res => {
                console.log(res.data.items);
                let feedback = res.data.items;
                feedback = feedback.map(item => {
                    item = {
                        id: item.id,
                        title: item.volumeInfo.title,
                        src: item.volumeInfo.imageLinks.smallThumbnail,
                        href: item.volumeInfo.previewLink,
                        authors: item.volumeInfo.authors,
                        description: item.volumeInfo.description,
                    }
                    return item;
                })
                this.setState({ books: feedback });
            });
    };

    handleSaveButton = (id) => {
        console.log(id)
        let saved = this.state.books.filter(item => item.id === id);
        console.log(saved[0]);
        let bookData = saved[0];
        API.saveBook(id, bookData).then(function () {
            console.log("Added");
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <Col size="md-12">
                    <form>
                        <Row>
                            <Col size="md-12">
                                <br></br>
                                <h5><bold>Book Search</bold></h5>
                                <Input
                                    value={this.state.search}
                                    onChange={this.handleInputChange}
                                    name="search"
                                    placeholder="Title (required)"
                                />

                                <FormBtn
                                    onClick={this.handleFormSubmit}
                                >Find Book</FormBtn>
                            </Col>
                        </Row>
                    </form>
                </Col>
                <br></br>
                <Col size="md-12">
                    {!this.state.books ? (
                        <h1>no books</h1>
                    ) : (
                            <BookList>
                                {this.state.books.map(book => {
                                    return (
                                        <Books
                                            key={book.id}
                                            id={book.id}
                                            title={book.title}
                                            src={book.src}
                                            href={book.href}
                                            authors={book.authors}
                                            description={book.description}
                                            handleSaveButton={this.handleSaveButton}
                                        />
                                    )
                                })}
                            </BookList>
                        )
                    }
                </Col>
            </div >
        )
    }
}

export default Book;
