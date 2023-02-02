import React, { useState } from "react";
import { Link } from "react-router-dom";
import Page from "./Page";
import PageButton from "./subcomp/PageButton";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState("1");
  return (
    <div className="pagination">
      <Link
        to={`/page/${currentPage - 1}`}
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        <PageButton btnName={"Pre"} btnClass={"inactive"} />
      </Link>
      <Link
        to={`/page/${currentPage}`}
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        <PageButton btnName={"Pre"} btnClass={"inactive"} />
      </Link>
      <Link
        to={`/page/${currentPage + 1}`}
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        <PageButton btnName={"Next"} btnClass={"inactive"} />
      </Link>

      <Page />
    </div>
  );
}
