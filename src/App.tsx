import React, { useRef, useState } from "react";
import "./App.css";
import { Fab, makeStyles, Theme } from "@material-ui/core";
import { saveAs } from "file-saver";
import { grey } from "@material-ui/core/colors";
// @ts-ignore
import domtoimage from "dom-to-image-more";
import {
  Download,
  FormatColorFill,
  FormatColorText,
  Text,
} from "mdi-material-ui";
import CaptureStage from "./components/CaptureStage";
import ColorPicker from "./components/ColorPicker";
import ToolbarToggle from "./components/ToolbarToggle";
import { FormatListNumbers } from "mdi-material-ui/light";

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
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
  const [showLineNumbers, setShowLineNumbers] = useState(true);

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
        <ToolbarToggle
          active={showLineNumbers}
          tooltip="Line Numbers"
          onChange={setShowLineNumbers}
          activeIcon={<FormatListNumbers />}
          inactiveIcon={<Text />}
        />
      </div>
      <div className={classes.captureStageContainer}>
        <CaptureStage
          ref={stageRef}
          backgroundColor={backgroundColor}
          fontColor={fontColor}
          showLineNumbers={showLineNumbers}
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
