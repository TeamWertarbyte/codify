import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import CodeEditor from "./CodeEditor";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(8),
  },
}));

interface Props {
  backgroundColor: string;
}

const CaptureStage = React.forwardRef(({ backgroundColor }: Props, ref) => {
  const classes = useStyles();

  return (
    <Paper
      ref={ref}
      className={classes.root}
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
});

export default CaptureStage;
