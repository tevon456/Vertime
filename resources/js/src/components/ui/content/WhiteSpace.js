import React from "react";
let wspace = "\u00A0";
const Space = ({ amount }) => (
    <span>{wspace.repeat(amount == undefined ? 1 : amount)}</span>
);
export default Space;
