import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";

const Search = () => {
  return (
    <FormControl
      sx={{ width: { xl: 550, lg: 500, md: 330, sm: 250, xs: 250 } }}
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
            sm: "30px",
            xs: "30px",
          },
          borderBottomLeftRadius: {
            xl: "0px",
            lg: "0px",
            md: "0px",
            sm: "30px",
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
  );
};

export default Search;
