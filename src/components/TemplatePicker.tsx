import React from "react";
import { createStyles, Paper, WithStyles, withStyles } from "@material-ui/core";
import Picker from "./Picker";
import { Options } from "../interfaces";
import TemplatePreview from "./TemplatePreview";

const styles = () =>
  createStyles({
    root: {},
    button: {},
    list: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      overflow: "auto",
    },
  });

const templates: Options[] = [
  {
    backgroundColor: "#FFB900",
    fontColor: "#000000",
    showLineNumbers: false,
    lightMode: true,
    os: "windows10",
    language: "javascript",
    fontFamily: "Roboto",
  },
  {
    backgroundColor: "#78C5EF",
    fontColor: "#000000",
    showLineNumbers: false,
    lightMode: true,
    os: "macOS",
    language: "javascript",
    fontFamily: "Roboto",
  },
  {
    backgroundColor: "#969696",
    fontColor: "#000000",
    showLineNumbers: false,
    lightMode: true,
    os: "linuxMint",
    language: "javascript",
    fontFamily: "Roboto",
  },
];

interface Props {
  onChange: (option: Options) => void;
  id: string;
  tooltip: string;
  icon: React.ReactNode;
}

const TemplatePicker = ({
  classes,
  onChange,
  id,
  icon,
  tooltip,
}: Props & WithStyles<typeof styles>) => {
  return (
    <Picker id={id} classes={classes} icon={icon} tooltip={tooltip}>
      <Paper className={classes.list}>
        {templates.map((template) => (
          <TemplatePreview
            onClick={() => onChange(template)}
            options={template}
          />
        ))}
      </Paper>
    </Picker>
  );
};

export default withStyles(styles)(TemplatePicker);
