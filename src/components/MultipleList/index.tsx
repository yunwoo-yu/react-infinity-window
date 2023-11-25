import useGetScrollPos from "hooks/useGetScrollPos";
import { useGetViewPortHeight } from "hooks/useGetViewPort";
import React from "react";

export const MultipleList = () => {
  const scroll = useGetScrollPos();
  const height = useGetViewPortHeight();
  console.log("scroll", scroll);
  console.log("height", height);

  return <div>MultipleList</div>;
};
