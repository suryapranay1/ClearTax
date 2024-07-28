import React from "react";
import "./header.css";
import HoverModal from "./HoverModalResources"; // Assuming HoverModal is in the same directory
import HoverModalP from "./HoverModalProducts";
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';


const Header = () => {
  return (
    <div className="header">
      <div className="companylogo">
        <img
          src="https://assets1.cleartax-cdn.com/finfo/wg-utils/retool/d9f36ac3-77a9-40c6-94fc-20c2e3855457.svg"
          alt="cleartax"
          height="29px"
        />
      </div>
      <ul className="header-content">
        <li>
          <HoverModalP
            text="Products"
          />
        </li>
        <li>
          <HoverModal
            text="Resources"
          />
        </li>
        <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
      >
        <li style={{marginTop:'-1em'}}>Company</li>
      </MenuButton>
      
      <Menu>
        <MenuItem>Support</MenuItem>
        <MenuItem>About us</MenuItem>
        <MenuItem>Careers</MenuItem>
        <MenuItem>Media & Press</MenuItem>
        <MenuItem>Trust & Safety</MenuItem>
      </Menu>
    </Dropdown>
       
      </ul>
      <div className="header-button">
        <button className="button-content">File now</button>
      </div>
    </div>
  );
};

export default Header;
