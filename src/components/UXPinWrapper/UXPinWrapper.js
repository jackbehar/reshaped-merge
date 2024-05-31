// eslint-disable-next-line no-unused-vars
import React from "react";
// import "./App.css"
import { Reshaped } from "reshaped";
import "reshaped/themes/reshaped/theme.css";


export default function UXPinWrapper({ children }) {
  return  <Reshaped theme="reshaped">{children}</Reshaped>;
}
