// import faker from "faker";
// import gridwall from "./gridwall.json";

// let products = "";
// console.log(gridwall);

// for (let i = 1; i < 8; i++) {
//   const name = faker.commerce.productName();
//   products += `<div class = "product" ><div class="itemNumber">${i}</div>${name}</div>`;
// }

// console.log(products);

// document.querySelector("#dev-products").innerHTML = products;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

ReactDOM.render(<App />, document.getElementById("dev-products"));
