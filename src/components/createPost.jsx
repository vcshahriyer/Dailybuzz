import React from "react";
import Grid from "@material-ui/core/Grid";
import { TiUser } from "react-icons/ti";
import { IconContext } from "react-icons";
import { IoIosPin } from "react-icons/io";
import { IoIosHappy } from "react-icons/io";
const CreatePost = () => {
  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={6}>
        <div className="rs-create-post-container">
          <div className="rs-create-post-header">
            <ul className="rs-create-post-bullets">
              <li>Status</li>
              <li>Photos</li>
              <li>Video</li>
            </ul>
          </div>
          <div className="rs-create-post-body">
            <Grid container spacing={1} justify="center">
              <Grid item xs={2}>
                <img className="rs-create-post-img" src="img/face.png" alt="" />
              </Grid>
              <Grid item xs={10}>
                <textarea
                  name="postBody"
                  id=""
                  rows="5"
                  placeholder="What's on your mind ?"
                  className="rs-scrollbar"
                ></textarea>
              </Grid>
            </Grid>
          </div>
          <div className="rs-create-post-footer">
            <IconContext.Provider
              value={{
                color: "#4267b2",
                className: "rs-icon-globar"
              }}
            >
              <p className="rs-bullets">
                People <TiUser />
              </p>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                color: "#FE4066",
                className: "rs-icon-globar"
              }}
            >
              <span className="rs-bullets">
                People <IoIosPin />
              </span>
            </IconContext.Provider>
            <IconContext.Provider
              value={{
                color: "#f79842",
                className: "rs-icon-globar"
              }}
            >
              <span className="rs-bullets">
                People <IoIosHappy />
              </span>
            </IconContext.Provider>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default CreatePost;
