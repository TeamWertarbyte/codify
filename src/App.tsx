import React from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <body className={classes.root}>
      <Typography variant={"h3"} gutterBottom>
        My smart code
      </Typography>
      <CodeEditor />
      <Button variant={"outlined"}>Download</Button>
    </body>
  );
}

export default App;
