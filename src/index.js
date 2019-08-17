import React from 'react';
import ReactDOM from 'react-dom';
import reactime from 'reactime';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
reactime(document.getElementById('root'));
registerServiceWorker();
