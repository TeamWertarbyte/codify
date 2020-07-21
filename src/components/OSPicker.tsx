import React from "react";
import {
  createStyles,
  IconButton,
  Paper,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import {
  Apple,
  LinuxMint,
  MicrosoftWindows,
  MonitorClean,
} from "mdi-material-ui";
import Picker from "./Picker";

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {},
  });

interface Props {
  id: string;
  onChange: (os: "macOS" | "windows10" | "linuxMint") => void;
}

const OSPicker = ({ id, onChange }: Props & WithStyles<typeof styles>) => {
  return (
    <Picker id={id} icon={<MonitorClean />} tooltip="Operating system">
      <Paper>
        <IconButton onClick={() => onChange("windows10")}>
          <MicrosoftWindows />
        </IconButton>
        <IconButton onClick={() => onChange("linuxMint")}>
          <LinuxMint />
        </IconButton>
        <IconButton onClick={() => onChange("macOS")}>
          <Apple />
        </IconButton>
      </Paper>
    </Picker>
  );
};

export default withStyles(styles)(OSPicker);
