import React, { useState } from "react";
import "./pageButton.css";

export default function PageButton({ btnName, btnClass }) {
  return <button className={btnClass}>{btnName}</button>;
}
