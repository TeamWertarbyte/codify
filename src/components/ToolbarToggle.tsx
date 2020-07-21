import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";

interface Props {
  active: boolean;
  onChange: (active: boolean) => void;
  tooltip: string;
  activeIcon: React.ReactNode;
  inactiveIcon: React.ReactNode;
}

const ToolbarToggle = ({
  active,
  activeIcon,
  inactiveIcon,
  onChange,
  tooltip,
}: Props) => {
  return (
    <Tooltip title={tooltip} placement="right">
      <IconButton onClick={() => onChange(!active)}>
        {active ? activeIcon : inactiveIcon}
      </IconButton>
    </Tooltip>
  );
};

export default ToolbarToggle;
