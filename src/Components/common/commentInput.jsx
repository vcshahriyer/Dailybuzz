import React from "react";
import { IconButton, InputBase, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Av1 from "../../assets/image/avatar1.jpg";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

const CommentInput = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Avatar className={classes.Avater} alt="Remy Shar" src={Av1} />
      <InputBase className={classes.input} placeholder="Place a comment." />
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        style={{ display: "none" }}
        type="file"
      />
      <label htmlFor="icon-button-file">
        <IconButton
          style={{ color: theme.palette.primary.main }}
          aria-label="add picture"
          component="span"
        >
          <AddAPhotoIcon />
        </IconButton>
      </label>
      <IconButton
        style={{ color: theme.palette.warning.light }}
        className={classes.iconButton}
        aria-label="emoji"
      >
        <EmojiEmotionsIcon />
      </IconButton>
    </>
  );
};

export default CommentInput;
