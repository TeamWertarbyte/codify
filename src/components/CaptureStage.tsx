import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import cx from "classnames";
import CodeEditor from "./CodeEditor";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(8),
  },
}));

interface Props {
  className?: string;
  backgroundColor: string;
  fontColor: string;
  language: string;
  lightMode: boolean;
  os: "macOS" | "windows10" | "linuxMint";
  showLineNumbers: boolean;
}

const CaptureStage = React.forwardRef(
  (
    {
      backgroundColor,
      className,
      fontColor,
      language,
      lightMode,
      os,
      showLineNumbers,
    }: Props,
    ref
  ) => {
    const classes = useStyles();

    return (
      <Paper
        ref={ref}
        className={cx(classes.root, className)}
        elevation={10}
        square
        style={{
          backgroundColor,
        }}
      >
        <Typography
          variant={"h3"}
          gutterBottom
          contentEditable
          spellCheck={false}
          suppressContentEditableWarning
          style={{ color: fontColor }}
        >
          Edit this cool title
        </Typography>
        <CodeEditor
          language={language}
          lightMode={lightMode}
          os={os}
          showLineNumbers={showLineNumbers}
        />
      </Paper>
    );
  }
);

export default CaptureStage;
