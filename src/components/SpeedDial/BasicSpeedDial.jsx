import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import { ShoppingCart, ShoppingCartCheckout } from "@mui/icons-material";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy", desc: "Hello" },
  { icon: <FileCopyIcon />, name: "Save", desc: "Hello" },
  { icon: <FileCopyIcon />, name: "Print", desc: "Hello" },
  { icon: <FileCopyIcon />, name: "Share", desc: "Hello" },
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<ShoppingCart />}
      >
        {/* {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            about={action.desc}
          />
        ))} */}
      </SpeedDial>
    </Box>
  );
}
