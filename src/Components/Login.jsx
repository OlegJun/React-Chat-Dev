import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import {Context} from "../index";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

function Login(props) {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            const {user} = await auth.signInWithPopup(provider);
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid
                    style={{width: '400px', background: 'lightgray'}}
                    container
                    alignItems={'center'}
                    flexDirection={'column'}
                >
                    <Box p={5}>
                        <Button
                            onClick={login}
                            variant={'outlined'}
                        >
                            Login with Google
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;