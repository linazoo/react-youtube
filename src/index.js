import React from 'react'; //javascript module into this file
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyDEHs4Jj8QJo925wS0Iq_0m4k-CozCES2U";


// 'const' - the final variable / CONSTANT its never going to change 
// the div is actually javascript not html - jsx aka reacts own language 
// canot be interpreted by the browser - our package lets us talk to the browser 
// the purpose is to have some jsx transpiled to vanilla javascript - sugar

// create a new component. this component should produce some HTML (react component)
// => is the 'function' keyword in react 

const App = () =>  {
    return ( 
        <div>
            <SearchBar />
        </div>
    );
}

// take this component's html and put it on the page (in the DOM)
// rendering a component in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
