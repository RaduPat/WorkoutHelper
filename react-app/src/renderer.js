//We Import React and ReactDOM 
import React from "react";
import ReactDOM from "react-dom";

// Refrence the Root Container 
let root = document.getElementById("root");
//Using render method we give it our component
document.addEventListener("DOMContentLoaded", () => {
    //Dom Content is Created and Ready
    ReactDOM.render(<Main/>, root);
 });

 class Main extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Server side render</h2>
            </div>

        );
      }    

}