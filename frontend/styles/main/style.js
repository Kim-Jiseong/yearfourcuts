import styled from "styled-components";
// import { colors } from 'styles/theme'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  /* justify-content: center; */
  /* border: 1px solid black; */
`;
export const Header = styled.div`
  width: 100%;
  height: 6.2rem;
  position: absolute;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
`;
export const HeaderContent = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & i {
    cursor: pointer;
  }
`;
export const SubTitle = styled.div`
  color: #4f3500;
  /* font-weight: 700; */
  text-align: center;
  font-size: 2.4rem;
  margin-top: 8.4rem;
  margin-bottom: 2.2rem;
  font-family: "SlowSlow";
`;
export const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const Btn = styled.div`
  width: 100%;
  height: 8.4rem;
  background: ${(props) => props.color};
  box-shadow: 0px 3px 6px #00000029;
  border: 2px solid #1d1b1c;
  border-radius: 12px;
  margin-bottom: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: white;
  font-size: 1.8rem;
  /* font-weight: 700; */
`;
export const BtnWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const SubBtn1 = styled(Btn)`
  width: 50%;
  height: 5.6rem;
`;
export const SubBtn2 = styled(Btn)`
  width: 45%;
  height: 5.6rem;
  color: black;
`;
