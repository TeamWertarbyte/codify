import React from "react";
import { createStyles, Divider, IconButton, Theme } from "@material-ui/core";
import cx from "classnames";
import { green, grey, red, yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import {
  MenuSwap,
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
      backgroundImage: `linear-gradient(to right, #444444, #303030)`,
      justifyContent: "flex-end",
      padding: spacing(0.5),
    },
    mintDivider: {
      backgroundColor: "#141414",
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
    space: {
      display: "flex",
      justifyContent: "space-between",
      width: spacing(10),
    },
  })
);

interface Props {
  className?: string;
  variant?: "macOS" | "windows10" | "linuxMint";
}

const WindowHeader = ({ className, variant }: Props) => {
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
        <>
          <div className={cx(classes.root, classes.linuxMint, className)}>
            <div className={classes.space}>
              <IconButton size={"small"}>
                <WindowMinimize
                  fontSize={"small"}
                  style={{ color: "#878787", fontSize: 14 }}
                />
              </IconButton>
              <IconButton size={"small"}>
                <MenuSwap
                  fontSize={"small"}
                  style={{
                    color: "#878787",
                    fontSize: 18,
                    transform: `rotate(45deg)`,
                  }}
                />
              </IconButton>
              <IconButton size={"small"}>
                <CloseCircle style={{ color: "#78b375", fontSize: 14 }} />
              </IconButton>
            </div>
          </div>
          <Divider className={classes.mintDivider} />
        </>
      );
    default:
      return <div className={cx(classes.root, className)} />;
  }
};

export default WindowHeader;
