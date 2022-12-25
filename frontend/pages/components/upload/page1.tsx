import { useEffect, useState } from "react";
import * as S from "styles/upload/style";
import { useRouter } from "next/router";
import axios from "axios";
import styled, { css } from "styled-components";
import { useRecoilState } from "recoil";
import { frameAtom, colorAtom, pageAtom } from "atoms/atom";
import F1 from "public/img/FrameSel1.png";
import F2 from "public/img/FrameSel2.png";
import F3 from "public/img/FrameSel3.png";
interface Props {
  fid?: number | string;
  select?: number | string;
  color?: string | string;
}
export const Frame = styled.img<Props>`
  padding: calc(1rem + 2px);
  height: calc(100% + 2px);
  border-radius: 4px;
  /* width: 100%; */
  cursor: pointer;
  ${(props) =>
    props.fid === props.select &&
    css`
      padding: 1rem;
      border: 2px dashed;
      border-color: ${props.color};
    `}
  margin-bottom: 2rem;
`;

export default function Upload(props: any) {
  const router = useRouter();

  const [frame, setFrame] = useRecoilState<any>(frameAtom);
  // const [frame, setFrame] = useState<any>();
  const [colorList, setColorList] = useState<any>();
  const [page, setPage] = useRecoilState<any>(pageAtom);
  const [selColor, setSelColor] = useRecoilState<any>(colorAtom);
  // const [selColor, setSelColor] = useState<any>();

  const getColor = () => {
    axios
      .get(process.env.NEXT_PUBLIC_BASE_URL + "posts/colorlist")
      .then((res) => {
        console.log(res.data.colorlist[0]);
        setColorList(res.data.colorlist);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getColor();
  }, []);
  return (
    <S.Container>
      <S.InfoContainer>
        <div>Step 1</div>
        <div>템플릿을 골라주세요</div>
      </S.InfoContainer>
      <S.SubTitle>모양 {frame}</S.SubTitle>
      <S.FrameContainer>
        <Frame
          src={F1.src}
          fid={1}
          select={frame}
          color="#FFD275"
          onClick={() => setFrame(1)}
        >
          {/* <F3 id="F3" select={frame}></F3> */}
        </Frame>
        <Frame
          src={F2.src}
          fid={2}
          color="#A0D2DB"
          select={frame}
          onClick={() => setFrame(2)}
        >
          {/* <F2 id="F3" select={frame}></F2> */}
        </Frame>
        <Frame
          src={F3.src}
          fid={3}
          color="#C490D1"
          select={frame}
          onClick={() => setFrame(3)}
        >
          {/* <F1 id="F3" select={frame}></F1> */}
        </Frame>
      </S.FrameContainer>
      <S.SubTitle>컬러</S.SubTitle>
      <S.ColorContainer>
        {colorList &&
          colorList.map((color: any, idx: number) => (
            <S.ColorWrapperContainer key={color}>
              <S.ColorWrapperSel
                color={color}
                title={selColor}
                // onClick={() => {
                //   setSelColor(color);
                // }}
              ></S.ColorWrapperSel>
              <S.ColorWrapper
                color={color}
                onClick={() => {
                  setSelColor(color);
                }}
              ></S.ColorWrapper>
            </S.ColorWrapperContainer>
          ))}
      </S.ColorContainer>
      <S.Btn
        onClick={() => {
          if (frame && selColor) {
            setPage(2);
          }
        }}
      >
        다음으로
      </S.Btn>
    </S.Container>
  );
}
