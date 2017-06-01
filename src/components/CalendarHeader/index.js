import React from "react";

const Badge = ({ count, title }) => (
  <div
    style={{
      display: "inline-block",
      backgroundColor: "#865EFA",
      borderRadius: "15px",
      margin: "0 auto",
      padding: "3px 10px 3px 10px"
    }}
  >
    <span
      style={{
        color: "white",
        margin: "0 auto"
      }}
    >
      {count} {title}
    </span>
  </div>
);

const Header = ({ name, background, image, subscriberCount }) => (
  <div
    style={{
      display: "flex",
      backgroundImage: `url(${background})`,
      flexDirection: "column",
      justifyContent: "center",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px"
    }}
  >
    <h2
      style={{
        color: "white"
      }}
    >
      {name}
    </h2>
    <div
      style={{
        alignSelf: "center",
        backgroundColor: "white",
        width: "100px",
        borderRadius: "50%",
        padding: "10px",
        border: "1px solid black"
      }}
    >
      <img
        src={image}
        style={{
          maxHeight: "100%",
          maxWidth: "100%"
        }}
      />
    </div>
    <Badge count={subscriberCount} title="Subscribers" />
  </div>
);

export default Header;
