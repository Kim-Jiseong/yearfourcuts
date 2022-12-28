import styled from "styled-components";
// import { colors } from 'styles/theme'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 90%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  /* flex-direction: column; */
  position: relative;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid black; */
`;

export const ImageContainer = styled.div`
  width: 40%;
  object-fit: contain;
  & img {
    width: 100%;
  }
`;
export const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  text-align: center;
  font-size: 2rem;
  margin-bottom: 4.2rem;
  font-family: "SlowSlow";
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

export const FooterContainer = styled.div`
  width: 100%;
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  background-color: #faeab1;
  padding: 3rem 2rem 6rem 2rem;
  color: #1b1b1b;
  & div:first-child {
    font-size: 2rem;
    font-weight: 700;
  }
  & div {
    margin-top: 0.4rem;
  }
  & p {
    font-size: 1.6rem;
    line-height: 150%;
    /* font-weight: 700; */
    margin-top: 1rem;
  }
`;
