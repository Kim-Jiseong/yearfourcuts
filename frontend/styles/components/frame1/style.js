import { constants } from "buffer";
import styled from "styled-components";
import css from "styled-jsx/css";
// import { colors } from 'styles/theme'
// export interface FFrameTypes {
//   id?: number;
//   color?: string;
//   select?: number;
//   prop?: any;
// }
export const Container = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  padding-bottom: calc(150% + 6rem);
  margin: 0 auto;
  display: flex;
  /* justify-content: space-between; */
  position: relative;
  background: ${(props) => props.color} no-repeat center;
  background-size: cover;
  & div:last-child {
    right: 0;
  }
  /* align-items: center; */
`;
export const PhotoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  position: absolute;
  padding-top: 1rem;
  padding-bottom: 7rem;
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
`;
export const PhotoContainer2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  position: absolute;
  padding-top: 1rem;
  padding-bottom: 7rem;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
`;
export const PhotoWrapper = styled.div`
  background-color: white;
  width: 90%;
  height: 23%;
  cursor: pointer;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & input {
    visibility: hidden;
  }
  /* border: 1px solid blue; */
  /* height: 10rem; */
  /* position: absolute; */
`;
export const PhotoWrapperGrey = styled(PhotoWrapper)`
  filter: grayscale();
`;
export const Author = styled.p`
  font-family: "SlowSlow";
  font-size: 2rem;
  position: absolute;
  right: 12px;
  bottom: 10px;
  background: white;
  padding: 0 1rem 0.4rem 1rem;
  border-radius: 8px;
`;
export const MailIcon = styled.div`
  /* width: auto; */
  /* position: absolute; */
  font-size: 2rem;
  /* font-family: "SlowSlow"; */
  /* right: 0; */
  /* bottom: 0px; */
  background: white;
  padding: 1rem 1rem 1rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 1rem;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  & i {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  }
`;
export const LetterModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  z-index: 2;
  top: 0;
  left: 0;
  overflow: hidden;
  cursor: pointer;
  word-wrap: break-word;
  & p {
    margin-top: 10%;
    width: 80%;
    max-height: 80%;
    font-family: "SlowSlow";
    font-size: 2rem;
    font-weight: 600;
    overflow-y: auto;
    white-space: pre-line;
    text-align: left;
    /* word-wrap: break-word; */
  }
  & p:last-child {
    position: absolute;
    bottom: 10px;
    right: 10px;
    text-align: right;
  }
`;
export const BtnWrapper = styled.div`
  width: 40%;
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* padding: 1rem; */
`;
