import React, { useState } from "react";
import { Link } from "react-router-dom";
import Page from "./Page";
import PageButton from "./subcomp/PageButton";

export default function Pagination() {
  const maxNum = 5000;
  const [currentPage, setCurrentPage] = useState(1);
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
        to={`/page/${1}`}
        onClick={() => {
          setCurrentPage(1);
        }}
      >
        <PageButton btnName={"1"} btnClass={"inactive"} />
      </Link>
      <div className="dots">...</div>

      <Link
        to={`/page/${currentPage - 2}`}
        onClick={() => {
          setCurrentPage(currentPage - 2);
        }}
      >
        <PageButton btnName={currentPage - 2} btnClass={"inactive"} />
      </Link>

      <Link
        to={`/page/${currentPage - 1}`}
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        <PageButton btnName={currentPage - 1} btnClass={"inactive"} />
      </Link>

      <PageButton btnName={currentPage} btnClass={"active"} />

      <Link
        to={`/page/${currentPage + 1}`}
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        <PageButton btnName={currentPage + 1} btnClass={"inactive"} />
      </Link>
      <Link
        to={`/page/${currentPage + 2}`}
        onClick={() => {
          setCurrentPage(currentPage + 2);
        }}
      >
        <PageButton btnName={currentPage + 2} btnClass={"inactive"} />
      </Link>

      <div className="dots">...</div>
      <Link
        to={`/page/${maxNum}`}
        onClick={() => {
          setCurrentPage(maxNum);
        }}
      >
        <PageButton btnName={maxNum} btnClass={"inactive"} />
      </Link>
      <Link
        to={`/page/${currentPage + 1}`}
        onClick={() => {
          setCurrentPage(Number(currentPage + 1));
        }}
      >
        <PageButton btnName={"Next"} btnClass={"inactive"} />
      </Link>
      <Page />
    </div>
  );
}
