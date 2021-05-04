import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "./product";

// hàm này xử lý việc lấy dữ liệu rồi hiển thị ra màn hình
export const ListProduct = (props) => {
  const { search } = props;
  const [products, setProducts] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [prevState, setPrevState] = useState(null)

  // laays danh sach san pham
  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/7af6f34b-b206-4bed-b447-559fda148ca5")
      .then((response) => {
        setListProduct(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .then(() => {
        console.log("Danh sach san pham", listProduct);
      });
  },[]);

  // lawngs nghe search thay doi
  useEffect(() => {
    if(JSON.stringify(products) != JSON.stringify(prevState)) {
      const filteredProducts = listProduct.filter((product) => {
        let check = true;
        search.trim().split(" ").forEach((word) => {
          console.log(word);
          check = check && product.name.toLowerCase().includes(word);
        });
        return check;
      });
      setProducts(filteredProducts)
    }else {
      setPrevState(listProduct)
    }
  }, [search]);

  return (
    <>
      <div className="productsList">
        { products.map(product => { 
          return <Product product={product} />
        })}
      </div>
    </>
  );
};
