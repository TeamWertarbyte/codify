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
import { Options } from "./interfaces";

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

const fontFamilies = ["Segoe UI", "Roboto", "Arial"];

function App() {
  const classes = useStyles();
  const stageRef = useRef<HTMLElement>();
  const [options, setOptions] = useState<Options>({
    backgroundColor: "#FFFFFF",
    fontColor: "#000000",
    showLineNumbers: true,
    lightMode: true,
    os: "windows10",
    language: "javascript",
    fontFamily: "Roboto",
  });

  const handleGenerateImage = () => {
    const scale = 2;
    const elm = stageRef.current;
    if (elm) {
      domtoimage
        .toJpeg(elm, {
          height: elm.offsetHeight * scale,
          style: {
            transform: `scale(${scale}) translate(${
              elm.offsetWidth / 2 / scale
            }px, ${elm.offsetHeight / 2 / scale}px)`,
          },
          width: elm.offsetWidth * scale,
          quality: 0.95,
        })
        .then((dataUrl: string) => {
          const link = document.createElement("a");
          link.download = `codify-${Date.now()}.jpeg`;
          link.href = dataUrl;
          link.click();
        });
    }
  };

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <div className={classes.toolbar}>
          <ColorPicker
            id="background-color"
            tooltip="Background Color"
            color={options.backgroundColor}
            onChange={(backgroundColor) =>
              setOptions((options) => ({ ...options, backgroundColor }))
            }
            icon={<FormatColorFill />}
          />
          <ColorPicker
            id="font-color"
            tooltip="Text Color"
            color={options.fontColor}
            onChange={(fontColor) =>
              setOptions((options) => ({ ...options, fontColor }))
            }
            icon={<FormatColorText />}
          />
          <LanguagePicker
            id="code-language"
            tooltip="Code language"
            language={options.language}
            onChange={(language) =>
              setOptions((options) => ({ ...options, language }))
            }
            icon={<CodeBraces />}
          />
          <ToolbarToggle
            active={options.showLineNumbers}
            tooltip="Line Numbers"
            onChange={(showLineNumbers) =>
              setOptions((options) => ({ ...options, showLineNumbers }))
            }
            activeIcon={<FormatListNumbers />}
            inactiveIcon={<Text />}
          />
          <ToolbarToggle
            active={options.lightMode}
            tooltip={options.lightMode ? "Dark Mode" : "Light Mode"}
            onChange={(lightMode) => {
              setOptions((options) => ({ ...options, lightMode }));
              if (!lightMode) {
                setOptions((options) => ({
                  ...options,
                  backgroundColor: "#383839",
                  fontColor: "#d3d3d3",
                }));
              }
            }}
            activeIcon={<LightbulbOutline />}
            inactiveIcon={<Lightbulb />}
          />
          <OSPicker
            id={"operating-system"}
            onChange={(os) => setOptions((options) => ({ ...options, os }))}
          />
          <FontPicker
            id="font-family"
            tooltip="Font family"
            fontFamily={options.fontFamily}
            fontFamilies={fontFamilies}
            onChange={(fontFamily) =>
              setOptions((options) => ({ ...options, fontFamily }))
            }
            icon={<Alphabetical />}
          />
        </div>
        <div className={classes.captureStageContainer}>
          <CaptureStage
            ref={stageRef}
            backgroundColor={options.backgroundColor}
            fontColor={options.fontColor}
            fontFamily={options.fontFamily}
            language={options.language}
            lightMode={options.lightMode}
            os={options.os}
            showLineNumbers={options.showLineNumbers}
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
