import React from 'react'
import "./Header.css"
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <ArrowBackIcon className="header__icon" fontSize="large"/>
            </IconButton>
            <img 
            className="header__logo"src="https://cdn.discordapp.com/attachments/931696822198599695/932222412760694784/Asset_132x.png" 
            alt="react logo"></img>
            <IconButton>
                <SettingsIcon className="header__icon" fontSize="large"/>
            </IconButton>
            
        </div>
    );
}

export default Header
