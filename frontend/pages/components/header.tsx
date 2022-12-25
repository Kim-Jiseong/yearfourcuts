import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as S from "styles/main/style";
import { useRecoilState } from "recoil";
import { frameAtom, colorAtom, pageAtom, modalAtom } from "atoms/atom";
import axios from "axios";
function Header(props: any) {
  const router = useRouter();
  // const sendPage = (page: number) => {
  //   console.log("sendpage", page);
  //   props.getPage(page);
  // };
  const [modal, setModal] = useRecoilState<any>(modalAtom);
  const [page, setPage] = useRecoilState<any>(pageAtom);
  return (
    <S.Header>
      {props.page === "main" && (
        <S.HeaderContent>
          <i
            className="bi bi-chevron-left"
            onClick={() => {
              router.push("/");
            }}
          ></i>
          <p>{props.name}님의 앨범</p>
          <i
            className="bi bi-upload"
            onClick={() => {
              setModal("share");
            }}
          ></i>
        </S.HeaderContent>
      )}
      {props.page === 1 && (
        <S.HeaderContent>
          <i
            className="bi bi-chevron-left"
            onClick={() => {
              router.push("/" + props.pid);
            }}
          ></i>
          <p>사진 올리기</p>
          <div></div>
          {/* <i
            className="bi bi-chevron-right"
            onClick={() => {
              if (frame && selColor) {
                sendPage(props.page + 1);
              }
            }}
          ></i> */}
        </S.HeaderContent>
      )}
      {props.page !== 1 && props.page !== "main" && (
        <S.HeaderContent>
          <i
            className="bi bi-chevron-left"
            onClick={() => {
              setPage(page - 1);
            }}
          ></i>
          <p>사진 올리기</p>
          <div></div>
          {/* <i
            className="bi bi-chevron-right"
            onClick={() => {
              sendPage(props.page + 1);
            }}
          ></i> */}
        </S.HeaderContent>
      )}
    </S.Header>
  );
}

export default Header;
