import React from "react";
import { Paper, makeStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import Editor from "@monaco-editor/react";
import WindowHeader from "./WindowHeader";
import cx from "classnames";
import { Options } from "../interfaces";

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
  dark: {
    backgroundColor: "#54799D",
  },
}));

interface Props {
  options: Options;
}

const CodeEditor = ({
  options: { lightMode, os, language, showLineNumbers },
}: Props) => {
  const classes = useStyles();

  return (
    <Paper
      className={cx(classes.root, { [classes.dark]: !lightMode })}
      elevation={15}
    >
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
