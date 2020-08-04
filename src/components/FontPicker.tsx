import React from "react";
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
  fontFamily: string;
  fontFamilies: string[];
  onChange: (id: string) => void;
  tooltip: string;
}

const FontPicker = ({
  classes,
  id,
  icon,
  fontFamily,
  fontFamilies,
  onChange,
  tooltip,
}: Props & WithStyles<typeof styles>) => {
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
            Font Family
          </ListSubheader>
        }
      >
        {fontFamilies.map((font) => (
          <ListItem
            selected={font === fontFamily}
            button
            key={font}
            onClick={() => onChange(font)}
          >
            <ListItemText>{font}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Picker>
  );
};

export default withStyles(styles)(FontPicker);
