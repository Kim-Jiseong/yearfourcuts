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
  background: ${(props) => props.color} no-repeat center;
  background-size: cover;
  & div:last-child {
    right: 0;
  }
  /* align-items: center; */
`;
export const PhotoContainer = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  /* background-color: red; */
  position: absolute;
  padding-top: 1rem;
  padding-bottom: 7rem;
  width: 50%;
  height: 100%;
  padding-left: 1rem;
  /* top: 0;
  left: 50%; ; */
`;
export const PhotoContainer2 = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: red; */
  padding-top: 1rem;
  padding-bottom: 7rem;
  padding-right: 1rem;
  position: absolute;

  width: 50%;
  height: 100%;
  align-items: flex-end;
  /* top: 0;
  left: 50%; ; */
`;
export const PhotoWrapper = styled.div`
  background-color: white;
  width: 96%;
  height: 49%;
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
