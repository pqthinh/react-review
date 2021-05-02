import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from 'axios'
import {Product } from '../component/product'


function ListProduct() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios
          .get("https://run.mocky.io/v3/7af6f34b-b206-4bed-b447-559fda148ca5")
          .then((response) => {
            setProducts(response.data);
          })
          .catch((e) => {
            console.log(e);
          })
      },[]);
  return (
    <>
      <ul id="productsList">
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </ul>
    </>
  );
};

export const PageListProduct = (props) => {
  const [pageCount, setPageCount] = useState(0);

  const handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * props.perPage);

    // this.setState({ offset: offset }, () => {
    //   this.loadCommentsFromServer();
    // });
  };

  return (
    <>
      <ListProduct />
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={100}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </>
  );
};
