import { useEffect, useRef, useState } from "react";
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
  letterAtom,
  authorAtom,
} from "atoms/atom";
export default function Upload(props: any) {
  const router = useRouter();
  const pid: any = router.query.pid;
  const textarea = useRef<any>();
  const [selColor, setSelColor] = useRecoilState<any>(colorAtom);
  const [frame, setFrame] = useRecoilState<any>(frameAtom);
  const [author, setAuthor] = useRecoilState<any>(authorAtom);
  const [letter, setLetter] = useRecoilState<any>(letterAtom);
  const [file1, setFile1] = useRecoilState<any>(file1Atom);
  const [file2, setFile2] = useRecoilState<any>(file2Atom);
  const [file3, setFile3] = useRecoilState<any>(file3Atom);
  const [file4, setFile4] = useRecoilState<any>(file4Atom);

  const [page, setPage] = useRecoilState<any>(pageAtom);

  console.log("frame", frame);
  const authorInput = (event: any) => {
    setAuthor(event.target.value);
    console.log(author);
  };
  const handleResizeHeight = (event: any) => {
    setLetter(event.target.value);
    console.log(letter);
    textarea.current.style.height = "auto";
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };

  const formDataHandler = (dataURI: any, idx: number) => {
    const byteString = atob(dataURI.split(",")[1]);
    // Blob 구성 준비
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i += 1) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ia], {
      type: "image/jpeg",
    });
    const file = new File([blob], `image${idx}.jpg`);
    console.log(`image${idx} 변환됨`);
    return file;
  };

  const sendFormData = async () => {
    console.log("전송시작");
    const filelist = [file1, file2, file3, file4];
    const formData = new FormData();

    filelist.forEach((value, index, array) => {
      const temp = formDataHandler(value, index);
      formData.append("image", temp);
    });
    console.log("image 모두 변환됨");
    formData.append("title", author);
    formData.append("letter", letter);
    formData.append("color", selColor);
    formData.append("frame", frame);
    formData.append("public_id", pid);
    await axios({
      method: "post",
      url: process.env.NEXT_PUBLIC_BASE_URL + "posts/newPost",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (res) {
        console.log(res);
        setFile1("");
        setFile2("");
        setFile3("");
        setFile4("");
        setAuthor("");
        setLetter("");
        setFrame("");
        setSelColor("#FFD275");
        setPage(1);
        router.push("/" + pid);
      })
      .catch(function (error) {
        console.log(error);
        alert("에러가 발생했습니다");
      });
  };
  return (
    <S.Container>
      <S.InfoContainer>
        <div>Step 3</div>
        <div>메시지를 남겨주세요</div>
      </S.InfoContainer>
      <S.SubTitle>from.</S.SubTitle>
      <S.Author
        onChange={authorInput}
        maxLength={8}
        placeholder="8글자 이하로 적어주세요"
      ></S.Author>
      <S.SubTitle>메시지</S.SubTitle>
      <S.Letter
        rows={1}
        ref={textarea}
        onChange={handleResizeHeight}
      ></S.Letter>
      <S.Btn
        style={{ width: "100%" }}
        color="#FF7575"
        onClick={() => {
          if (frame && selColor && file1 && file2 && file3 && file4 && author) {
            setPage("loading");
            sendFormData();
          }
        }}
      >
        사진 올리기
      </S.Btn>
    </S.Container>
  );
}
