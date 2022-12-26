import { constants } from "buffer";
import styled, { css, keyframes } from "styled-components";
// import css from "styled-jsx/css";
// import { colors } from 'styles/theme'

export const spinner = keyframes`
0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`;

export const Container = styled.div`
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  /* align-items: center; */
`;
export const InfoContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 3rem;
  font-family: "SlowSlow";
  display: flex;
  flex-direction: column;
  font-size: 2.8rem;
  align-items: center;
  &:last-child {
    font-size: 3.2rem;
  }
`;
export const SubTitle = styled.div`
  font-size: 1.7rem;
  /* font-weight: 700; */
  margin: 2rem 0 2rem 0;
`;
export const FrameContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  /* display: flex; */
  white-space: nowrap;
`;

export const ColorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
export const ColorWrapperContainer = styled.div`
  position: relative;
  /* padding: 1rem; */
  margin-bottom: 2rem;
  flex-grow: 0;
  cursor: pointer;
`;
export const ColorWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: red; */
  border: 3px solid #fff9e7;
  background: ${(props) => props.color || "black"} no-repeat center;
  background-size: cover;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.25);
`;
export const ColorWrapperSel = styled.div`
  width: 6.8rem;
  height: 6.8rem;
  background: ${(props) => props.color || "black"} no-repeat center;
  background-size: cover;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 500px;
  visibility: hidden;
  ${(props) =>
    props.title === props.color &&
    css`
      visibility: visible;
    `}
`;
export const Author = styled.input`
  width: 100%;
  background: none;
  font-family: "SlowSlow";
  border: none;
  border-bottom: 1px solid black;
  resize: none;
  font-size: 2.4rem;
  padding: 1rem;
  padding-top: 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Letter = styled.textarea`
  width: 100%;
  background: none;
  font-family: "SlowSlow";
  border: 1px solid black;
  resize: none;
  font-size: 2.4rem;
  padding: 1rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Btn = styled.div`
  width: 48%;
  height: 6rem;
  background: ${(props) => props.color};
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid #1d1b1c;
  border-radius: 12px;
  margin-top: 4rem;
  margin-bottom: 6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d1b1c;
  font-size: 1.8rem;
  font-weight: 600;
`;
export const LoadingContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoaderWrapper = styled.div`
  display: inline-block;
  transform: translateZ(1px);
  & > div {
    display: inline-block;
    width: 6rem;
    height: 6rem;
    margin: 8px;
    border-radius: 50%;
    background: #ff7575;
    animation: ${spinner} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
`;
