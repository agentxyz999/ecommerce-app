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
import { grey } from "@mui/material/colors";

const Header = () => {
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
                  <IconButton onClick={() => console.log("clicked")}>
                    <SearchIcon color="primary" />
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
                sx={{
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
                }}
              />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlinedIcon
                sx={{
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
                }}
              />
            </Badge>
          </IconButton>
          <IconButton>
            <Person2OutlinedIcon
              sx={{
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
