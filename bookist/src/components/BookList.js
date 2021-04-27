import React, {Component} from 'react';

class BookList extends Component{
    render(){
        const {title} = this.props
        let mappedBooks = this.props.books.map((book) => {
            return <div>
                <div>{book.author}</div>
                <div>{book.title}</div>
                
                    <img src={book.img} alt={book.author} onClick={() => this.props.onClick(book.title)} style={{ cursor: 'pointer '}} /> 
                
            </div>
        })
        return(
            <div>
                <h1> list </h1>
                {mappedBooks}
            </div>
        )
    }
}


export default BookList;