//We Import React and ReactDOM 
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/navbar';
import WorkoutComponent from './components/WorkoutForm';
import Schedule from './components/Schedule';


// Refrence the Root Container 
let root = document.getElementById("root");
//Using render method we give it our component
document.addEventListener("DOMContentLoaded", () => {
    //Dom Content is Created and Ready
    ReactDOM.render(<Main/>, root);
 });
 //Our Component's more on that in the next videos

class Main extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <Router>
                <div>
                    <h2>Workout Buddy</h2>
                    <NavBar/>
                    <Route path="/Workout" component={WorkoutComponent} />
                    <Route path="/Schedule" component={Schedule} />
                </div>
            </Router>

        );
      }    

}
  