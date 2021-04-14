/* src/content.js */
import React from "react";
import ReactDOM from "react-dom";
import "./content.css";

console.log("im being loaded somewhere");

class Main extends React.Component {
  render() {
    return (
      <div className={"my-extension"}>
        <h1>
          Hello world - My first Extension TESTING MORE please work PLEAAASE
        </h1>
      </div>
    );
  }
}

const app = document.createElement("div");
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);
