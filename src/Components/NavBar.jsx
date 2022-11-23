import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

function NavBar(props) {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar position="static">
            <Toolbar
                variant={'dense'}
            >
                <Grid
                    container
                    justify={'flex-end'}
                >
                    {
                        user ?
                            <Button onClick={() => auth.signOut()} variant={'outlined'} style={{color: '#000000'}}>
                                Out
                            </Button>
                            :
                            <NavLink to={LOGIN_ROUTE}>
                                <Button variant={'outlined'} style={{color: '#000000'}}>
                                    Login
                                </Button>
                            </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;