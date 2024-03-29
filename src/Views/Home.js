import React from "react";

// mui
import { makeStyles } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid, Container, Paper } from "@material-ui/core";

// custom
import CreatePost from "../Components/CreatePost/CreatePost";
import PostCard from "../Components/PostCard/postCard";
import ProfileCard from "./../Components/sidebar/profileCard";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  GutterBottom: {
    marginBottom: "1.5rem"
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <ProfileCard></ProfileCard>
          </Grid>
          <Grid item lg={6} sm={6} xl={3} xs={12}>
            <Paper className={classes.GutterBottom}>
              <CreatePost />
            </Paper>
            <PostCard></PostCard>
          </Grid>
          <Grid>
            <Paper></Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
