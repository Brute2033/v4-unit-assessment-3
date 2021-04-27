import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(){
        super()
        this.state = {
            input: ''
        }
    }
    handleChange = (e) => {
        this.setState({ input: e.target.value })
      }
    handleClick = () => {
        return this.props.onSearch(this.state.input)
      }
      handleClear = () => {
          this.setState({ input: ''})
          return this.props.onReset
      }
    render(){
        
        return(
            <div>
                <input onChange={this.handleChange} value={this.state.input} />
                <button onClick={this.handleClick}> Search </button>
                <button onClick={this.handleClear}> Clear Search </button>
            </div>
        )
    }
}


export default SearchBar;