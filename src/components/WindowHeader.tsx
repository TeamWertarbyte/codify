import React from "react";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import cx from "classnames";
import { green, grey, red, yellow } from "@material-ui/core/colors";

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: "flex",
      backgroundColor: grey[300],
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
  });

interface Props {
  className?: string;
}

const WindowHeader = ({
  classes,
  className,
}: Props & WithStyles<typeof styles>) => {
  return (
    <div className={cx(classes.root, className)}>
      <div className={cx(classes.dot, classes.red)} />
      <div className={cx(classes.dot, classes.yellow)} />
      <div className={cx(classes.dot, classes.green)} />
    </div>
  );
};

export default withStyles(styles)(WindowHeader);
