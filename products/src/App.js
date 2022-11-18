import React, { useState, useEffect } from "react";
import Container from "./components/Container/Container";
import Product from "./components/Product/Product";
import gridwall from "./gridwall.json";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const slicedProduct =
      gridwall.output.pageData.gridwallContent.productList.deviceList.slice(
        0,
        8
      );
    setProducts(slicedProduct);
  }, []);
  return (
    <Container>
      {products?.map((product, i) => (
        <Product
          key={i}
          name={product.displayName}
          price={product.productPriceInfo.fullRetailContractInfo.originalPrice}
          imageUrl={product.imageName}
          domain={product.imgDomainName}
        />
      ))}
    </Container>
  );
};

export default App;
