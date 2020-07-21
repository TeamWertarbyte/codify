import React, { ChangeEvent, ReactNode, useEffect, useState } from "react";
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
import { monaco } from "@monaco-editor/react";

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
  onChange: (id: string) => void;
  tooltip: string;
}

const LanguagePicker = ({
  classes,
  id,
  icon,
  language,
  onChange,
  tooltip,
}: Props & WithStyles<typeof styles>) => {
  const [languages, setLanguages] = useState<{ id: string; alias: string }[]>(
    []
  );

  useEffect(() => {
    monaco
      .init()
      .then((monaco) => {
        setLanguages(
          monaco.languages.getLanguages().map(({ id, aliases }) => ({
            id,
            alias: aliases?.length ? aliases[0] : id,
          }))
        );
      })
      .catch((error) =>
        console.error(
          "An error occurred during initialization of Monaco: ",
          error
        )
      );
  }, []);

  const handleChange = (event: ChangeEvent<ReactNode>) => {
    const target = event.target as HTMLSelectElement;
    onChange(target.value);
  };

  return (
    <Picker id={id} icon={icon} tooltip={tooltip}>
      <FormControl className={classes.formControl} variant={"outlined"}>
        <InputLabel id={"language-select-label"}>Language</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          onChange={(event) => handleChange(event)}
          value={language}
          label="Language"
        >
          {languages.map(({ id, alias }, index) => (
            <MenuItem key={id} value={id}>
              {alias}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Picker>
  );
};

export default withStyles(styles)(LanguagePicker);
