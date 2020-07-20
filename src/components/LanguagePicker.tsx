import React, { ChangeEvent, ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles(({ spacing }: Theme) => ({
  formControl: {
    margin: spacing(1),
    minWidth: 120,
  },
}));

interface Props {
  language: string;
  languageSet: string[];
  onChange: (language: string) => void;
}

const LanguagePicker = ({ language, languageSet, onChange }: Props) => {
  const classes = useStyles();

  const handleChange = (event: ChangeEvent<ReactNode>) => {
    const target = event.target as HTMLSelectElement;
    onChange(target.value);
  };

  return (
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
  );
};

export default LanguagePicker;
