// starting point for the client side applciation

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';


// Re-rendering the app again which is already rendered is reffered as HYDRATE. 
// Attach the event-listeners to rendered HTML from server.

ReactDOM.hydrate( <Home/>, document.querySelector("#root"))