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
  const [selColor, setSelColor] = useRecoilState<any>(colorAtom);
  const [page, setPage] = useRecoilState<any>(pageAtom);

  return (
    <S.Container>
      <S.InfoContainer>
        <div>Step 1</div>
        <div>프레임 모양을 골라주세요</div>
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

      <S.Btn
        style={{ backgroundColor: "white", width: "100%" }}
        onClick={() => {
          if (frame) {
            setPage(2);
          }
        }}
      >
        다음으로
      </S.Btn>
    </S.Container>
  );
}
