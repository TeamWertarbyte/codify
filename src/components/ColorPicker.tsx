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
import { ChromePicker } from "react-color";

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {},
    button: {},
  });

interface Props {
  color: string;
  onChange: (color: string) => void;
  id: string;
  tooltip: string;
  icon: React.ReactNode;
}

const ColorPicker = ({
  classes,
  color,
  onChange,
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
  const popoverId = open ? `color-picker-${id}-popover` : undefined;

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
        <ChromePicker color={color} onChange={(e) => onChange(e.hex)} />
      </Popover>
    </>
  );
};

export default withStyles(styles)(ColorPicker);
