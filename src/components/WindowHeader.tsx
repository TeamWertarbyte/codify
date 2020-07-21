import React from "react";
import { createStyles, IconButton, Theme } from "@material-ui/core";
import cx from "classnames";
import { green, grey, red, yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import {
  ArrowExpand,
  WindowMinimize,
  WindowMaximize,
  WindowClose,
  CloseCircle,
} from "mdi-material-ui";

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    macOS: {
      backgroundColor: grey[300],
      padding: spacing(0.5),
    },
    windows10: {
      backgroundColor: "#fff",
      justifyContent: "flex-end",
    },
    linuxMint: {
      backgroundColor: "#d3d4cf",
      justifyContent: "flex-end",
      padding: spacing(0.5),
    },
    dot: {
      borderRadius: "50%",
      margin: spacing(0.25),
      height: spacing(1),
      width: spacing(1),
    },
    green: {
      backgroundColor: green[500],
    },
    yellow: {
      backgroundColor: yellow[800],
    },
    red: {
      backgroundColor: red[500],
    },
    square: {
      borderRadius: 0,
    },
  })
);

interface Props {
  className?: string;
  variant?: "macOS" | "windows10" | "linuxMint";
}

const WindowHeader = ({ className, variant = "windows10" }: Props) => {
  const classes = useStyles();

  switch (variant) {
    case "macOS":
      return (
        <div className={cx(classes.root, classes.macOS, className)}>
          <div className={cx(classes.dot, classes.red)} />
          <div className={cx(classes.dot, classes.yellow)} />
          <div className={cx(classes.dot, classes.green)} />
        </div>
      );
    case "windows10":
      return (
        <div className={cx(classes.root, classes.windows10, className)}>
          <IconButton size={"small"} className={classes.square}>
            <WindowMinimize />
          </IconButton>
          <IconButton size={"small"} className={classes.square}>
            <WindowMaximize />
          </IconButton>
          <IconButton size={"small"} className={classes.square}>
            <WindowClose />
          </IconButton>
        </div>
      );
    case "linuxMint":
      return (
        <div className={cx(classes.root, classes.linuxMint, className)}>
          <IconButton size={"small"}>
            <WindowMinimize fontSize={"small"} />
          </IconButton>
          <IconButton size={"small"}>
            <ArrowExpand fontSize={"small"} />
          </IconButton>
          <IconButton size={"small"}>
            <CloseCircle fontSize={"small"} style={{ color: "#78b375" }} />
          </IconButton>
        </div>
      );
    default:
      return <div className={cx(classes.root, className)} />;
  }
};

export default WindowHeader;
