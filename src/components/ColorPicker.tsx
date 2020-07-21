import React from "react";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import { ChromePicker } from "react-color";
import Picker from "./Picker";

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
  return (
    <Picker id={id} classes={classes} icon={icon} tooltip={tooltip}>
      <ChromePicker color={color} onChange={(e) => onChange(e.hex)} />
    </Picker>
  );
};

export default withStyles(styles)(ColorPicker);
