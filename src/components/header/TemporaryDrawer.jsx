import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CancelIcon from "@mui/icons-material/Cancel";
import PeopleIcon from "@mui/icons-material/People";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function TemporaryDrawer() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <IconButton
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        {/*this onClick function will close the drawer */}
        <CancelIcon sx={{ color: "#d0312d", fontSize: "40px" }} />
      </IconButton>
      <List>
        <FormControl variant="standard">
          <OutlinedInput
            placeholder="Search for items..."
            sx={{
              height: 40,
              minWidth: 0,
            }}
            id="outlined-adornment-weight"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => console.log("clicked")}>
                  <SearchIcon color="primary" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </List>
      <Divider />
      <List>
        {["All Categories", "Men", "Women", "Kids"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All brands", "Nike", "Addidas"].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CheckroomIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("right", true)}>
          <MenuOpenIcon
            sx={{
              display: {
                xl: "none",
                lg: "none",
                md: "none",
                sm: "block",
                xs: "block",
              },
              color: {
                xl: grey[700],
                lg: grey[700],
                md: grey[700],
                sm: grey[50],
                xs: grey[50],
              },
              "&:hover": {
                color: "secondary.main",
              },
            }}
          />
        </IconButton>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
