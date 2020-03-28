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
}
export default CreatePost;
