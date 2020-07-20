import React from "react";
import { createStyles, IconButton, Theme } from "@material-ui/core";
import cx from "classnames";
import { green, grey, red, yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { WindowMinimize, WindowMaximize, WindowClose } from "mdi-material-ui";

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
  })
);

interface Props {
  className?: string;
  variant?: "macOS" | "windows10";
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
          <IconButton size={"small"} style={{ borderRadius: 0 }}>
            <WindowMinimize />
          </IconButton>
          <IconButton size={"small"} style={{ borderRadius: 0 }}>
            <WindowMaximize />
          </IconButton>
          <IconButton size={"small"} style={{ borderRadius: 0 }}>
            <WindowClose />
          </IconButton>
        </div>
      );
    default:
      return <div className={cx(classes.root, className)} />;
  }
};

export default WindowHeader;
