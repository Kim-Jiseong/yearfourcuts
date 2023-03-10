import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import * as S from "styles/signup/style";
import { useRouter } from "next/router";
import axios from "axios";
// import { useSession } from "next-auth/react";
export default function Signup() {
  const router = useRouter();
  const [err, setErr] = useState(false);
  const [input, setInput] = useState<any>();
  const [loading, setLoading] = useState(true);
  // type Session = {
  //   accessToken: any | string;
  //   idToken: any | string;
  // };
  const { data: session, status } = useSession<any>({ required: false });

  const userSignUp = () => {
    console.log("회원가입", session);
    if (session?.idToken) {
      axios
        .post(process.env.NEXT_PUBLIC_BASE_URL + "accounts/google/callback/", {
          accessToken: session.accessToken,
        })
        .then(function (res) {
          console.log(res);
          if (res.data.status === "202 UserAlreadyExist" && res.data.nickname) {
            router.push(res.data.pid);
            // console.log(res.data.pid);
          } else if (
            res.data.status === "202 UserAlreadyExist" &&
            !res.data.nickname
          ) {
            setLoading(false);
          } else {
            setLoading(false);
          }
        })
        .catch(function (error) {
          console.log("에러발생");
          signIn("google", { callbackUrl: "/signup" });
          console.log(error);
        });
    } else {
      axios
        .post(process.env.NEXT_PUBLIC_BASE_URL + "accounts/kakao/callback/", {
          accessToken: session?.accessToken,
          email: session?.user?.email,
        })
        .then(function (res) {
          console.log(res);
          if (res.data.status === "202 UserAlreadyExist" && res.data.nickname) {
            router.push(res.data.pid);
            // console.log(res.data.pid);
          } else if (
            res.data.status === "202 UserAlreadyExist" &&
            !res.data.nickname
          ) {
            setLoading(false);
          } else {
            setLoading(false);
          }
        })
        .catch(function (error) {
          console.log("에러발생");
          signIn("kakao", { callbackUrl: "/signup" });
          console.log(error);
        });
    }
  };
  const setNickname = () => {
    console.log("닉네임");
    axios
      .post(process.env.NEXT_PUBLIC_BASE_URL + "accounts/nickname/change", {
        email: session?.user?.email,
        nickname: input,
      })
      .then(function (res) {
        console.log(res);
        if (res.data.status === "201 Updated") {
          setErr(false);
          router.push(res.data.pid);
        } else if (res.data.status === "300 Bad Request") {
          setErr(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (status === "authenticated") {
      // console.log("유저 생성 시작");
      userSignUp();
    }
  }, [status]);
  if (loading === true) {
    return (
      <S.Container>
        <S.ContentContainer>로딩중...</S.ContentContainer>
      </S.Container>
    );
  } else {
    if (status === "authenticated") {
      return (
        <S.Container>
          <S.SubTitle>이름을 정해주세요</S.SubTitle>
          <S.NicknameInput
            type="text"
            onChange={(event) => {
              console.log(event.target.value);
              setInput(event.target.value);
            }}
          ></S.NicknameInput>
          {err && <S.ErrMsg>유효한 이름이 아닙니다</S.ErrMsg>}
          <S.Btn onClick={setNickname}>다음</S.Btn>
        </S.Container>
      );
    } else {
      return (
        <div>
          회원가입 중 문제가 발생하였습니다
          <br />
          <button onClick={() => signIn("google")}>Sign in</button>
        </div>
      );
    }
  }
}
