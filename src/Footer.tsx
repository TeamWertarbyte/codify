import React from "react";
import {
  createStyles,
  Divider,
  Theme,
  Typography,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import cx from "classnames";
import { grey } from "@material-ui/core/colors";
import { version } from "../package.json";

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      padding: spacing(1, 2),
      backgroundColor: grey[50],
      display: "flex",
      alignItems: "center",
      borderTop: `1px solid ${grey[400]}`,
    },
    divider: {
      margin: spacing(0, 1),
      backgroundColor: grey[400],
    },
    version: {
      flex: 1,
    },
  });

interface Props {
  className?: string;
}

const Footer = ({ classes, className }: Props & WithStyles<typeof styles>) => {
  return (
    <div className={cx(classes.root, className)}>
      <Typography variant={"caption"} className={classes.version}>
        Version {version}
      </Typography>
      <Typography variant={"caption"}>
        Copyright © {new Date().getFullYear()}{" "}
        <a
          href={"https://wertarbyte.com/"}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Wertarbyte GmbH
        </a>
      </Typography>
      <Divider className={classes.divider} orientation={"vertical"} />
      <Typography variant={"caption"}>
        <a
          href={"https://wertarbyte.com/impressum"}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Imprint
        </a>
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Footer);
