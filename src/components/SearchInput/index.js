import React from "react";
import "./style.css";

const SearchInput = ({ onSearch }) => {
  let input;

  const _handleKeyPress = e => {
    if (e.key === "Enter") {
      onSearch(input.value);
    }
  };

  return (
    <div className="box">
      <div className="container-1">
        <span className="icon"><i className="fa fa-search" /></span>
        <input
          id="search"
          type="text"
          placeholder="Search..."
          ref={node => {
            input = node;
          }}
          onKeyPress={_handleKeyPress}
        />
      </div>
    </div>
  );
};

export default SearchInput;
