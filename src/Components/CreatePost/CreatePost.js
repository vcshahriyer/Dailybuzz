<<<<<<< HEAD
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { Card, CardActions, CardMedia, IconButton, Button, TextareaAutosize } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import RoomIcon from '@material-ui/icons/Room';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Avatar from '@material-ui/core/Avatar';
import Av1 from '../../assets/image/avatar1.jpg'


const useStyles = makeStyles(theme => ({
    root: {
        alignItems: "flex-end"
    },
    TextareaAutosize: {
        width: "100%",
        padding: "1rem 1rem 1rem 4rem",
        outline: "none",
        border: "none",
        borderBottom: "1px solid #ccc"
    },
    Avater: {
        position: "absolute",
        margin: ".5rem"
    }
    
=======
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import {
  Card,
  CardActions,
  CardMedia,
  IconButton,
  Button,
  TextareaAutosize
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import RoomIcon from "@material-ui/icons/Room";
import Avatar from "@material-ui/core/Avatar";
import Av1 from "../../assets/image/avatar1.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: "5%"
  },
  TextareaAutosize: {
    width: "100%",
    paddingLeft: "60px",
    paddingTop: "10px",
    outline: "none",
    border: "none",
    borderBottom: "1px solid #ccc"
  },
  Avater: {
    position: "absolute",
    margin: "5px"
  }
>>>>>>> 822a1f8d25e93e02b0ce072a48afbf1818977cf0
}));

function CreatePost() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardMedia>
          <Avatar className={classes.Avater} alt="Remy Shar" src={Av1} />
        </CardMedia>
        <TextareaAutosize
          className={classes.TextareaAutosize}
          aria-label="empty textarea"
          placeholder="What's on your mind?"
          rowsMin={6}
        />

        <CardActions style={{ justifyContent: "space-between" }}>
          <div>
            <IconButton>
              <PersonIcon />
              <Typography>People</Typography>
            </IconButton>

<<<<<<< HEAD
                    <IconButton>
                        <RoomIcon />
                        <Typography>Check In</Typography>
                    </IconButton>

                    <IconButton>
                        <EmojiEmotionsIcon />
                        <Typography>Mood</Typography>
                    </IconButton>
                    </div>
                    <Button variant="contained" size="medium" color="primary" className={classes.shareButton}>
                        Share
                    </Button>
                </CardActions>

            </Card>
        </>
    )
=======
            <IconButton>
              <RoomIcon />
              <Typography>Check In</Typography>
            </IconButton>
          </div>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.shareButton}
          >
            Share
          </Button>
        </CardActions>
      </Card>
    </>
  );
>>>>>>> 822a1f8d25e93e02b0ce072a48afbf1818977cf0
}
export default CreatePost;
