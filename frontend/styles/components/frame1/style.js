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
  justify-content: space-between;
  position: relative;
  background: ${(props) => props.color};
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
  /* top: 0;
  left: 50%; ; */
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
