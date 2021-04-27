import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import BookList from './components/BookList';
import Shelf from './components/Shelf'
import data from './data'
import SearchBar from './components/SearchBar'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      books: data,
      shelf: [],
    }
    
  }
  addToShelf = ( value ) => {
    let newShelf = this.state.shelf
    newShelf.push(value)
    return this.setState({ shelf: newShelf})
  }
  clearShelf = () => {
    return this.setState({ shelf: []})
  }
  filterBooks = (input) => {
    input = input.toLowerCase()
    let filteredBooks = this.state.books.filter(book => {
      return book.title.toLowerCase().indexOf(input) > -1 ||book.author.toLowerCase().indexOf(input) > -1
    })
    this.setState({ books: filteredBooks })
  }
  reset = () => {
    this.setState({ books: data })
  }
  render(){
    return (
      <div className="App">
        <Header />
        <SearchBar onSearch={this.filterBooks} onReset={this.reset} />
        <BookList books={this.state.books} onClick={this.addToShelf}/>
        <Shelf shelf={this.state.shelf} onClick={this.clearShelf}/>
      </div>
    );
  }
}

export default App;
