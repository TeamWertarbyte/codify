import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import cx from "classnames";
import { Options } from "./interfaces";
import WindowHeader from "./components/WindowHeader";
import Editor from "@monaco-editor/react";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(1),
  },
  overlay: {
    position: "relative",
    top: -191,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.0)",
    zIndex: 2,
  },
  editor: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    width: 400,
    height: 120,
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
  className?: string;
  options: Options;
}

const TemplatePreview = ({ className, options }: Props) => {
  const classes = useStyles();
  const {
    fontColor,
    fontFamily,
    lightMode,
    os,
    language,
    showLineNumbers,
  } = options;

  return (
    <Paper
      className={cx(classes.root, className)}
      elevation={0}
      square
      style={{
        backgroundColor: options.backgroundColor,
      }}
    >
      <Typography
        variant={"h6"}
        gutterBottom
        style={{ color: fontColor, fontFamily }}
      >
        Edit this cool title
      </Typography>
      <Paper
        className={cx(classes.editor, { [classes.dark]: !lightMode })}
        elevation={15}
      >
        <WindowHeader variant={os} />
        <div className={classes.content}>
          <Editor
            height={"100px"}
            width={"400px"}
            language={language}
            theme={lightMode ? "light" : "dark"}
            value={`const fun = () => {
  console.log("Hello World!")
}`}
            options={{
              readOnly: true,
              selectOnLineNumbers: false,
              lineNumbers: showLineNumbers ? "on" : "off",
              minimap: { enabled: false },
            }}
          />
        </div>
      </Paper>
      <div className={classes.overlay} />
    </Paper>
  );
};

export default TemplatePreview;
