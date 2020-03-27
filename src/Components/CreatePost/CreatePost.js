import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField, InputAdornment, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Card, CardActions, IconButton, Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import RoomIcon from '@material-ui/icons/Room';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        alignItems: "flex-end"
    },
    
}));

function CreatePost() {
    const classes = useStyles()

    return (
        <>
            <Card>
                <TextField
                    id="input-with-icon-textfield"
                    rows="5"
                    multiline
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="end" className={classes.root}>
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }} />

                <CardActions style={{justifyContent: "space-between"}}>
                    <div>
                    <IconButton>
                        <PersonIcon />
                        <Typography>People</Typography>
                    </IconButton>

                    <IconButton>
                        <RoomIcon />
                        <Typography>Check In</Typography>
                    </IconButton>
                    </div>
                    <Button variant="contained" size="large" color="primary" className={classes.shareButton}>
                        Share
                    </Button>
                </CardActions>

            </Card>
        </>
    )
}
export default CreatePost;
