import _ from 'lodash';
import React, { Component } from 'react'; //javascript module into this file
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyDEHs4Jj8QJo925wS0Iq_0m4k-CozCES2U";

// 'const' - the final variable / CONSTANT its never going to change 
// the div is actually javascript not html - jsx aka reacts own language 
// canot be interpreted by the browser - our package lets us talk to the browser 
// the purpose is to have some jsx transpiled to vanilla javascript - sugar

// create a new component. this component should produce some HTML (react component)
// => is the 'function' keyword in react 

//this.setState({videos :videos }); sugar to clean up when the name and property are the same name 

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('husky talking');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });
        });
    }

    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return ( 
            <div>
                <SearchBar onSearchTermChange={ videoSearch } />
                <VideoDetail video={ this.state.selectedVideo } />
                <VideoList 
                onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
                videos={ this.state.videos } />
            </div>
        );
    }
}

// take this component's html and put it on the page (in the DOM)
// rendering a component in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
