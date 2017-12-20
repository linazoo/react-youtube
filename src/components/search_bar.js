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
            <div className="search-bar col-md-8 col-md-offset-2">
                <input 
                value={ this.state.term }
                onChange={ event => this.onInputChange(event.target.value) } />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;