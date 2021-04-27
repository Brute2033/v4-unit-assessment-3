import React, {Component} from 'react';

class Shelf extends Component{
    render(){
        let mappedTitles = this.props.shelf.map(title => {
            return <div>
                <div>{title}</div>
            </div>
        })
        return(
            <div>
                <h1> Shelf </h1>
                {mappedTitles}
                <button onClick={this.props.onClick} > Clear Shelf </button>
            </div>
        )
    }
}


export default Shelf;