import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import '../../css/loader.css'

function Loader(props) {
    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid
                    container
                    alignItems={'center'}
                    flexDirection={'column'}
                >
                    <div className="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Loader;