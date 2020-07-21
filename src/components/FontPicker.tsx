import React, { ChangeEvent, ReactNode } from "react";
import {
  createStyles,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import Picker from "./Picker";

const styles = ({ spacing }: Theme) =>
  createStyles({
    formControl: {
      margin: spacing(1),
      minWidth: 120,
    },
  });

interface Props {
  id: string;
  icon: React.ReactNode;
  fontFamily: string;
  fontFamilies: string[];
  onChange: (id: string) => void;
  tooltip: string;
}

const FontPicker = ({
  classes,
  id,
  icon,
  fontFamily,
  fontFamilies,
  onChange,
  tooltip,
}: Props & WithStyles<typeof styles>) => {
  const handleChange = (event: ChangeEvent<ReactNode>) => {
    const target = event.target as HTMLSelectElement;
    onChange(target.value);
  };

  return (
    <Picker id={id} icon={icon} tooltip={tooltip}>
      <FormControl className={classes.formControl} variant={"outlined"}>
        <InputLabel id={"font-select-label"}>Font Family</InputLabel>
        <Select
          labelId="font-select-label"
          id="font-select"
          onChange={(event) => handleChange(event)}
          value={fontFamily}
          label="Font Family"
        >
          {fontFamilies.map((font, index) => (
            <MenuItem key={`${font}-${index}`} value={font}>
              {font}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Picker>
  );
};

export default withStyles(styles)(FontPicker);
