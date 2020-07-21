import React, { useRef, useState } from "react";
import "./App.css";
import { Fab, makeStyles, Theme } from "@material-ui/core";
import { saveAs } from "file-saver";
import { grey } from "@material-ui/core/colors";
// @ts-ignore
import domtoimage from "dom-to-image-more";
import {
  Alphabetical,
  CodeBraces,
  Download,
  FormatColorFill,
  FormatColorText,
  Lightbulb,
  LightbulbOutline,
  Text,
} from "mdi-material-ui";
import CaptureStage from "./components/CaptureStage";
import ColorPicker from "./components/ColorPicker";
import ToolbarToggle from "./components/ToolbarToggle";
import { FormatListNumbers } from "mdi-material-ui/light";
import LanguagePicker from "./components/LanguagePicker";
import OSPicker from "./components/OSPicker";
import FontPicker from "./components/FontPicker";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  content: {
    display: "flex",
    flex: 1,
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
    borderLeft: `1px solid ${grey[400]}`,
  },
  fab: {
    position: "absolute",
    bottom: spacing(6),
    right: spacing(2),
  },
  options: {
    padding: spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  const stageRef = useRef();
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [fontColor, setFontColor] = useState("#000000");
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const [lightMode, setLightMode] = useState(true);
  const [os, setOS] = useState<"macOS" | "windows10" | "linuxMint">(
    "windows10"
  );
  const [language, setLanguage] = useState<string>("javascript");

  const fontFamilies = ["Segoe UI", "Roboto", "Arial"];
  const [fontFamily, setFontFamily] = useState<string>(fontFamilies[1]);

  const handleGenerateImage = () => {
    domtoimage.toBlob(stageRef.current).then((blob: Blob) => {
      saveAs(blob, `codify-${Date.now()}.png`);
    });
  };

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
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
          <LanguagePicker
            id="code-language"
            tooltip="Code language"
            language={language}
            onChange={setLanguage}
            icon={<CodeBraces />}
          />
          <ToolbarToggle
            active={showLineNumbers}
            tooltip="Line Numbers"
            onChange={setShowLineNumbers}
            activeIcon={<FormatListNumbers />}
            inactiveIcon={<Text />}
          />
          <ToolbarToggle
            active={lightMode}
            tooltip={lightMode ? "Dark Mode" : "Light Mode"}
            onChange={(lightMode) => {
              setLightMode(lightMode);
              if (lightMode === false) {
                setBackgroundColor("#383839");
                setFontColor("#d3d3d3");
              }
            }}
            activeIcon={<LightbulbOutline />}
            inactiveIcon={<Lightbulb />}
          />
          <OSPicker id={"operating-system"} onChange={setOS} />
          <FontPicker
            id="font-family"
            tooltip="Font family"
            fontFamily={fontFamily}
            fontFamilies={fontFamilies}
            onChange={setFontFamily}
            icon={<Alphabetical />}
          />
        </div>
        <div className={classes.captureStageContainer}>
          <CaptureStage
            ref={stageRef}
            backgroundColor={backgroundColor}
            fontColor={fontColor}
            fontFamily={fontFamily}
            language={language}
            lightMode={lightMode}
            os={os}
            showLineNumbers={showLineNumbers}
          />
        </div>
      </div>
      <Footer />
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
