// Use this menu(dropdowns) in Navigation and TemporaryDrawer
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const NavMenu = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const navs = [
    { Categories: ["Category 1", "Category 2"] },
    { Midnav: ["Home", "About", "Shop", "Mega Menu", "Blog", "Contact"] },
    { Hotline: ["Category 1", "Category 2"] },
  ];
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="large">
        <Select
          id="demo-select-large" //change this later
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default NavMenu;
