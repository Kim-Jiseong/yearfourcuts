import * as S from "styles/home/style";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  console.log(router.query);
  const { data: session, status } = useSession<any>({ required: false });
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
      <S.ContentContainer>
        <S.Title>일년네컷</S.Title>
      </S.ContentContainer>
    </S.Container>
  );
}
