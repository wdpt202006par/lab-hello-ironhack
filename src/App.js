import React from 'react'; // j'importe REACT
import './App.css'; // J'importe mon fichier css

const App = () => { // Mon fonction App qui sera exportée
    return (
        <div className="page">
            <div className="background">
                    <nav>
                        <div className="logo-img">
                            <img src="/images/ironhack-logo.svg" alt="logo"/>
                        </div>
                        <div className="menu-img">
                        <img src="/images/menu-top.svg" alt="menu"/>
                        </div>
                    </nav>
            <div className="container">
                <h1>Say hello to ReactJS</h1>
                <p>You will learn a Frontend framework from scratch, to become a Ninka Developer</p>
                <button>Awesome !</button>
            </div>
            </div>
            <div className="articles">
                <article>
                    <img src="/images/icon1.png" alt="icon1"/>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </article>
                <article>
                    <img src="/images/icon2.png" alt="icon2"/>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </article>
                <article>
                    <img src="/images/icon3.png" alt="icon3"/>
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the component's.</p>
                </article>
                <article>
                    <img src="/images/icon4.png" alt="icon4"/>
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </article>
            </div>
        </div>
        
        
    );
  };
   
  export default App; // j'exporte ma fonction App