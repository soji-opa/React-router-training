import React from "react";

function Home(props) {
  console.log("Home", props);
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://source.unsplash.com/F6-U5fGAOik"
        alt=""
      />
      <button
        className="md-button shop-button"
        onClick={() => props.history.push("/shop")}
      >
        Shop now!
      </button>
    </div>
  );
}

export default Home;
