import React from "react";
import { Paper, makeStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Editor from "@monaco-editor/react";
import WindowHeader from "./WindowHeader";

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    width: 700,
    height: 320,
    backgroundColor: grey[700],
    marginBottom: spacing(2),
  },
  content: {
    flex: 1,
  },
}));

interface Props {
  lightMode: boolean;
  showLineNumbers: boolean;
}

const CodeEditor = ({ lightMode, showLineNumbers }: Props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={15}>
      <WindowHeader />
      <div className={classes.content}>
        <Editor
          height={"300px"}
          width={"700px"}
          language="javascript"
          theme={lightMode ? "light" : "dark"}
          value={`const fuu = () => {
  console.log("Hello World!")
}`}
          options={{
            selectOnLineNumbers: false,
            lineNumbers: showLineNumbers ? "on" : "off",
          }}
        />
      </div>
    </Paper>
  );
};

export default CodeEditor;
