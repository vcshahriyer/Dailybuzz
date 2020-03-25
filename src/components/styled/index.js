import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
    0 1px 3px 1px rgba(60, 64, 67, 0.16);
  padding: 10px 5%;
  border-radius: 5px;
`;

export const Submit = styled.button`
  background-color: #1e8df9;
  border: none;
  color: #fff;
  padding: 7px 15px;
  border-radius: 4px;
  float: right;
  &:hover {
    background-color: #0673dd;
  }
`;

export const BulletButton = styled.button`
  display: inline-block;
  margin-right: 20px;
  padding: 5px 15px;
  border-radius: 30px;
  background-color: #f5f8fa;
  border: none;
  outline: none;
  font-family: "Comfortaa", cursive;
  &:hover {
    background-color: #e0eef7;
  }
`;

export const Scrollbar = css`
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #8a8989;
  }
`;

export const Textarea = styled.textarea`
  border: none;
  padding-top: 20px;
  width: 100%;
  resize: vertical;
  &:focus {
    outline: none;
  }
  ${Scrollbar}
`;
