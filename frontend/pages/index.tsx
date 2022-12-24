import * as S from "styles/home/style";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Intro() {
  const router = useRouter();
  const { data: session, status } = useSession<any>({ required: false });
  const onClickEnter = () => {
    if (status === "authenticated") {
      console.log(session);
      router.push("signup");
    } else {
      signIn("google", { callbackUrl: "/signup" });
    }
  };
  const onClickCreate = () => {
    if (status === "authenticated") {
      console.log(session);
      router.push("signup");
    } else {
      signIn("google", { callbackUrl: "/signup" });
    }
  };
  return (
    <S.Container>
      <S.ContentContainer>
        <S.Title>일년네컷</S.Title>
        <S.SubTitle>너랑 나랑 사진으로 남긴 올해의 추억</S.SubTitle>
        <S.Btn onClick={onClickEnter}>내 앨범 들어가기</S.Btn>
        <S.Btn onClick={onClickCreate}>내 앨범 만들기</S.Btn>
        <button onClick={() => signOut()}>Sign Out</button>
        {session && <div>{session?.user?.email}</div>}
      </S.ContentContainer>
    </S.Container>
  );
}