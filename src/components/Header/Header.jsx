import React from "react";
import headerStyle from "../../scss/header.module.scss";

const Header = () => {
  return (
    <div>
      <h1>Product List</h1>
      <section>
        <button>ALL</button>
        <button>ELECTRONICS</button>
        <button>JEWELERY</button>
        <button>MEN'S CLOTHING</button>
        <button>WOMEN'S CLOTHING</button>
      </section>
    </div>
  );
};

export default Header;
