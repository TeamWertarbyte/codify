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
  language: string;
  lightMode: boolean;
  os: "macOS" | "windows10" | "linuxMint";
  showLineNumbers: boolean;
}

const CodeEditor = ({ language, lightMode, os, showLineNumbers }: Props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={15}>
      <WindowHeader variant={os} />
      <div className={classes.content}>
        <Editor
          height={"300px"}
          width={"700px"}
          language={language}
          theme={lightMode ? "light" : "dark"}
          value={`const fun = () => {
  console.log("Hello World!")
}`}
          options={{
            selectOnLineNumbers: false,
            lineNumbers: showLineNumbers ? "on" : "off",
            minimap: { enabled: false },
          }}
        />
      </div>
    </Paper>
  );
};

export default CodeEditor;
