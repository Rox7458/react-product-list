import React from "react";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import { products } from "./helper/data";

const App = () => {
  return (
    <div>
      <Header />
      <ProductCard data={products} />
    </div>
  );
};

export default App;
