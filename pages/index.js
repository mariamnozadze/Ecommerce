import React from "react";

const Home = () => {
  return (
    <>
      Herobanner
      <div>
        <h2>best selling products</h2>
        <p>speakers of many variations</p>
      </div>
      <div>{["product 1", "product 2"].map((product) => product)}</div>
      footer
    </>
  );
};

export default Home;
