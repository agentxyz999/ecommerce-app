import React, { useState } from "react";
import Search from "../reusables/Search";
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

export default function AppBarDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <IconButton onClick={() => setIsDrawerOpen(false)}>
        {/*this onClick function will close the drawer */}
        <CancelIcon sx={{ color: "#d0312d", fontSize: "40px" }} />
      </IconButton>
      <List>
        <Search />
      </List>
      <Divider />
      {/* TODO: Replace the <List>s with Navigation */}
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
        <IconButton
          edge="end"
          color="inherit"
          aria-label="navigation-toggle"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuOpenIcon
            sx={{
              display: {
                xl: "none",
                lg: "none",
                md: "none",
                sm: "block",
                xs: "block",
              },
              "&:hover": {
                color: "secondary.main",
              },
            }}
          />
        </IconButton>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => {
            setIsDrawerOpen(false);
          }}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
