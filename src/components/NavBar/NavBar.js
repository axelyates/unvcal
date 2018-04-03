import React, { Component } from 'react';

// Material UI
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

// Components
import './NavBar.css';


class NavBar extends Component {
    render() {
        return (
            <div>
            <AppBar position="static">
            <Toolbar>
                <IconButton 
                    className="" 
                    color="inherit" 
                    aria-label="Menu">
                <MenuIcon />
                </IconButton>
                <Typography 
                    variant="title" 
                    color="inherit" 
                    className="">
                        UNT Events beta
                </Typography>
            </Toolbar>
            </AppBar>
          </div>
        );
    }

}

export default NavBar;