import React, { useState } from "react";
import {
  createStyles,
  IconButton,
  Theme,
  Tooltip,
  Typography,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import cx from "classnames";
import { grey } from "@material-ui/core/colors";
import { Github, Lightbulb, LightbulbOutline } from "mdi-material-ui";
import logo from "./logo.svg";

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      padding: spacing(0, 2),
      backgroundColor: grey[300],
      display: "flex",
      alignItems: "center",
      borderBottom: `1px solid ${grey[400]}`,
    },
    title: {
      flex: 1,
      marginLeft: spacing(1),
      color: grey[700],
    },
  });

interface Props {
  className?: string;
}

const Header = ({ classes, className }: Props & WithStyles<typeof styles>) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={cx(classes.root, className)}>
      <img alt="Codify logo" src={logo} width={32} height={32} />
      <Typography variant={"h6"} className={classes.title}>
        Codify
      </Typography>
      <Tooltip title={"Toggle light/dark theme"} placement="bottom">
        <IconButton onClick={() => setDarkMode((mode) => !mode)}>
          {darkMode ? <Lightbulb /> : <LightbulbOutline />}
        </IconButton>
      </Tooltip>
      <Tooltip title={"Github repository"} placement="bottom">
        <IconButton
          href={"https://github.com/TeamWertarbyte/codify"}
          target={"_blank"}
        >
          <Github />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default withStyles(styles)(Header);
