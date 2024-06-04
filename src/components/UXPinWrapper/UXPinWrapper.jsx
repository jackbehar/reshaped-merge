// eslint-disable-next-line no-unused-vars
import React from "react";
import { Reshaped } from "reshaped";
import "./customTheme.css";

export default function UXPinWrapper({ children }) {
  return (
    <div style={{ display: "grid" }}>
      <Reshaped theme="customTheme" defaultColorMode="light">
        {children}
      </Reshaped>
    </div>
  );
}
