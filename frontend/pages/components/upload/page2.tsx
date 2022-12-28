import { useEffect, useState } from "react";
import * as S from "styles/upload/style";
import { useRouter } from "next/router";
import axios from "axios";
import { useRecoilState } from "recoil";
import Frame from "pages/components/frame/type1";
import {
  frameAtom,
  colorAtom,
  pageAtom,
  file1Atom,
  file2Atom,
  file3Atom,
  file4Atom,
} from "atoms/atom";
export default function Upload(props: any) {
  const router = useRouter();

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

  const [file1, setFile1] = useRecoilState<any>(file1Atom);
  const [file2, setFile2] = useRecoilState<any>(file2Atom);
  const [file3, setFile3] = useRecoilState<any>(file3Atom);
  const [file4, setFile4] = useRecoilState<any>(file4Atom);
  const [frame, setFrame] = useRecoilState<any>(frameAtom);
  const [colorList, setColorList] = useState<any>();
  const [page, setPage] = useRecoilState<any>(pageAtom);
  const [selColor, setSelColor] = useRecoilState<any>(colorAtom);
  console.log("frame", frame);
  return (
    <S.Container>
      <S.InfoContainer>
        <div>Step 2</div>
        <div>프레임 컬러를 고르고, 사진을 올려주세요</div>
      </S.InfoContainer>
      <Frame></Frame>
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
      <S.BtnWrapper>
        <S.Btn
          color="white"
          onClick={() => {
            setPage(page - 1);
          }}
        >
          이전으로
        </S.Btn>
        <S.Btn
          color="#FF7575"
          style={{ color: "white" }}
          onClick={() => {
            if (frame && selColor && file1 && file2 && file3 && file4) {
              setPage(3);
            } else {
              alert("네컷을 모두 채워주세요!");
            }
          }}
        >
          다음으로
        </S.Btn>
      </S.BtnWrapper>
    </S.Container>
  );
}
