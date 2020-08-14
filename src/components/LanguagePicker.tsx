import React, { useEffect, useState } from "react";
import {
  createStyles,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import { monaco } from "@monaco-editor/react";
import Picker from "./Picker";

const styles = ({ palette }: Theme) =>
  createStyles({
    list: {
      overflow: "auto",
      maxHeight: 600,
    },
    listSubheader: {
      backgroundColor: palette.background.paper,
    },
  });

interface Props {
  id: string;
  icon: React.ReactNode;
  language: string;
  onChange: (id: string) => void;
  tooltip: string;
}

const LanguagePicker = ({
  classes,
  id,
  icon,
  language,
  onChange,
  tooltip,
}: Props & WithStyles<typeof styles>) => {
  const [languages, setLanguages] = useState<{ id: string; alias: string }[]>(
    []
  );

  useEffect(() => {
    monaco
      .init()
      .then((monaco) => {
        setLanguages(
          monaco.languages.getLanguages().map(({ id, aliases }) => ({
            id,
            alias: aliases?.length ? aliases[0] : id,
          }))
        );
      })
      .catch((error) =>
        console.error(
          "An error occurred during initialization of Monaco: ",
          error
        )
      );
  }, []);

  return (
    <Picker id={id} icon={icon} tooltip={tooltip}>
      <List
        className={classes.list}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            className={classes.listSubheader}
            component="div"
            id="nested-list-subheader"
          >
            Language
          </ListSubheader>
        }
      >
        {languages.map(({ id, alias }) => (
          <ListItem
            selected={id === language}
            button
            key={id}
            onClick={() => onChange(id)}
          >
            <ListItemText>{alias}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Picker>
  );
};

export default withStyles(styles)(LanguagePicker);
