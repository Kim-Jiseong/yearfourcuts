import { useEffect, useState, useRef, useCallback } from "react";
import * as S from "styles/components/frame1/style";
import * as T from "styles/components/frame2/style";
import * as M from "styles/components/frame3/style";
import Router, { useRouter } from "next/router";
import Blank from "public/img/blank.png";
import { useRecoilState } from "recoil";
import { useSession } from "next-auth/react";
import html2canvas from "html2canvas";

import { frameAtom, colorAtom, pageAtom, modalAtom } from "atoms/atom";
import axios from "axios";
export default function DetailFrame(props: any) {
  const S3 = process.env.NEXT_PUBLIC_S3_URL;
  const router = useRouter();
  const { data: session, status } = useSession<any>({ required: false });
  const [modal, setModal] = useState(false);
  const [masterModal, setMasterModal] = useRecoilState(modalAtom);
  const [master, setMaster] = useState<any>(props.master);
  const [Bg, setBg] = useState<any>(props.color);
  const [frame, setFrame] = useState<any>(props.frame);
  const [file1, setFile1] = useState<any>(
    process.env.NEXT_PUBLIC_S3_URL + props.file1
  );
  const [file2, setFile2] = useState<any>(
    process.env.NEXT_PUBLIC_S3_URL + props.file2
  );
  const [file3, setFile3] = useState<any>(
    process.env.NEXT_PUBLIC_S3_URL + props.file3
  );
  const [file4, setFile4] = useState<any>(
    process.env.NEXT_PUBLIC_S3_URL + props.file4
  );
  const [letter, setLetter] = useState<any>(props.letter);
  const [author, setAuthor] = useState<any>(props.author);
  const [pk, setPk] = useState<any>(props.id);
  const imgContainer = useRef<any>(null);
  const onHtmlToPng = () => {
    console.log("onCapture");
    html2canvas(imgContainer.current, {
      allowTaint: true,
      useCORS: true,
      // foreignObjectRendering: true,
    }).then((canvas) => {
      console.log("canvas", canvas);
      onSaveAs(canvas.toDataURL("image/png"), "4cuts4memories.png");
    });
    // const onCapture = () => {};

    const onSaveAs = (uri: string, filename: any) => {
      console.log("onSaveAs");
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.href = uri;
      link.download = filename;
      link.click();
      document.body.removeChild(link);
    };
  };

  const deletePost = () => {
    axios
      .post(process.env.NEXT_PUBLIC_BASE_URL + "posts/deletePost", {
        post_pk: pk,
      })
      .then(function (res) {
        console.log(res);
        alert("삭제되었습니다");
        Router.reload();
      })
      .catch(function (error) {
        alert("사진 삭제에 실패했습니다. 다시 시도해주세요.");
        console.log(error);
      });
  };
  return (
    <div>
      {frame === 1 && (
        <div>
          <S.Container ref={imgContainer} color={Bg}>
            <S.PhotoContainer>
              <S.PhotoWrapper>
                <img
                  crossOrigin="anonymous"
                  src={file1 ? file1 : Blank.src}
                ></img>
              </S.PhotoWrapper>
              <S.PhotoWrapper>
                <img
                  crossOrigin="anonymous"
                  src={file2 ? file2 : Blank.src}
                ></img>
              </S.PhotoWrapper>
              <S.PhotoWrapper>
                <img
                  crossOrigin="anonymous"
                  src={file3 ? file3 : Blank.src}
                ></img>
              </S.PhotoWrapper>
              <S.PhotoWrapper>
                <img
                  crossOrigin="anonymous"
                  src={file4 ? file4 : Blank.src}
                ></img>
              </S.PhotoWrapper>
            </S.PhotoContainer>

            <S.PhotoContainer2>
              <S.PhotoWrapperGrey>
                <img
                  crossOrigin="anonymous"
                  src={file1 ? file1 : Blank.src}
                ></img>
              </S.PhotoWrapperGrey>
              <S.PhotoWrapperGrey>
                <img
                  crossOrigin="anonymous"
                  src={file2 ? file2 : Blank.src}
                ></img>
              </S.PhotoWrapperGrey>
              <S.PhotoWrapperGrey>
                <img
                  crossOrigin="anonymous"
                  src={file3 ? file3 : Blank.src}
                ></img>
              </S.PhotoWrapperGrey>
              <S.PhotoWrapperGrey>
                <img
                  crossOrigin="anonymous"
                  src={file4 ? file4 : Blank.src}
                ></img>
              </S.PhotoWrapperGrey>
            </S.PhotoContainer2>
            {master === session?.user?.email && (
              <S.BtnWrapper>
                <S.MailIcon
                  onClick={() => {
                    const result = confirm("이 사진을 삭제하시겠습니까?");
                    if (result === true) {
                      deletePost();
                    } else {
                      return;
                    }
                  }}
                >
                  <i className="bi bi-trash"></i>
                </S.MailIcon>
                <S.MailIcon
                  onClick={() => {
                    const result = confirm("이 사진을 다운로드하시겠습니까?");
                    if (result === true) {
                      onHtmlToPng();
                    } else {
                      return;
                    }
                  }}
                >
                  <i className="bi bi-download"></i>
                </S.MailIcon>

                <S.MailIcon
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  <i className="bi bi-envelope-paper"></i>
                </S.MailIcon>
              </S.BtnWrapper>
            )}
            {modal && (
              <S.LetterModal
                onClick={() => {
                  setModal(false);
                }}
              >
                <p>{letter}</p>
                <p>{author}</p>
              </S.LetterModal>
            )}
          </S.Container>
        </div>
      )}
      {frame === 2 && (
        <div>
          <T.Container ref={imgContainer} color={Bg}>
            <T.PhotoContainer>
              <T.PhotoWrapper>
                <img
                  crossOrigin="anonymous"
                  src={file1 ? file1 : Blank.src}
                ></img>
              </T.PhotoWrapper>
              <T.PhotoWrapper>
                <img
                  crossOrigin="anonymous"
                  src={file2 ? file2 : Blank.src}
                ></img>
              </T.PhotoWrapper>
            </T.PhotoContainer>
            <T.PhotoContainer2>
              <T.PhotoWrapper>
                <img
                  crossOrigin="anonymous"
                  src={file3 ? file3 : Blank.src}
                ></img>
              </T.PhotoWrapper>
              <T.PhotoWrapper>
                <img
                  crossOrigin="anonymous"
                  src={file4 ? file4 : Blank.src}
                ></img>
              </T.PhotoWrapper>
            </T.PhotoContainer2>
            {master === session?.user?.email && (
              <S.BtnWrapper>
                <S.MailIcon
                  onClick={() => {
                    const result = confirm("이 사진을 삭제하시겠습니까?");
                    if (result === true) {
                      deletePost();
                    } else {
                      return;
                    }
                  }}
                >
                  <i className="bi bi-trash"></i>
                </S.MailIcon>
                <S.MailIcon
                  onClick={() => {
                    const result = confirm("이 사진을 다운로드하시겠습니까?");
                    if (result === true) {
                      onHtmlToPng();
                    } else {
                      return;
                    }
                  }}
                >
                  <i className="bi bi-download"></i>
                </S.MailIcon>
                <S.MailIcon
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  <i className="bi bi-envelope-paper"></i>
                </S.MailIcon>
              </S.BtnWrapper>
            )}
            {modal && (
              <S.LetterModal
                onClick={() => {
                  setModal(false);
                }}
              >
                <p>{letter}</p>
                <p>{author}</p>
              </S.LetterModal>
            )}
          </T.Container>
        </div>
      )}
      {frame === 3 && (
        <div>
          <M.Container ref={imgContainer} color={Bg}>
            <M.PhotoContainer>
              <M.PhotoWrapper>
                <img
                  crossOrigin="anonymous"
                  src={file1 ? file1 : Blank.src}
                ></img>
              </M.PhotoWrapper>
              <M.PhotoWrapper>
                <img
                  crossOrigin="anonymous"
                  src={file2 ? file2 : Blank.src}
                ></img>
              </M.PhotoWrapper>
            </M.PhotoContainer>
            <M.PhotoContainer2>
              <M.PhotoWrapper>
                <img
                  crossOrigin="anonymous"
                  src={file3 ? file3 : Blank.src}
                ></img>
              </M.PhotoWrapper>
              <M.PhotoWrapper>
                <img
                  crossOrigin="anonymous"
                  src={file4 ? file4 : Blank.src}
                ></img>
              </M.PhotoWrapper>
            </M.PhotoContainer2>
            {master === session?.user?.email && (
              <S.BtnWrapper>
                <S.MailIcon
                  onClick={() => {
                    const result = confirm("이 사진을 삭제하시겠습니까?");
                    if (result === true) {
                      deletePost();
                    } else {
                      return;
                    }
                  }}
                >
                  <i className="bi bi-trash"></i>
                </S.MailIcon>
                <S.MailIcon
                  onClick={() => {
                    const result = confirm("이 사진을 다운로드하시겠습니까?");
                    if (result === true) {
                      onHtmlToPng();
                    } else {
                      return;
                    }
                  }}
                >
                  <i className="bi bi-download"></i>
                </S.MailIcon>
                <S.MailIcon
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  <i className="bi bi-envelope-paper"></i>
                </S.MailIcon>
              </S.BtnWrapper>
            )}
            {modal && (
              <S.LetterModal
                onClick={() => {
                  setModal(false);
                }}
              >
                <p>{letter}</p>
                <p>{author}</p>
              </S.LetterModal>
            )}
          </M.Container>
        </div>
      )}
    </div>
  );
}
