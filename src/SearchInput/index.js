import React from "react";

const SearchInput = ({ onSearch }) => {
  let input;

  const _handleKeyPress = e => {
    if (e.key === "Enter") {
      onSearch(input.value);
    }
  };

  return (
    <div>
      <input
        type="text"
        ref={node => {
          input = node;
        }}
        onKeyPress={_handleKeyPress}
      />
      <button
        onClick={() => {
          onSearch(input.value);
        }}
      >
        search
      </button>
    </div>
  );
};

export default SearchInput;
