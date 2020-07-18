import React from "react";
import {
  Button,
  createStyles,
  Popover,
  Theme,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import cx from "classnames";
import { ChromePicker } from "react-color";

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
    },
    button: {},
  });

interface Props {
  className?: string;
  color: string;
  onChange: (color: string) => void;
  label: string;
}

const ColorPicker = ({
  classes,
  className,
  color,
  onChange,
  label,
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
  const id = open ? `color-picker-${label}-popover` : undefined;

  return (
    <div className={cx(classes.root, className)}>
      <Button
        aria-describedby={id}
        className={classes.button}
        size="small"
        variant="outlined"
        endIcon={
          <div style={{ width: 16, height: 16, backgroundColor: color }} />
        }
        onClick={handleClick}
      >
        {label}:
      </Button>
      <Popover
        id={id}
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
    </div>
  );
};

export default withStyles(styles)(ColorPicker);
