import React, { useRef, useState } from "react";
import "./App.css";
import { Button, makeStyles } from "@material-ui/core";
import { saveAs } from "file-saver";
// @ts-ignore
import domtoimage from "dom-to-image-more";
import { ChromePicker } from "react-color";
import CaptureStage from "./components/CaptureStage";
import { grey } from "@material-ui/core/colors";
import ColorPicker from "./components/ColorPicker";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: spacing(4),
  },
  captureStageContainer: {
    display: "grid",
    placeItems: "center",
    marginTop: spacing(4),
  },
  options: {
    display: "grid",
    placeItems: "center",
    backgroundColor: grey[300],
    padding: spacing(2),
  },
  actions: {
    display: "grid",
    placeItems: "center",
    padding: spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const stageRef = useRef();
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  const handleGenerateImage = () => {
    domtoimage.toBlob(stageRef.current).then((blob: Blob) => {
      saveAs(blob, `codify-${Date.now()}.png`);
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.captureStageContainer}>
        <CaptureStage ref={stageRef} backgroundColor={backgroundColor} />
      </div>
      <div className={classes.options}>
        <ColorPicker
          label="Background"
          color={backgroundColor}
          onChange={setBackgroundColor}
        />
      </div>
      <div className={classes.actions}>
        <Button variant={"outlined"} onClick={handleGenerateImage}>
          Download
        </Button>
      </div>
    </div>
  );
}

export default App;
