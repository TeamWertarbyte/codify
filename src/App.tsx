import React, { useRef } from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { saveAs } from "file-saver";
// @ts-ignore
import domtoimage from "dom-to-image-more";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();
  const editorRef = useRef();

  const handleGenerateImage = () => {
    domtoimage.toBlob(editorRef.current).then((blob: Blob) => {
      saveAs(blob, `codify-${Date.now()}.png`);
    });
  };

  return (
    <body className={classes.root}>
      <Typography
        variant={"h3"}
        gutterBottom
        contentEditable
        spellCheck={false}
        suppressContentEditableWarning
      >
        Edit this cool title
      </Typography>
      <CodeEditor ref={editorRef} />
      <Button variant={"outlined"} onClick={handleGenerateImage}>
        Download
      </Button>
    </body>
  );
}

export default App;
