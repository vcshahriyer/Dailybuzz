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
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Avatar from "@material-ui/core/Avatar";
import Av1 from "../../assets/image/avatar1.jpg";

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
  },
  ButtonText: {
    fontSize: ".8rem",
    fontWeight: "bold",
    marginLeft: ".2rem",
    letterSpacing: ".01rem",
    textTransform: "capitalize"
  },
  shareButton: {
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
  }
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
              <PersonIcon style={{ color: "#3d5afe" }} />
              <Typography variant="button" className={classes.ButtonText}>
                People
              </Typography>
            </IconButton>

            <IconButton>
              <RoomIcon style={{ color: "#ff1744" }} />
              <Typography className={classes.ButtonText} variant="button">
                Check In
              </Typography>
            </IconButton>

            <IconButton>
              <EmojiEmotionsIcon style={{ color: "#ff9800" }} />
              <Typography className={classes.ButtonText} variant="button">
                Mood
              </Typography>
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
}
export default CreatePost;
