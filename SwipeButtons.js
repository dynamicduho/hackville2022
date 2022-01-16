import CloseIcon from "@mui/icons-material/Close"
import FavoriteIcon from "@mui/icons-material/Favorite"
import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from "@mui/material"


import React from 'react'
import "./SwipeButtons.css"

function SwipeButtons() {
    return (
        <div className="swipeButtons">
        <IconButton className="swipeButtons_CloseIcon">
         <CloseIcon fontSize="large"/>
         </IconButton >
         <IconButton className="swipeButtons_InfoIcon">
         <InfoIcon fontSize="large"/>
         </IconButton>
         <IconButton className="swipeButtons_FavoriteIcon">
         <FavoriteIcon fontSize="large"/>
         </IconButton>
         
        </div>
    );
};

export default SwipeButtons
