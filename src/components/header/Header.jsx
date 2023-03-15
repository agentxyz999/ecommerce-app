import React from "react";
import TemporaryDrawer from "./TemporaryDrawer";
import {
  Container,
  Grid,
  FormControl,
  InputAdornment,
  Select,
  MenuItem,
  ListSubheader,
  OutlinedInput,
  Badge,
  Typography,
} from "@mui/material";
// icons
import FitbitTwoToneIcon from "@mui/icons-material/FitbitTwoTone";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import IconButton from "@mui/material/IconButton";

const Header = () => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
        padding={1}
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
          <FitbitTwoToneIcon sx={{ fontSize: "60px" }} color="primary" />
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontFamily: "Climate Crisis, sans-serif",
              color: "#444",
              display: {
                xl: "block",
                lg: "block",
                md: "block",
                sm: "block",
                xs: "none",
              },
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
          order={{ xl: 0, lg: 0, md: 0, sm: 3, xs: 3 }}
        >
          {/* Dropdown Menu */}
          <FormControl
            sx={{
              width: 150,
              display: {
                xl: "block",
                lg: "block",
                md: "block",
                sm: "block",
                xs: "none",
              },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Select
              sx={{
                borderTopLeftRadius: "30px",
                borderBottomLeftRadius: "30px",
                backgroundColor: "#d3d3d3",
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
          {/* Search Field */}
          <FormControl
            sx={{ width: { xl: 550, lg: 500, md: 330, sm: 380, xs: 550 } }}
            variant="standard"
          >
            <OutlinedInput
              placeholder="Search for items..."
              sx={{
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",
                borderTopLeftRadius: {
                  xl: "0px",
                  lg: "0px",
                  md: "0px",
                  sm: "0px",
                  xs: "30px",
                },
                borderBottomLeftRadius: {
                  xl: "0px",
                  lg: "0px",
                  md: "0px",
                  sm: "0px",
                  xs: "30px",
                },
                height: 40,
                minWidth: 0,
              }}
              id="outlined-adornment-weight"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon
                      color="primary"
                      onClick={() => console.log("clicked")}
                    />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
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
              <FavoriteBorderOutlinedIcon
                color="action"
                sx={{
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlinedIcon
                color="action"
                sx={{
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              />
            </Badge>
          </IconButton>
          <IconButton>
            <Person2OutlinedIcon
              color="action"
              sx={{
                "&:hover": {
                  color: "primary.main",
                },
              }}
            />
          </IconButton>
          <TemporaryDrawer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
