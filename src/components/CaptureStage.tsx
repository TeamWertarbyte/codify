import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import cx from "classnames";
import CodeEditor from "./CodeEditor";
import { Options } from "../interfaces";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(8),
  },
}));

interface Props {
  className?: string;
  options: Options;
}

const CaptureStage = React.forwardRef(({ className, options }: Props, ref) => {
  const classes = useStyles();

  return (
    <Paper
      ref={ref}
      className={cx(classes.root, className)}
      elevation={10}
      square
      style={{
        backgroundColor: options.backgroundColor,
      }}
    >
      <Typography
        variant={"h3"}
        gutterBottom
        contentEditable
        spellCheck={false}
        suppressContentEditableWarning
        style={{ color: options.fontColor, fontFamily: options.fontFamily }}
      >
        Edit this cool title
      </Typography>
      <CodeEditor
        language={options.language}
        lightMode={options.lightMode}
        os={options.os}
        showLineNumbers={options.showLineNumbers}
      />
    </Paper>
  );
});

export default CaptureStage;
