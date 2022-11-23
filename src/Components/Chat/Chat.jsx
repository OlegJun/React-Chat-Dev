import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@mui/material";
import classes from "./Chat.module.css";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "../Loader/Loader";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import Message from "../Message/Message";

function Chat(props) {
    const {auth, fireStore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        fireStore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async ()=> {
        fireStore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if(loading) {
        return <Loader/>
    }

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                justifyContent={'center'}
            >
                <div className={classes.chat}>
                    {messages.map(message =>
                        <Message
                            message={message}
                            userID={user.uid}
                            key={message.text}
                        />
                    )}
                </div>
                <Grid
                    container
                    direction={'column'}
                    alignItems={'flex-end'}
                    style={{width: '80%'}}
                >
                    <TextField
                        variant={'outlined'}
                        fullWidth
                        style={{marginTop: '10px'}}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button
                        variant={'outlined'}
                        onClick={sendMessage}
                    >
                        Send
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Chat;