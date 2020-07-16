import React from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";
import CodeEditor from "./CodeEditor";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    padding: spacing(8),
  },
}));

const CaptureStage = React.forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <Paper ref={ref} className={classes.root} elevation={10}>
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
