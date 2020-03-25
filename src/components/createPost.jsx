import React from "react";
import Grid from "@material-ui/core/Grid";
import { TiUser } from "react-icons/ti";
import { IoIosPin, IoIosHappy } from "react-icons/io";
import PillButton from "./common/pillButton";
import { Container, Submit, Textarea } from "./styled/index";
import styled from "styled-components";

const PostFooter = styled.div`
  margin-top: 15px;
`;
const PostHeader = styled.div`
  padding: 20px 0;
`;
const Image = styled.img`
  width: 60px;
`;
const CreatePost = () => {
  return (
    <Grid item xs={12}>
      <Container>
        <PostHeader>
          <PillButton text="status"></PillButton>
          <PillButton text="photos"></PillButton>
          <PillButton text="videos"></PillButton>
        </PostHeader>
        <div className="rs-create-post-body">
          <Grid container item spacing={2}>
            <Grid item sm>
              <Image src="img/face.png" alt="" />
            </Grid>
            <Grid item sm={10}>
              <Textarea
                name="postBody"
                placeholder="What's on your mind ?"
              ></Textarea>
            </Grid>
          </Grid>
        </div>
        <PostFooter>
          <PillButton icon={{ text: "People", color: "#4267b2" }}>
            <TiUser />
          </PillButton>
          <PillButton icon={{ text: "Check in", color: "#FE4066" }}>
            <IoIosPin />
          </PillButton>
          <PillButton icon={{ text: "Mood", color: "#f79842" }}>
            <IoIosHappy />
          </PillButton>
          <Submit>Share</Submit>
        </PostFooter>
      </Container>
    </Grid>
  );
};

export default CreatePost;
