import React, { Fragment } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  CardActions,
  Link
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
import MessageIcon from "@material-ui/icons/Message";
import { lightBlue } from "@material-ui/core/colors";
import Av1 from "../../assets/image/avatar1.jpg";
import CommentInput from "./../common/commentInput";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: lightBlue[600]
  },
  iconbutton: {
    marginLeft: "30px"
  }
}));

const PostCard = props => {
  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              src={Av1}
            ></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <>
              <b>Shrimp Chorizo </b>
              <span>Shared an </span>
              <Link href="#">Album</Link>
            </>
          }
          subheader={<span>September 14, 2016</span>}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="/img/harley-davidson-unsplash.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={classes.iconbutton}
            aria-label="add to favorites"
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton className={classes.iconbutton} aria-label="share">
            <MessageIcon />
          </IconButton>
          <IconButton className={classes.iconbutton} aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <CardActions>
          <CommentInput></CommentInput>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default PostCard;
