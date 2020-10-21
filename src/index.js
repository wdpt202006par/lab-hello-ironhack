import React from 'react'; // j'importe REACT
import ReactDOM from 'react-dom'; // J'importe REACT-DOM
import './App.css'; // J'importe mon fichier CSS
import App from './App.js'; // J'importe mon fichier JS, dans lequel est écrit mon JSX

 
ReactDOM.render(<App />, document.getElementById('root')); // ReactDOM rend ma fonction App (qui est dans mon fichier App.js) dans ma DIV 'root'