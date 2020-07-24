import React, { useRef, useState } from "react";
import "./App.css";
import { Fab, makeStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
// @ts-ignore
import domtoimage from "dom-to-image-more";
import { Download } from "mdi-material-ui";
import CaptureStage from "./components/CaptureStage";
import Header from "./Header";
import Footer from "./Footer";
import { Options } from "./interfaces";
import Toolbar from "./Toolbar";
import Templates from "./Templates";

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
}));

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
      <Templates onChange={setOptions} />
      <div className={classes.content}>
        <Toolbar options={options} onChange={setOptions} />
        <div className={classes.captureStageContainer}>
          <CaptureStage ref={stageRef} options={options} />
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
