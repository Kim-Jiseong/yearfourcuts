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
        <div>사진을 올려주세요</div>
      </S.InfoContainer>
      <Frame></Frame>
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
          onClick={() => {
            if (frame && selColor && file1 && file2 && file3 && file4) {
              setPage(3);
            }
          }}
        >
          다음으로
        </S.Btn>
      </S.BtnWrapper>
    </S.Container>
  );
}
