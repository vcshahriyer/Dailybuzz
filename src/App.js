import React from "react";
import "./App.css";
import CreatePost from "./components/createPost";
import Grid from "@material-ui/core/Grid";
import QuickAccess from "./components/quickAccess";
import PostCard from "./components/postCard";
function App() {
  return (
    <div className="App">
      <Grid container spacing={4} justify="center">
        <Grid item xs={3}>
          <QuickAccess></QuickAccess>
        </Grid>
        <Grid container item xs={6}>
          <CreatePost></CreatePost>
          <PostCard></PostCard>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
