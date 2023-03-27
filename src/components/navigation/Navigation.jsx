import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Container, Typography, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Toolbar from "@mui/material/Toolbar";
import { navs } from "../reusables/NavMenu"; //this is an array of navigation

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 20,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Item = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  padding: theme.spacing(1),
  justifyContent: "center",
  alignItems: "center",
}));

const Navigation = () => {
  const [menuIndex, setMenuIndex] = useState(-1); // to properly display the corresponding MenuItem
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenMenu = (e, index) => {
    setMenuIndex(index);
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMenuIndex(-1);
  };

  return (
    <StyledToolbar>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Item>
          <Typography>Browse Categories</Typography>
        </Item>
        <Item>
          {navs[1].midnav?.map((items, index) => {
            return (
              <React.Fragment key={index}>
                <Typography
                  // clickable only if it has submenu based on navs array from reusables
                  onClick={
                    items.submenu.length > 0
                      ? (e) => handleOpenMenu(e, index)
                      : undefined
                  }
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  {items.title}
                  {items.submenu.length > 0 ? <KeyboardArrowDownIcon /> : ""}
                </Typography>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={menuIndex !== -1}
                  onClose={handleCloseMenu}
                >
                  {/* to properly display the corresponding MenuItem */}
                  {menuIndex !== -1 &&
                    navs[1].midnav[menuIndex].submenu?.map((menuItem, idx) => {
                      return <MenuItem key={idx}>{menuItem.title}</MenuItem>;
                    })}
                </Menu>
              </React.Fragment>
            );
          })}
        </Item>
        <Item>
          <Typography>Hotline 1900-888</Typography>
        </Item>
      </Container>
    </StyledToolbar>
  );
};

export default Navigation;
