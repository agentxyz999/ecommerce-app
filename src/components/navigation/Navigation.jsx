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
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
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
                  onClick={handleOpenMenu}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  {items.title}
                  <KeyboardArrowDownIcon />
                </Typography>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                >
                  {items.submenu.map((menuItem, idx) => {
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
