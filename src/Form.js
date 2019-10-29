import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const Form = ({ submitform }) => {
  const [hh, setHh] = useState(1);
  return (
    <form noValidate autoComplete="off">
      <div>
        <TextField
          label="Household Size"
          value={hh}
          onChange={event=> setHh(event.target.value)}
          type = "number"
        />
        <Button onClick={() => submitform({ hh })}>MAKE MY KIT</Button>
      </div>
    </form>
  );
};

export default Form;
