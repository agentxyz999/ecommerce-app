import React from "react";
import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 20,
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
  const navItems = ["Home", "About", "Shop", "Mega Menu", "Blog", "Contact"];
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
          {navItems.map((items) => {
            return <Typography>{items}</Typography>;
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
