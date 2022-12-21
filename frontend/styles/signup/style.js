import styled from "styled-components";
// import { colors } from 'styles/theme'

export const Container = styled.div`
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  /* align-items: center; */
  justify-content: center;
  /* border: 1px solid black; */
`;

export const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const Title = styled.div`
  color: #4f3500;
  font-weight: 700;
  font-size: 4.8rem;
  font-family: "GangwonEduPowerExtraBoldA";
`;
export const SubTitle = styled.div`
  color: #4f3500;
  /* font-weight: 700; */
  /* text-align: center; */
  font-size: 2.4rem;
  margin-bottom: 2.2rem;
  /* font-family: "N"; */
`;
export const NicknameInput = styled.input`
  color: #4f3500;
  /* font-weight: 700; */
  /* text-align: center; */
  font-size: 1.8rem;
  margin-bottom: 2rem;
  /* font-family: "SlowSlow"; */
  background: none;
  border: none;
  border-bottom: 1px solid #4f3500;
  padding: 1rem;
`;
export const ErrMsg = styled.div`
  color: red;
  margin-bottom: 2rem;
`;
export const Btn = styled.div`
  width: 100%;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid #1d1b1c;
  border-radius: 12px;
  margin-bottom: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
`;
