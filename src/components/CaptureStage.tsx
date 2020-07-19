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
}

const CaptureStage = React.forwardRef(
  ({ backgroundColor, className, fontColor }: Props, ref) => {
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
        <CodeEditor />
      </Paper>
    );
  }
);

export default CaptureStage;
