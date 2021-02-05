import React from "react";
import { Backdrop } from "./BackdropElement";

const Backdrop = ({ show, clicked }) => {
  return show ? <Backdrop onClick={clicked}></Backdrop> : null;
};

export default Backdrop;
