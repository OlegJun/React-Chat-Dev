import React from 'react';
import classes from "./Message.module.css";
import {Avatar, Grid} from "@mui/material";

function Message({message, userID}) {
    return (
        <div
            className={
                message.uid === userID
                    ? classes.message_my
                    : classes.another_persons_message
            }
            key={message.text}
        >
            <Grid
                container
                alignItems={'center'}
            >
                <Avatar src={message.photoURL}/>
                <div
                    className={classes.message_title}
                >
                    {message.displayName}
                </div>
            </Grid>
            <div
                className={classes.message_text}
            >
                {message.text}
            </div>
        </div>
    );
}

export default Message;