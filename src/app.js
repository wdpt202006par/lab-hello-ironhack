import React from "react"
import "./app.css" 

const App = () =>{
    return (
        //Tout le jsx
        <div className="container">
            <div className="navbar">
              <img src="/images/ironhack-logo.svg"/>
              <img src="/images/menu-top.svg" />
            </div>

            <div className ="title-button">
              <h1>Say Hello to</h1>
              <h1>ReactJS</h1>
              <h3>You will learn a frontend framework from scratch, to become a Ninja Developer.</h3>
              <button>Awesome !</button>
            </div>
<div className= "icons">
            <div className ="icon1">
              <img src="/images/icon1.png" />
              <h3>Declarative</h3>
              <h5>React makes it painless to create interactive UIs.</h5>
            </div>

            <div className ="icon2">
              <img src="/images/icon2.png"  />
              <h3>Components</h3>
              <h5>Build encaspulated components that manage their state.</h5>
            </div>

            <div className ="icon3">
              <img src="/images/icon3.png"  />
              <h3>Single-Way</h3>
              <h5>A set of immutable values are passed to the component's.</h5>
            </div>

            <div className ="icon4">
              <img src="/images/icon4.png"  />
              <h3>JSX</h3>
              <h5>Statically-typed, designed to run on modern browsers.</h5>
            </div>
</div>

        </div>

    )
}

export default App;