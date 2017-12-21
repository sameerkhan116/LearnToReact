import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAdXsATIgKvaYZrbgavdI8fbo6avdsq_Y0';

// Create new component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Inject this page and put it into DOM
ReactDOM.render(<App />, document.querySelector('.container'));