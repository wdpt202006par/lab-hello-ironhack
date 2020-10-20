import React from 'react'; // <== import React
import './App.css';
 
const App = () => {
  return (
    <div id="hero">
      <div className="container">
        <nav>
          <img src="./images/ironhack-logo.svg" alt="" className="logo"/>
          <img src="./images/menu-top.svg" alt=""/>
        </nav>
        <div className="title">
          <h1 className="app">Say hello to ReactJS</h1>
          <p>You Will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
          <button>Awesome!</button>
        </div>
      </div>
      <div>
        <div className="cards">
        <div className="card">
          <img src="./images/icon1.png" alt=""/>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="card">
          <img src="./images/icon2.png" alt=""/>
          <h3>Components</h3>
          <p>Build encapsulated components that manage theur state.</p>
        </div>
        <div className="card">
          <img src="./images/icon3.png" alt=""/>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to teh component's.</p>
        </div>
        <div className="card">
          <img src="./images/icon4.png" alt=""/>
          <h3>JSX</h3>
          <p>Statically typed, designed to run on modern browsers.</p>
        </div>
      </div>
      </div>
    </div>
  );
};
 
export default App;