import React from "react";
import { Card, Avatar, IconButton, CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import Av1 from "../../assets/image/avatar1.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    height: "80px",
    width: "80px",
    margin: "7px auto"
  },
  iconbutton: {
    marginLeft: "30px"
  },
  tools: {
    float: "right"
  }
}));

const ProfileCard = props => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.tools}>
        <IconButton aria-label="settings">
          <EditIcon />
        </IconButton>
      </div>

      <Avatar aria-label="recipe" className={classes.avatar} src={Av1}></Avatar>
      <CardActions disableSpacing>
        <IconButton
          className={classes.iconbutton}
          aria-label="add to favorites"
        >
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
