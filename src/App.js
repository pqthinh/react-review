import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useState } from "react";
import { Header } from "./component/header";
import {Body} from './component/body'
import { PageListProduct } from "./page/listProduct";

const App = () => {
  const [search, setSearch] = useState("")
  useEffect(()=> {
    console.log(search, "search")
  }, [search])
  return (
    <>
      <Header setSearch={setSearch}/>
      {/* <Body search={search}/> */}
      <PageListProduct />
    </>
  );
};

export default App