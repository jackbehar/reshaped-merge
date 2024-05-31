// eslint-disable-next-line no-unused-vars
import React from "react";
import { Reshaped } from "reshaped";
import "./theme.css"


export default function UXPinWrapper({ children }) {
  return  <Reshaped theme="reshaped" >{children}</Reshaped>;
}
