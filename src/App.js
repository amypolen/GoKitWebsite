import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";

const App = () => {
  // Learn more about useState: https://reactjs.org/docs/hooks-state.html
  const [answers, submitform] = useState();

return answers ? <Result answers={answers} />: <Form submitform={submitform}/>
};

export default App;
