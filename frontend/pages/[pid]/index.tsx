import * as S from "styles/main/style";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "pages/components/header";
import Share from "pages/components/share";
import ShowFrame from "pages/components/frame/showFrame";
import DetailFrame from "pages/components/frame/detailFrame";
import intro from "public/img/intro.png";
import { useRecoilState } from "recoil";
import { modalAtom } from "atoms/atom";

interface Props {
  checked?: boolean | undefined;
}
const HiddenSpanWrapper = styled.div<Props>`
  font-size: 1.2rem;
  right: 0;
  width: 10rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  pointer-events: none;
  & span {
    width: 50%;
    text-align: center;
  }
  & span:first-child {
    color: ${(props) => (props.checked ? "#707070" : "#fff")};
  }
  & span:last-child {
    color: ${(props) => (props.checked ? "#fff" : "#707070")};
  }
`;

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession<any>({ required: false });
  const [boardMaster, setBoardMaster] = useState<any>();
  const [modal, setModal] = useRecoilState(modalAtom);
  const [hidden, setHidden] = useState<boolean>();
  const [boardMasternickname, setBoardMasterNickname] = useState<string>("");
  const [postList, setPostList] = useState<any>([]);
  const [currentUrl, setCurrentUrl] = useState("");
  const blank = "client_assets/blank.png";
  const pid = router.query.pid;
  const getBoardMaster = () => {
    axios
      .post(process.env.NEXT_PUBLIC_BASE_URL + "accounts/nickname/pid", {
        pid: router.query.pid,
      })
      .then(function (res) {
        setBoardMaster(res.data.email);
        setHidden(res.data.hidden);
        setBoardMasterNickname(res.data.nickname);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getPostList = () => {
    axios
      .post(process.env.NEXT_PUBLIC_BASE_URL + "posts/givePosts", {
        pid: router.query.pid,
      })
      .then(function (res) {
        console.log(res);
        setPostList(res.data.posts);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const changeHiddenState = () => {
    axios
      .post(process.env.NEXT_PUBLIC_BASE_URL + "accounts/hidden/change", {
        email: session?.user?.email,
      })
      .then(function (res) {
        console.log(res);
        if (res.data.status === "201 Updated") {
          setHidden(res.data.hiddenAfter);
        } else {
          alert("공개 상태를 바꾸는 데 실패했습니다. 다시 시도해주세요.");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (pid) {
      getBoardMaster();
      getPostList();
    }
    setCurrentUrl(window.location.href);
  }, [pid]);
  const onClickEnter = () => {
    if (status === "authenticated") {
      console.log(session);
      router.push("signup");
    } else {
      signIn("google", { callbackUrl: "/signup" });
    }
  };
  // console.log(postList[0].title);
  return (
    <S.Container>
      {modal === "share" && (
        <div>
          <S.ModalBg
            onClick={() => {
              setModal(false);
            }}
          ></S.ModalBg>
          <S.ModalContainer>
            <S.ModalInfoContainer>
              <div></div>
              <p>공유하기</p>
              <div
                onClick={() => {
                  setModal(false);
                }}
              >
                X
              </div>
            </S.ModalInfoContainer>
            <Share currentUrl={currentUrl}></Share>
          </S.ModalContainer>
        </div>
      )}
      <Header name={boardMasternickname} page="main"></Header>
      {session?.user?.email !== boardMaster && (
        <S.SubTitle>앨범 주인과 함께한 올해의 추억을 공유해주세요</S.SubTitle>
      )}
      {session?.user?.email === boardMaster && (
        <S.SubTitle>올해의 추억을 공유해주세요</S.SubTitle>
      )}

      <S.ControlContainer>
        <S.Btn
          color="#FF7575"
          onClick={() => {
            router.push(pid + "/upload");
          }}
        >
          <img src={intro.src} />
          사진 올리기
        </S.Btn>
        {session?.user?.email === boardMaster && (
          <S.SetHiddenConatainer>
            <S.SetHiddenBtn onClick={changeHiddenState}>
              <div>내 앨범 </div>
              <HiddenSpanWrapper checked={hidden}>
                <span>공개</span> <span>비공개</span>
              </HiddenSpanWrapper>
              <input
                role="switch"
                type="checkbox"
                checked={hidden}
                readOnly
              ></input>
            </S.SetHiddenBtn>
          </S.SetHiddenConatainer>
        )}

        {session?.user?.email !== boardMaster && (
          <S.BtnWrapper>
            <S.SubBtn1 color="#FFD275" onClick={onClickEnter}>
              내 앨범으로
            </S.SubBtn1>
            <S.SubBtn2
              color="white"
              onClick={() => {
                router.push("/");
              }}
            >
              처음으로
            </S.SubBtn2>
          </S.BtnWrapper>
        )}

        {postList.length > 0 && session?.user?.email === boardMaster && (
          <div style={{ width: "100%", marginBottom: "8rem" }}>
            <S.PostListInfo>
              좌우로 밀어서 친구들이 남긴 사진을 확인해보세요!
            </S.PostListInfo>
            <S.PostListContainer>
              {postList.map((post: any, idx: number) => (
                <S.FrameBox key={post.post_pk} id={post.frame}>
                  <ShowFrame
                    color={post.color}
                    frame={post.frame}
                    file1={post.images.image1}
                    file2={post.images.image2}
                    file3={post.images.image3}
                    file4={post.images.image4}
                    letter={post.letter}
                    author={post.title}
                    key={post.post_pk}
                    id={post.post_pk}
                  ></ShowFrame>
                  {modal === post.post_pk && (
                    <div style={{ zIndex: "3" }}>
                      <S.ModalBg
                        onClick={() => {
                          setModal(false);
                        }}
                      ></S.ModalBg>
                      <S.ModalPostContainer>
                        <S.ModalInfoContainer>
                          <div></div>
                          <p style={{ color: "white" }}>
                            {post.title}님의 사진
                          </p>
                          <div
                            style={{ color: "white" }}
                            onClick={() => {
                              setModal(false);
                            }}
                          >
                            X
                          </div>
                        </S.ModalInfoContainer>
                        <S.ModalPostWrapper>
                          <DetailFrame
                            color={post.color}
                            frame={post.frame}
                            file1={post.images.image1}
                            file2={post.images.image2}
                            file3={post.images.image3}
                            file4={post.images.image4}
                            letter={post.letter}
                            author={post.title}
                            id={post.post_pk}
                            master={boardMaster}
                          ></DetailFrame>
                        </S.ModalPostWrapper>
                        {/* <S.ModalInfoContainer> */}
                        <div
                          style={{
                            color: "white",
                            fontSize: "1.6rem",
                            textAlign: "center",
                            marginTop: "1rem",
                          }}
                        >
                          쪽지 아이콘을 클릭해서 메시지를 확인해보세요
                        </div>
                        {/* </S.ModalInfoContainer> */}
                      </S.ModalPostContainer>
                    </div>
                  )}
                </S.FrameBox>
              ))}
            </S.PostListContainer>
          </div>
        )}
        {postList.length > 0 &&
          session?.user?.email !== boardMaster &&
          !hidden && (
            <div style={{ width: "100%", marginBottom: "8rem" }}>
              <S.PostListInfo>
                좌우로 밀어서 {boardMasternickname}님의 사진을 확인해보세요!
              </S.PostListInfo>
              <S.PostListContainer>
                {postList.map((post: any, idx: number) => (
                  <S.FrameBox key={post.post_pk} id={post.frame}>
                    <ShowFrame
                      color={post.color}
                      frame={post.frame}
                      file1={post.images.image1}
                      file2={post.images.image2}
                      file3={post.images.image3}
                      file4={post.images.image4}
                      letter={post.letter}
                      author={post.title}
                      key={post.post_pk}
                      id={post.post_pk}
                    ></ShowFrame>
                    {modal === post.post_pk && (
                      <div style={{ zIndex: "3" }}>
                        <S.ModalBg
                          onClick={() => {
                            setModal(false);
                          }}
                        ></S.ModalBg>
                        <S.ModalPostContainer>
                          <S.ModalInfoContainer>
                            <div></div>
                            <p style={{ color: "white" }}>
                              {post.title}님의 사진
                            </p>
                            <div
                              style={{ color: "white" }}
                              onClick={() => {
                                setModal(false);
                              }}
                            >
                              X
                            </div>
                          </S.ModalInfoContainer>
                          <S.ModalPostWrapper>
                            <DetailFrame
                              color={post.color}
                              frame={post.frame}
                              file1={post.images.image1}
                              file2={post.images.image2}
                              file3={post.images.image3}
                              file4={post.images.image4}
                              letter={post.letter}
                              author={post.title}
                              key={post.post_pk}
                              id={post.post_pk}
                              master={boardMaster}
                            ></DetailFrame>
                          </S.ModalPostWrapper>
                        </S.ModalPostContainer>
                      </div>
                    )}
                  </S.FrameBox>
                ))}
              </S.PostListContainer>
            </div>
          )}
        {postList.length > 0 &&
          session?.user?.email !== boardMaster &&
          hidden && (
            <div style={{ width: "100%", marginBottom: "8rem" }}>
              <S.PostListInfo>
                {boardMasternickname}님의 앨범은 비공개 상태입니다!
              </S.PostListInfo>
              <S.PostListContainer>
                {postList.map((post: any, idx: number) => (
                  <S.FrameBox key={post.post_pk} id={post.frame}>
                    <ShowFrame
                      color={post.color}
                      frame={post.frame}
                      file1={blank}
                      file2={blank}
                      file3={blank}
                      file4={blank}
                      letter={post.letter}
                      author={post.title}
                      key={post.post_pk}
                      id={post.post_pk}
                    ></ShowFrame>
                  </S.FrameBox>
                ))}
              </S.PostListContainer>
            </div>
          )}
        {postList.length === 0 && (
          <S.NoPostContainer>
            <S.NoPostInfo>
              아직 사진이 없어요 ㅠㅠ
              <br />
              링크를 공유해서 친구들과 추억을 나눠보세요!
              <Share currentUrl={currentUrl}></Share>
            </S.NoPostInfo>
          </S.NoPostContainer>
        )}
      </S.ControlContainer>
    </S.Container>
  );
}
