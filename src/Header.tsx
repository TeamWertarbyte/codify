import React from "react";
import {
  createStyles,
  IconButton,
  Theme,
  Typography,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import cx from "classnames";
import { grey } from "@material-ui/core/colors";
import { Github } from "mdi-material-ui";

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      padding: spacing(0, 2),
      backgroundColor: grey[300],
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: `1px solid ${grey[400]}`,
    },
  });

interface Props {
  className?: string;
}

const Header = ({ classes, className }: Props & WithStyles<typeof styles>) => {
  return (
    <div className={cx(classes.root, className)}>
      <Typography variant={"h6"}>Codify</Typography>
      <IconButton
        href={"https://github.com/TeamWertarbyte/codify"}
        target={"_blank"}
      >
        <Github />
      </IconButton>
    </div>
  );
};

export default withStyles(styles)(Header);
