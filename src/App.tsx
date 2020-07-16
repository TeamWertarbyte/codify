import React, { useRef, useState } from "react";
import "./App.css";
import { Button, makeStyles } from "@material-ui/core";
import { saveAs } from "file-saver";
// @ts-ignore
import domtoimage from "dom-to-image-more";
import { ChromePicker } from "react-color";
import CaptureStage from "./components/CaptureStage";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  download: {
    marginTop: spacing(4),
  },
}));

function App() {
  const classes = useStyles();
  const stageRef = useRef();
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const handleGenerateImage = () => {
    domtoimage.toBlob(stageRef.current).then((blob: Blob) => {
      saveAs(blob, `codify-${Date.now()}.png`);
    });
  };

  return (
    <body className={classes.root}>
      <ChromePicker
        color={backgroundColor}
        onChange={(e) => setBackgroundColor(e.hex)}
      />
      <CaptureStage ref={stageRef} backgroundColor={backgroundColor} />
      <Button
        className={classes.download}
        variant={"outlined"}
        onClick={handleGenerateImage}
      >
        Download
      </Button>
    </body>
  );
}

export default App;
