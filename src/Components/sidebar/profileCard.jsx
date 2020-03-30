import React from "react";
import {
  Card,
  Avatar,
  IconButton,
  CardActions,
  Typography
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MailIcon from "@material-ui/icons/Mail";
import PeopleIcon from "@material-ui/icons/People";
import Av1 from "../../assets/image/avatar1.jpg";
import ActiveFriendList from "../friends/activeFriendList";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    position: "relative"
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
    marginLeft: "10px"
  },
  label: {
    fontSize: "14px",
    paddingLeft: "5px"
  },
  tools: {
    position: "absolute",
    right: "0"
  }
}));

const ProfileCard = props => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Card className={classes.root}>
      <div className={classes.tools}>
        <IconButton aria-label="settings">
          <EditIcon />
        </IconButton>
      </div>

      <Avatar aria-label="recipe" className={classes.avatar} src={Av1}></Avatar>
      <Typography variant="h5" align="center" component="h6">
        My Name
      </Typography>
      <Typography variant="subtitle2" align="center">
        Software Engineer
      </Typography>
      <Typography
        style={{ marginLeft: "5px" }}
        variant="h5"
        className={theme.typography.h5}
      >
        Recent Friend
      </Typography>
      <ActiveFriendList></ActiveFriendList>
      <CardActions disableSpacing>
        <IconButton className={classes.iconbutton} aria-label="address">
          <FavoriteIcon />
          <span className={classes.label}>20 </span>
        </IconButton>
        <IconButton className={classes.iconbutton} aria-label="address">
          <MailIcon />
          <span className={classes.label}>10 </span>
        </IconButton>
        <IconButton className={classes.iconbutton} aria-label="address">
          <PeopleIcon />
          <span className={classes.label}>200 </span>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
