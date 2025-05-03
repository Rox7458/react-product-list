import React from "react";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import { products } from "./helper/data";
import appStyle from "./scss/app.module.scss";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <ProductCard data={products} />
      </main>
    </div>
  );
};

export default App;
