import React from "react";
import {
  createStyles,
  Theme,
  Typography,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import cx from "classnames";
import { grey } from "@material-ui/core/colors";

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      padding: spacing(1, 2),
      backgroundColor: grey[300],
      display: "flex",
      justifyContent: "space-between",
    },
  });

interface Props {
  className?: string;
}

const Header = ({ classes, className }: Props & WithStyles<typeof styles>) => {
  return (
    <div className={cx(classes.root, className)}>
      <Typography variant={"h6"}>Codify</Typography>
    </div>
  );
};

export default withStyles(styles)(Header);
