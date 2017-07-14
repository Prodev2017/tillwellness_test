import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/MainApp';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
