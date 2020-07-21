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
  language: string;
  languageSet: string[];
  onChange: (language: string) => void;
  tooltip: string;
}

const LanguagePicker = ({
  classes,
  id,
  icon,
  language,
  languageSet,
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
        <InputLabel shrink id={"language-select-label"}>
          Language
        </InputLabel>
        <Select
          inputProps={{
            name: "language",
            id: "language-select-label",
          }}
          onChange={(event) => handleChange(event)}
          value={language}
        >
          {languageSet.map((language, index) => (
            <MenuItem key={index} value={language}>
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Picker>
  );
};

export default withStyles(styles)(LanguagePicker);
