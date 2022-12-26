import React from "react";
import * as S from "styles/main/style";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
function Share(props: any) {
  const router = useRouter();
  return (
    <div>
      <S.URLShareWrapper>
        <CopyToClipboard text={props.currentUrl}>
          <S.URLShareInput
            onClick={() => {
              alert("링크가 복사되었어요!");
            }}
          >
            <input value={props.currentUrl} readOnly></input>
            <S.URLShareButton>
              <i className="bi bi-clipboard"></i>
            </S.URLShareButton>
          </S.URLShareInput>
        </CopyToClipboard>
      </S.URLShareWrapper>
      <S.ShareContainer>
        <FacebookShareButton url={props.currentUrl}>
          <FacebookIcon size={40} round={true} borderRadius={24}></FacebookIcon>
        </FacebookShareButton>
        <TwitterShareButton url={props.currentUrl}>
          <TwitterIcon size={40} round={true} borderRadius={24}></TwitterIcon>
        </TwitterShareButton>
      </S.ShareContainer>
    </div>
  );
}

export default Share;
