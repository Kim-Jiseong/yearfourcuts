import * as S from "styles/main/style";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "pages/components/header";
export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession<any>({ required: false });
  console.log(session);
  const [boardMaster, setBoardMaster] = useState();
  const [modal, setModal] = useState(false);
  const [hidden, setHidden] = useState();
  const [boardMasternickname, setBoardMasterNickname] = useState();
  // console.log(router.query.pid);
  const pid = router.query.pid;
  const getBoardMaster = () => {
    axios
      .post(process.env.NEXT_PUBLIC_BASE_URL + "accounts/nickname/pid", {
        pid: router.query.pid,
      })
      .then(function (res) {
        console.log(res);
        console.log("유저", res.data.email);
        setBoardMaster(res.data.email);
        setHidden(res.data.hidden);
        setBoardMasterNickname(res.data.nickname);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (pid) {
      getBoardMaster();
    }
  }, [pid]);
  const onClickEnter = () => {
    if (status === "authenticated") {
      console.log(session);
      router.push("signup");
    } else {
      signIn("google", { callbackUrl: "/signup" });
    }
  };
  return (
    <S.Container>
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
          사진 올리기
        </S.Btn>
        여기{hidden && <p>숨긴 유저입니다</p>}
        {session?.user?.email !== boardMaster && (
          <S.BtnWrapper>
            <S.SubBtn1 color="#FFD275" onClick={onClickEnter}>
              내 앨범 만들기
            </S.SubBtn1>
            <S.SubBtn2 color="white" onClick={onClickEnter}>
              내 앨범 보기
            </S.SubBtn2>
          </S.BtnWrapper>
        )}
      </S.ControlContainer>
    </S.Container>
  );
}
