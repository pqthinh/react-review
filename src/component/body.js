import React from "react";
import { ListProduct } from "./listProductSearch";

export const Body = (props) => {
  const { search } = props;
  return (
    <>
      <ListProduct search={search} />
    </>
  );
};
