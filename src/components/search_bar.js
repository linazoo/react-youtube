import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />; //React.create Element
// };

// export default SearchBar;

//give our search bar a bunch of functionality inheriting from react.component by writing it this way:
class SearchBar extends Component {
    //defining methods on a class:
    render() {
        return <input />;
    }
}

export default SearchBar;