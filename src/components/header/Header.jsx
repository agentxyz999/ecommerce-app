import React from "react";
import AppBarDrawer from "./AppBarDrawer";
import Search from "../reusables/Search";
import {
  Container,
  Grid,
  FormControl,
  Select,
  MenuItem,
  ListSubheader,
  Badge,
  Typography,
} from "@mui/material";
// icons
import FitbitTwoToneIcon from "@mui/icons-material/FitbitTwoTone";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import IconButton from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";

const Header = () => {
  const iconStyle = {
    "&:hover": {
      color: {
        xl: "primary.main",
        lg: "primary.main",
        md: "primary.main",
        sm: "secondary.main",
        xs: "secondary.main",
      },
    },
    color: {
      xl: grey[700],
      lg: grey[700],
      md: grey[700],
      sm: grey[50],
      xs: grey[50],
    },
  };
  const displayProp = {
    xl: "block",
    lg: "block",
    md: "block",
    sm: "block",
    xs: "none",
  };
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
      >
        <Grid
          container
          item
          xl={2}
          lg={2}
          md={3}
          sm={6}
          xs={2}
          direction="row"
          alignItems="center"
          gap={1}
        >
          <FitbitTwoToneIcon
            sx={{
              fontSize: "60px",
              color: {
                xl: "primary.main",
                lg: "primary.main",
                md: "primary.main",
                sm: "",
                xs: "",
              },
            }}
          />
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontFamily: "Climate Crisis, sans-serif",
              color: {
                xl: grey[800],
                lg: grey[800],
                md: grey[800],
                sm: "",
                xs: "",
              },
              display: { ...displayProp },
            }}
          >
            ShopX
          </Typography>
        </Grid>
        {/* Search and dropdown */}
        <Grid
          container
          item
          xl={8}
          lg={8}
          md={7}
          sm={12}
          xs={12}
          alignItems="center"
          justifyContent="center"
          sx={{
            display: {
              xl: "flex",
              lg: "flex",
              md: "flex",
              sm: "none",
              xs: "none",
            },
          }}
        >
          {/* Dropdown Menu */}
          <FormControl
            sx={{
              width: 150,
              display: { ...displayProp },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Select
              sx={{
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "30px",
                backgroundColor: grey[200],
                height: 40,
              }}
              value=""
              displayEmpty
            >
              <MenuItem value="">
                <em>All Categories</em>
              </MenuItem>
              <ListSubheader>Category 1</ListSubheader>
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <ListSubheader>Category 2</ListSubheader>
              <MenuItem value={3}>Option 3</MenuItem>
              <MenuItem value={4}>Option 4</MenuItem>
            </Select>
          </FormControl>
          {/* Search Field from reusables*/}
          <Search />
        </Grid>
        {/* Icons(wishlist, cart, account icon) */}
        <Grid
          container
          item
          xl={2}
          lg={2}
          md={2}
          sm={6}
          xs={10}
          gap={{ xl: 2, lg: 2, md: 0, sm: 2, xs: 0 }}
          alignItems="center"
          justifyContent="flex-end"
        >
          <IconButton>
            <Badge badgeContent={10} color="secondary">
              <FavoriteBorderOutlinedIcon sx={{ ...iconStyle }} />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlinedIcon sx={{ ...iconStyle }} />
            </Badge>
          </IconButton>
          <IconButton>
            <Person2OutlinedIcon sx={{ ...iconStyle }} />
          </IconButton>
          {/* AppBar Drawer shown only on Tablets and Small devices */}
          <AppBarDrawer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
