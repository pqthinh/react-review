import React, { useState } from "react";

// Đây là form search
// hàm này sẽ nghe sự kiện nhập input của người dùng sau đó truyền text bắt được về lại component Header
// hàm setSearch lại truyền text bắt được cho hàm Main -> listProduct
export const Search = (props) => {
  const { search, setSearch } = props;
  const [textinput, setTextinput] = useState("");

  const handleChangeTextInput = (input) => {
    const { name, value } = input.target;
    setTextinput(value);
    setSearch(value);
  };
  return (
    <>
      <form className="form-inline my-2 my-lg-0 ml-auto">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          id="searchBar"
          onChange={(value) => handleChangeTextInput(value)}
          value={textinput}
        />
      </form>
    </>
  );
};
