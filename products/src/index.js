import faker from "faker";

let products = "";

for (let i = 1; i < 8; i++) {
  const name = faker.commerce.productName();
  products += `<div class = "product" ><div class="itemNumber">${i}</div>${name}</div>`;
}

console.log(products);

document.querySelector("#dev-products").innerHTML = products;
