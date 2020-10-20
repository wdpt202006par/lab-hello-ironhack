import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const App = () => {
    return (
        <div>
            <div>
                <img src= '../public/images/ironhack-logo.svg'/>
                <img src= '../public/images/menu-top.svg'/>
                <h1>Say hello to ReactJS</h1>
                <p>You will learn a Frontend framework from scatch, to become an Ninka Developer</p>
                <button>Awesome!</button>
            </div>

            <div>
                <div>
                    <img src='../public/images/icon1.png'></img>
                    <h2>Declarative</h2>
                    <p>React makes it painless to create interactive UIs</p>
                </div>

                <div>
                    <img src='../public/images/icon2.png'></img>
                    <h2>Components</h2>
                    <p>Build encapsulated components that manage thier state</p>
                </div>

                <div>
                    <img src='../public/images/icon3.png'></img>
                    <h2>Single-way</h2>
                    <p>A set of immutable values are passed to the components</p>
                </div>

                <div>
                    <img src='../public/images/icon4.png'></img>
                    <h2>JSX</h2>
                    <p>Staticall-typed, designed to run on modern browers</p>
                </div>

            </div>
            
        </div>   
    );
  };

ReactDOM.render(<App />, document.getElementById('root'));