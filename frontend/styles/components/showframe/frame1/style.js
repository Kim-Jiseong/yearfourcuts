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
  padding-bottom: calc(300% + 6rem);
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  position: absolute;
  padding-top: 1rem;
  padding-bottom: 7rem;
  height: 100%;
  top: 0;
  left: 0;
`;
// export const PhotoContainer2 = styled.div`
//   width: 50%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   /* background-color: red; */
//   position: absolute;
//   padding-top: 1rem;
//   padding-bottom: 7rem;
//   width: 50%;
//   height: 100%;
//   top: 0;
//   right: 0;
// `;
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
  width: auto;
  margin-right: 1rem;
  position: absolute;
  font-size: 2rem;
  right: 0;
  bottom: 10px;
  background: white;
  padding: 1rem 1rem 0.9rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
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
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 0;
  left: 0;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  word-wrap: break-word;
  & p {
    width: 80%;
    font-family: "SlowSlow";
    font-size: 2rem;
    font-weight: 600;
    white-space: pre-line;
    /* word-wrap: break-word; */
  }
  & p:last-child {
    position: absolute;
    bottom: 10px;
    right: 10px;
    text-align: right;
  }
`;
