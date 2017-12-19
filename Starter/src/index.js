import React from 'react';
import ReactDOM from 'react-dom';

// Create new component
const App = () => {
    return <div>Hi!</div>;
}

// Inject this page and put it into DOM
ReactDOM.render(<App />, document.querySelector('.container'));