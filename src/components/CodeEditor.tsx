import React, { useRef } from "react";
import { Paper, makeStyles, Button } from "@material-ui/core";
import { green, grey, red, yellow } from "@material-ui/core/colors";
import Editor from "@monaco-editor/react";
import cx from "classnames";
// @ts-ignore
import domtoimage from "dom-to-image-more";
import { saveAs } from "file-saver";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    width: 700,
    height: 320,
    backgroundColor: grey[700],
    marginBottom: theme.spacing(2),
  },
  header: {
    display: "flex",
    backgroundColor: grey[300],
    padding: theme.spacing(0.5),
  },
  dot: {
    borderRadius: "50%",
    margin: theme.spacing(0.25),
    height: theme.spacing(1),
    width: theme.spacing(1),
  },
  green: {
    backgroundColor: green[500],
  },
  yellow: {
    backgroundColor: yellow[800],
  },
  red: {
    backgroundColor: red[500],
  },
  content: {
    flex: 1,
  },
}));

function CodeEditor() {
  const classes = useStyles();
  const editorRef = useRef();

  const handleCapture = () => {
    domtoimage.toBlob(editorRef.current).then((blob: Blob) => {
      saveAs(blob, "my-node.png");
    });
  };

  return (
    <>
      <Paper ref={editorRef} className={classes.root} elevation={15}>
        <div className={classes.header}>
          <div className={cx(classes.dot, classes.red)} />
          <div className={cx(classes.dot, classes.yellow)} />
          <div className={cx(classes.dot, classes.green)} />
        </div>
        <div className={classes.content}>
          <Editor
            height={"300px"}
            width={"700px"}
            language="javascript"
            theme="vs-dark"
            value={`const fuu = () => {
  console.log("Hello World!")
}
          `}
            options={{
              selectOnLineNumbers: true,
            }}
          />
        </div>
      </Paper>
      <Button variant={"outlined"} onClick={handleCapture}>
        Download
      </Button>
    </>
  );
}

export default CodeEditor;
