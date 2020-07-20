import React, { ChangeEvent, useState, ReactNode } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const languages = ["javascript", "java", "python"];

const LanguagePicker = () => {
  const [language, setLanguage] = useState("javascript");

  const handleChange = (event: ChangeEvent<ReactNode>) => {
    const target = event.target as HTMLSelectElement;
    setLanguage(target.value);
  };

  return (
    <FormControl variant={"outlined"}>
      <InputLabel shrink id={"language-select-label"}>
        Language
      </InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        onChange={(event) => handleChange(event)}
        value={language}
      >
        {languages.map((language, index) => (
          <MenuItem key={index} value={language}>
            {language}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguagePicker;
