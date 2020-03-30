import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import Av1 from "../../assets/image/avatar1.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: "10px"
  },
  list: {
    listStyleType: "none",
    display: "flex",
    padding: "5px 0"
  },
  info: {
    paddingLeft: "10px"
  }
}));
const ActiveFriendList = () => {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      <li className={classes.list}>
        <div className="activeIndicator">
          <Avatar aria-label="recipe" src={Av1}></Avatar>
          <span className="indicator"></span>
        </div>
        <div className={classes.info}>
          <Typography variant="h6" component="p">
            Jeff Weiner
          </Typography>
          <Typography variant="caption" component="p">
            Software Engineer
          </Typography>
        </div>
      </li>
      <li className={classes.list}>
        <Avatar aria-label="recipe" src={Av1}></Avatar>
        <div className={classes.info}>
          <Typography variant="h6" component="p">
            Jeff Weiner
          </Typography>
          <Typography variant="caption" component="p">
            Software Engineer
          </Typography>
        </div>
      </li>
      <li className={classes.list}>
        <Avatar aria-label="recipe" src={Av1}></Avatar>
        <div className={classes.info}>
          <Typography variant="h6" component="p">
            Jeff Weiner
          </Typography>
          <Typography variant="caption" component="p">
            Software Engineer
          </Typography>
        </div>
      </li>
      <li className={classes.list}>
        <div className="activeIndicator">
          <Avatar aria-label="recipe" src={Av1}></Avatar>
          <span className="indicator"></span>
        </div>
        <div className={classes.info}>
          <Typography variant="h6" component="p">
            Jeff Weiner
          </Typography>
          <Typography variant="caption" component="p">
            Software Engineer
          </Typography>
        </div>
      </li>
    </ul>
  );
};

export default ActiveFriendList;
