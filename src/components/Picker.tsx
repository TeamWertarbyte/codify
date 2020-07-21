import React from "react";
import {
  createStyles,
  IconButton,
  Popover,
  Theme,
  Tooltip,
  WithStyles,
  withStyles,
} from "@material-ui/core";

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {},
    button: {},
  });

interface Props {
  children: JSX.Element;
  id: string;
  tooltip: string;
  icon: React.ReactNode;
}

const Picker = ({
  children,
  classes,
  id,
  icon,
  tooltip,
}: Props & WithStyles<typeof styles>) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // @ts-ignore
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? `picker-${id}-popover` : undefined;

  return (
    <>
      <Tooltip title={tooltip} placement="right">
        <IconButton
          aria-describedby={popoverId}
          className={classes.button}
          onClick={handleClick}
          color={open ? "primary" : "default"}
        >
          {icon}
        </IconButton>
      </Tooltip>
      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        {children}
      </Popover>
    </>
  );
};

export default withStyles(styles)(Picker);
