import React from "react";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import cx from "classnames";
import { grey } from "@material-ui/core/colors";
import ColorPicker from "./components/ColorPicker";
import {
  Alphabetical,
  CodeBraces,
  FileDocumentOutline,
  FormatColorFill,
  FormatColorText,
  Text,
} from "mdi-material-ui";
import LanguagePicker from "./components/LanguagePicker";
import ToolbarToggle from "./components/ToolbarToggle";
import { FormatListNumbers } from "mdi-material-ui/light";
import OSPicker from "./components/OSPicker";
import FontPicker from "./components/FontPicker";
import { Options } from "./interfaces";
import TemplatePicker from "./components/TemplatePicker";

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: grey[300],
      padding: spacing(1),
    },
  });

const fontFamilies = ["Segoe UI", "Roboto", "Arial"];

interface Props {
  className?: string;
  onChange: (options: Options) => void;
  options: Options;
}

const Toolbar = ({
  classes,
  className,
  onChange,
  options,
}: Props & WithStyles<typeof styles>) => {
  return (
    <div className={cx(classes.root, className)}>
      <TemplatePicker
        id="template"
        tooltip="Template"
        onChange={onChange}
        icon={<FileDocumentOutline />}
      />
      <ColorPicker
        id="background-color"
        tooltip="Background Color"
        color={options.backgroundColor}
        onChange={(backgroundColor) =>
          onChange({ ...options, backgroundColor })
        }
        icon={<FormatColorFill />}
      />
      <ColorPicker
        id="font-color"
        tooltip="Text Color"
        color={options.fontColor}
        onChange={(fontColor) => onChange({ ...options, fontColor })}
        icon={<FormatColorText />}
      />
      <LanguagePicker
        id="code-language"
        tooltip="Code language"
        language={options.language}
        onChange={(language) => onChange({ ...options, language })}
        icon={<CodeBraces />}
      />
      <ToolbarToggle
        active={options.showLineNumbers}
        tooltip="Line Numbers"
        onChange={(showLineNumbers) =>
          onChange({ ...options, showLineNumbers })
        }
        activeIcon={<FormatListNumbers />}
        inactiveIcon={<Text />}
      />
      <OSPicker
        id={"operating-system"}
        onChange={(os) => onChange({ ...options, os })}
      />
      <FontPicker
        id="font-family"
        tooltip="Font family"
        fontFamily={options.fontFamily}
        fontFamilies={fontFamilies}
        onChange={(fontFamily) => onChange({ ...options, fontFamily })}
        icon={<Alphabetical />}
      />
    </div>
  );
};

export default withStyles(styles)(Toolbar);
