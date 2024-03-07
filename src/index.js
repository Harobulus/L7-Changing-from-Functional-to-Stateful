import React from "react";
import ReactDOM, { render } from "react-dom";
import "./styles.css";
import NameTag from "./NameTag.js";
import { namesData } from "./data.js";

const renderNameTag = (name) => <NameTag key={name.id} name={name.name}/>

const App = () => {
  const NameTagElements = namesData.map(renderNameTag);
  return (
  <div className="App">
    <h1>Name Tag Generator</h1>
    {NameTagElements}
  </div>
  )
  };

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

