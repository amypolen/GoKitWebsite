import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const Result = ({ answers }) => {
  const water = 3 * answers.hh;
  return (
    <div>
      <p>Water: {water} gallons</p>
      <p>Water: {water} gallons</p>
      <p>Water: {water} gallons</p>
      <p>Water: {water} gallons</p>
      <p>Water: {water} gallons</p>
    </div>
  );
};

export default Result;
