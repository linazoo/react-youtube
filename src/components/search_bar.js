import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />; //React.create Element
// };

// export default SearchBar;

//give our search bar a bunch of functionality inheriting from react.component by writing it this way:
class SearchBar extends Component {
    //defining state in a class based component
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    //defining methods on a class:
    render() {
        return (
            <div>
                <input 
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

export default SearchBar;