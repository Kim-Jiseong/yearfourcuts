import * as S from "styles/home/style";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import intro from "public/img/intro.png";
export default function Intro() {
  const router = useRouter();
  const { data: session, status } = useSession<any>({ required: false });
  const [isKakaoBrower, setKakaoBrower] = useState(false);
  const onClickEnter = () => {
    if (isKakaoBrower) {
      alert(
        "카카오 인앱 브라우저에서는 로그인이 지원되지 않습니다. 다른 브라우저로 접속해주세요"
      );
    } else {
      if (status === "authenticated") {
        console.log(session);
        router.push("signup");
      } else {
        signIn("google", { callbackUrl: "/signup" });
      }
    }
  };
  const onClickCreate = () => {
    if (isKakaoBrower) {
      alert(
        "카카오 인앱 브라우저에서는 회원가입이 지원되지 않습니다. 다른 브라우저로 접속해주세요"
      );
    } else {
      if (status === "authenticated") {
        console.log(session);
        router.push("signup");
      } else {
        signIn("google", { callbackUrl: "/signup" });
      }
    }
  };

  useEffect(() => {
    const isKakao = navigator.userAgent.match("KAKAOTALK");
    console.log(navigator.userAgent);
    // alert(isKakao);
    setKakaoBrower(Boolean(isKakao));
  }, []);
  // console.log(process.env.NEXT_PUBLIC_BASE_URL);
  return (
    <S.Container>
      <S.ImageContainer>
        <img src={intro.src}></img>
      </S.ImageContainer>

      <S.ContentContainer>
        <S.Title>일년네컷</S.Title>
        <S.SubTitle>너랑 나랑 사진으로 남긴 올해의 추억</S.SubTitle>
        <S.Btn onClick={onClickEnter}>내 앨범 들어가기</S.Btn>
        {status === "authenticated" && (
          <S.Btn onClick={() => signOut()}>로그아웃</S.Btn>
        )}
        {status !== "authenticated" && (
          <S.Btn onClick={onClickCreate}>내 앨범 만들기</S.Btn>
        )}
        {/* {session && <div>{session?.user?.email}</div>} */}
        {/* {isKakaoBrower && <div>카카오임</div>}
        {!isKakaoBrower && <div>카카오 아님</div>} */}
        {/* {session && <div>{session?.user?.email}</div>} */}
      </S.ContentContainer>
    </S.Container>
  );
}
