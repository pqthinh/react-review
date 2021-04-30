import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    
    fetch("https://run.mocky.io/v3/7af6f34b-b206-4bed-b447-559fda148ca5")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.products
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="container">
                    <a href="/" class="d-flex w-50 mr-auto">
                        <img class="logo" src="images/logos/logo-alibaba.png" alt="LOGO"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse w-100" id="navbarTop">
                        <ul class="navbar-nav w-100 justify-content-center">
                            <li class="nav-item">
                                <form class="form-inline my-2 my-lg-0 ml-auto">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="searchBar"/>
                                </form>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto w-100 justify-content-end">

                            <li class="nav-item nav-item-right">
                                <a class="nav-link" href="#"><i class="icon icon-sm  fa fa-heart"></i>Favorites</a>
                            </li>
                        </ul>
                    </div>
                </div>  
            </nav>
    </div>
      );
    }
  }
}

function App() {
  return (
    <div className="App">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <div class="container">
                    <a href="/" class="d-flex w-50 mr-auto">
                        <img class="logo" src="images/logos/logo-alibaba.png" alt="LOGO"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse w-100" id="navbarTop">
                        <ul class="navbar-nav w-100 justify-content-center">
                            <li class="nav-item">
                                <form class="form-inline my-2 my-lg-0 ml-auto">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="searchBar"/>
                                </form>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto w-100 justify-content-end">

                            <li class="nav-item nav-item-right">
                                <a class="nav-link" href="#"><i class="icon icon-sm  fa fa-heart"></i>Favorites</a>
                            </li>
                        </ul>
                    </div>
                </div>  
            </nav>
    </div>
  );
}

export default App;
