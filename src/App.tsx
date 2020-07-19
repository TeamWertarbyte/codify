import React, { useRef, useState } from "react";
import "./App.css";
import { Fab, makeStyles } from "@material-ui/core";
import { saveAs } from "file-saver";
import { grey } from "@material-ui/core/colors";
// @ts-ignore
import domtoimage from "dom-to-image-more";
import { Download, FormatColorFill, FormatColorText } from "mdi-material-ui";
import CaptureStage from "./components/CaptureStage";
import ColorPicker from "./components/ColorPicker";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  toolbar: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: spacing(6),
    alignItems: "start",
    gridGap: spacing(1),
    backgroundColor: grey[300],
    padding: spacing(1),
  },
  captureStageContainer: {
    flex: 1,
    display: "grid",
    placeItems: "center",
    justifyItems: "center",
    backgroundColor: grey[200],
  },
  fab: {
    position: "absolute",
    bottom: spacing(2),
    right: spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const stageRef = useRef();
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [fontColor, setFontColor] = useState("#000000");

  const handleGenerateImage = () => {
    domtoimage.toBlob(stageRef.current).then((blob: Blob) => {
      saveAs(blob, `codify-${Date.now()}.png`);
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <ColorPicker
          id="background-color"
          tooltip="Background Color"
          color={backgroundColor}
          onChange={setBackgroundColor}
          icon={<FormatColorFill />}
        />
        <ColorPicker
          id="font-color"
          tooltip="Text Color"
          color={fontColor}
          onChange={setFontColor}
          icon={<FormatColorText />}
        />
      </div>
      <div className={classes.captureStageContainer}>
        <CaptureStage
          ref={stageRef}
          backgroundColor={backgroundColor}
          fontColor={fontColor}
        />
      </div>
      <Fab
        className={classes.fab}
        onClick={handleGenerateImage}
        color="primary"
      >
        <Download />
      </Fab>
    </div>
  );
}

export default App;
