import React from "react";
import { Search } from "./search";
import "./style.css"

export const Header = (props) => {
    const { search, setSearch } = props
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a href="/" className="d-flex w-50 mr-auto">
            <img className="logo img-logo" src={"/logo192.png"} alt="LOGO" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTop"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse w-100" id="navbarTop">
            <ul className="navbar-nav w-100 justify-content-center">
              <li className="nav-item">
                <Search setSearch={setSearch}/>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto w-100 justify-content-end">
              <li className="nav-item nav-item-right">
                <a className="nav-link" href="#">
                  <i className="icon icon-sm  fa fa-heart"></i>Favorites
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
