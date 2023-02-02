import React from "react";
import { useParams } from "react-router-dom";
export default function Page() {
  const { pageNumber } = useParams();
  return <h1>{pageNumber}</h1>;
}
