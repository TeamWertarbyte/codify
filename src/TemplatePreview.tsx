import React, { useState } from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import cx from "classnames";
import { Options } from "./interfaces";
import WindowHeader from "./components/WindowHeader";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(2, 4, 2, 2),
  },
  overlay: {
    cursor: "pointer",
    position: "relative",
    top: -151,
    left: 0 - spacing(2),
    right: 0,
    bottom: 0,
    height: `calc(100% + ${spacing(4)}px)`,
    width: `calc(100% + ${spacing(6)}px)`,
    backgroundColor: "rgba(0,0,0,0.0)",
    zIndex: 2,
  },
  hovered: {
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  editor: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    width: 300,
    height: 80,
    marginBottom: spacing(2),
  },
  dark: {
    backgroundColor: "#54799D",
  },
}));

interface Props {
  className?: string;
  options: Options;
  onClick: () => void;
}

const TemplatePreview = ({ className, onClick, options }: Props) => {
  const classes = useStyles();
  const [hovered, setHovered] = useState(false);
  const { fontColor, fontFamily, lightMode, os } = options;

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
        elevation={1}
      >
        <WindowHeader variant={os} />
      </Paper>
      <div
        className={cx(classes.overlay, { [classes.hovered]: hovered })}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
      />
    </Paper>
  );
};

export default TemplatePreview;
