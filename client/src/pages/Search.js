import React from "react";
import axios from "axios";
import { Input, FormBtn } from "../components/Form";
import Result from "../components/Result";
// import API from "../utils/API";

class Book extends React.Component {
    state = {
        books: [],
        search: "",
        title: "",
        author: "",
        description: "",
        image: "",
        link: ""
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
                console.log(res.data.items)
                this.setState({ books: res.data.items });
                // console.log(this.state.books[0].volumeInfo.imageLinks.thumbnail)
            });
    };

    render() {
        return (
            <div>
                <form>
                    <Input
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        name="search"
                        placeholder="Title (required)"
                    />
                    <FormBtn
                        onClick={this.handleFormSubmit}
                    >Submit Book</FormBtn>
                </form>


                {this.state.books ? this.state.books.map(book => {
                    return (
                        <Result
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            img={book.volumeInfo.imageLinks.smallThumbnail} 
                            />)
                }) : <h1>no books</h1>}
            </div>
        )
    }
}

export default Book;