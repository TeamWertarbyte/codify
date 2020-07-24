import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import cx from "classnames";
import { Options } from "./interfaces";
import TemplatePreview from "./TemplatePreview";
import { grey } from "@material-ui/core/colors";

const styles = () =>
  createStyles({
    root: {
      display: "flex",
      borderBottom: `1px solid ${grey[400]}`,
      flexWrap: "nowrap",
      overflow: "auto",
    },
  });

const templates: Options[] = [
  {
    backgroundColor: "#FFFFFF",
    fontColor: "#000000",
    showLineNumbers: false,
    lightMode: true,
    os: "windows10",
    language: "javascript",
    fontFamily: "Roboto",
  },

  {
    backgroundColor: "#FFFFFF",
    fontColor: "#000000",
    showLineNumbers: true,
    lightMode: false,
    os: "windows10",
    language: "javascript",
    fontFamily: "Roboto",
  },
  {
    backgroundColor: "#FFFFFF",
    fontColor: "#000000",
    showLineNumbers: false,
    lightMode: false,
    os: "macOS",
    language: "javascript",
    fontFamily: "Roboto",
  },
  {
    backgroundColor: "#FFFFFF",
    fontColor: "#000000",
    showLineNumbers: false,
    lightMode: false,
    os: "linuxMint",
    language: "javascript",
    fontFamily: "Roboto",
  },
  {
    backgroundColor: "#FFFFFF",
    fontColor: "#000000",
    showLineNumbers: false,
    lightMode: false,
    os: "linuxMint",
    language: "javascript",
    fontFamily: "Roboto",
  },
  {
    backgroundColor: "#FFFFFF",
    fontColor: "#000000",
    showLineNumbers: false,
    lightMode: false,
    os: "linuxMint",
    language: "javascript",
    fontFamily: "Roboto",
  },
  {
    backgroundColor: "#FFFFFF",
    fontColor: "#000000",
    showLineNumbers: false,
    lightMode: false,
    os: "linuxMint",
    language: "javascript",
    fontFamily: "Roboto",
  },
  {
    backgroundColor: "#FFFFFF",
    fontColor: "#000000",
    showLineNumbers: false,
    lightMode: false,
    os: "linuxMint",
    language: "javascript",
    fontFamily: "Roboto",
  },
];

interface Props {
  className?: string;
  onChange: (options: Options) => void;
}

const Templates = ({
  classes,
  className,
}: Props & WithStyles<typeof styles>) => {
  return (
    <div className={cx(classes.root, className)}>
      {templates.map((template) => (
        <TemplatePreview options={template} />
      ))}
    </div>
  );
};

export default withStyles(styles)(Templates);
