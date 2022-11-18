// const cartCount = `<div>you have ${7} items in your cart</div>`;
// document.querySelector("#cart1").innerHTML = cartCount;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

ReactDOM.render(<App />, document.getElementById("cart1"));
