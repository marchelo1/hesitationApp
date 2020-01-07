import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


 // call ReactDOM render, rendering whole app from above, and rendering our application in index.html app root file
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
