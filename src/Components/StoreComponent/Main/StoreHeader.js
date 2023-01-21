import React from "react";
import "./StoreHeader.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SettingsIcon from '@mui/icons-material/Settings';
import WalletIcon from '@mui/icons-material/Wallet';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";


export default function StoreHeader() {
  return (
    <div id="storeHeaderMain">
      <div id="storeheaderleft">
        <h1>Store</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/auth">Auth</Link>
        </div>
      </div>
      <div id="storeheaderright">
        <SettingsIcon />
        <WalletIcon />
        <div id="store-profile">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
            <span>Sakura</span>
            <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
}
