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
}

const CaptureStage = React.forwardRef(
  ({ backgroundColor, className }: Props, ref) => {
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
        >
          Edit this cool title
        </Typography>
        <CodeEditor />
      </Paper>
    );
  }
);

export default CaptureStage;
