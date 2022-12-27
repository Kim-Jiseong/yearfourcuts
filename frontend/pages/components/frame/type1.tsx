import { useEffect, useState, useRef, useCallback } from "react";
import * as S from "styles/components/frame1/style";
import * as T from "styles/components/frame2/style";
import * as M from "styles/components/frame3/style";
import imageCompression from "browser-image-compression";
import { useRouter } from "next/router";
import axios from "axios";
import DefaultImg from "public/img/upload.png";
import DefaultImg2 from "public/img/upload2.png";
import Blank from "public/img/blank.png";
import { useRecoilState } from "recoil";
import {
  frameAtom,
  colorAtom,
  pageAtom,
  file1Atom,
  file2Atom,
  file3Atom,
  file4Atom,
} from "atoms/atom";
export default function Frame1(props: any) {
  const [Bg, setBg] = useRecoilState<any>(colorAtom);
  const [frame, setFrame] = useRecoilState<any>(frameAtom);
  const [file1, setFile1] = useRecoilState<any>(file1Atom);
  const options = {
    maxSizeMB: 0.2, // 이미지 최대 용량
    maxWidthOrHeight: 1920, // 최대 넓이(혹은 높이)
    useWebWorker: true,
  };
  const imageCompress = async (file: any) => {
    try {
      const compressedFile = await imageCompression(file, options);
      const promise = imageCompression.getDataUrlFromFile(compressedFile);
      promise.then((result) => {
        return result;
      });
      //   return compressedFile;
    } catch (error) {
      console.log(error);
    }
  };
  const saveImgFile1 = async () => {
    const file1 = inputRef1.current?.files[0];
    if (file1) {
      const compressedFile = await imageCompression(file1, options);
      const reader = new FileReader();
      console.log("file", file1);
      console.log("com", compressedFile);
      if (compressedFile) {
        reader.readAsDataURL(compressedFile);
        reader.onloadend = () => {
          const base64data = reader.result;
          console.log("base64data", base64data);
          setFile1(base64data);
        };
      }
    }
  };
  const inputRef1 = useRef<any>(null);
  const onUploadImageButtonClick1 = () => {
    inputRef1.current.click();
  };
  // -----------------------
  const [file2, setFile2] = useRecoilState<any>(file2Atom);
  const saveImgFile2 = async () => {
    const file2 = inputRef2.current?.files[0];
    if (file2) {
      const compressedFile = await imageCompression(file2, options);
      const reader = new FileReader();
      console.log("file", file2);
      console.log("com", compressedFile);
      if (compressedFile) {
        reader.readAsDataURL(compressedFile);
        reader.onloadend = () => {
          const base64data = reader.result;
          console.log("base64data", base64data);
          setFile2(base64data);
        };
      }
    }
  };
  const inputRef2 = useRef<any>(null);
  const onUploadImageButtonClick2 = () => {
    inputRef2.current.click();
  };
  // -----------------------
  const [file3, setFile3] = useRecoilState<any>(file3Atom);
  const saveImgFile3 = async () => {
    const file3 = inputRef3.current?.files[0];
    if (file3) {
      const compressedFile = await imageCompression(file3, options);
      const reader = new FileReader();
      console.log("file", file3);
      console.log("com", compressedFile);
      if (compressedFile) {
        reader.readAsDataURL(compressedFile);
        reader.onloadend = () => {
          const base64data = reader.result;
          console.log("base64data", base64data);
          setFile3(base64data);
        };
      }
    }
  };
  const inputRef3 = useRef<any>(null);
  const onUploadImageButtonClick3 = () => {
    inputRef3.current.click();
  };
  // -----------------------
  const [file4, setFile4] = useRecoilState<any>(file4Atom);
  const saveImgFile4 = async () => {
    const file4 = inputRef4.current.files[0];
    if (file4) {
      const compressedFile = await imageCompression(file4, options);
      const reader = new FileReader();
      console.log("file", file4);
      console.log("com", compressedFile);
      if (compressedFile) {
        reader.readAsDataURL(compressedFile);
        reader.onloadend = () => {
          const base64data = reader.result;
          console.log("base64data", base64data);
          setFile4(base64data);
        };
      }
    }
  };
  const inputRef4 = useRef<any>(null);
  const onUploadImageButtonClick4 = () => {
    inputRef4.current.click();
  };
  // -----------------------

  return (
    <div>
      {frame === 1 && (
        <S.Container color={Bg}>
          <S.PhotoContainer>
            <S.PhotoWrapper onClick={onUploadImageButtonClick1}>
              <img src={file1 ? file1 : DefaultImg.src}></img>
              <input
                ref={inputRef1}
                accept="image/*"
                type="file"
                onChange={saveImgFile1}
              ></input>
            </S.PhotoWrapper>
            <S.PhotoWrapper onClick={onUploadImageButtonClick2}>
              <img src={file2 ? file2 : DefaultImg.src}></img>
              <input
                ref={inputRef2}
                accept="image/*"
                type="file"
                onChange={saveImgFile2}
              ></input>
            </S.PhotoWrapper>
            <S.PhotoWrapper onClick={onUploadImageButtonClick3}>
              <img src={file3 ? file3 : DefaultImg.src}></img>
              <input
                ref={inputRef3}
                accept="image/*"
                type="file"
                onChange={saveImgFile3}
              ></input>
            </S.PhotoWrapper>
            <S.PhotoWrapper onClick={onUploadImageButtonClick4}>
              <img src={file4 ? file4 : DefaultImg.src}></img>
              <input
                ref={inputRef4}
                accept="image/*"
                type="file"
                onChange={saveImgFile4}
              ></input>
            </S.PhotoWrapper>
          </S.PhotoContainer>

          <S.PhotoContainer2>
            <S.PhotoWrapperGrey>
              <img src={file1 ? file1 : Blank.src}></img>
            </S.PhotoWrapperGrey>
            <S.PhotoWrapperGrey>
              <img src={file2 ? file2 : Blank.src}></img>
            </S.PhotoWrapperGrey>
            <S.PhotoWrapperGrey>
              <img src={file3 ? file3 : Blank.src}></img>
            </S.PhotoWrapperGrey>
            <S.PhotoWrapperGrey>
              <img src={file4 ? file4 : Blank.src}></img>
            </S.PhotoWrapperGrey>
          </S.PhotoContainer2>
        </S.Container>
      )}
      {frame === 2 && (
        <T.Container color={Bg}>
          <T.PhotoContainer>
            <T.PhotoWrapper onClick={onUploadImageButtonClick1}>
              <img src={file1 ? file1 : DefaultImg2.src}></img>
              <input
                ref={inputRef1}
                accept="image/*"
                type="file"
                onChange={saveImgFile1}
              ></input>
            </T.PhotoWrapper>
            <T.PhotoWrapper onClick={onUploadImageButtonClick2}>
              <img src={file2 ? file2 : DefaultImg2.src}></img>
              <input
                ref={inputRef2}
                accept="image/*"
                type="file"
                onChange={saveImgFile2}
              ></input>
            </T.PhotoWrapper>
          </T.PhotoContainer>
          <T.PhotoContainer2>
            <T.PhotoWrapper onClick={onUploadImageButtonClick3}>
              <img src={file3 ? file3 : DefaultImg2.src}></img>
              <input
                ref={inputRef3}
                accept="image/*"
                type="file"
                onChange={saveImgFile3}
              ></input>
            </T.PhotoWrapper>
            <T.PhotoWrapper onClick={onUploadImageButtonClick4}>
              <img src={file4 ? file4 : DefaultImg2.src}></img>
              <input
                ref={inputRef4}
                accept="image/*"
                type="file"
                onChange={saveImgFile4}
              ></input>
            </T.PhotoWrapper>
          </T.PhotoContainer2>
        </T.Container>
      )}
      {frame === 3 && (
        <M.Container color={Bg}>
          <M.PhotoContainer>
            <M.PhotoWrapper onClick={onUploadImageButtonClick1}>
              <img src={file1 ? file1 : DefaultImg2.src}></img>
              <input
                ref={inputRef1}
                accept="image/*"
                type="file"
                onChange={saveImgFile1}
              ></input>
            </M.PhotoWrapper>
            <M.PhotoWrapper onClick={onUploadImageButtonClick2}>
              <img src={file2 ? file2 : DefaultImg2.src}></img>
              <input
                ref={inputRef2}
                accept="image/*"
                type="file"
                onChange={saveImgFile2}
              ></input>
            </M.PhotoWrapper>
          </M.PhotoContainer>
          <M.PhotoContainer2>
            <M.PhotoWrapper onClick={onUploadImageButtonClick3}>
              <img src={file3 ? file3 : DefaultImg2.src}></img>
              <input
                ref={inputRef3}
                accept="image/*"
                type="file"
                onChange={saveImgFile3}
              ></input>
            </M.PhotoWrapper>
            <M.PhotoWrapper onClick={onUploadImageButtonClick4}>
              <img src={file4 ? file4 : DefaultImg2.src}></img>
              <input
                ref={inputRef4}
                accept="image/*"
                type="file"
                onChange={saveImgFile4}
              ></input>
            </M.PhotoWrapper>
          </M.PhotoContainer2>
        </M.Container>
      )}
    </div>
  );
}
