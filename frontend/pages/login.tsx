import { signIn, signOut, useSession } from "next-auth/react";
// import { useSession } from "next-auth/react";
export default function Login() {
  const { data: session, status } = useSession<any>({ required: false });
  //   console.log("useSession", useSession);
  if (status === "authenticated") {
    console.log("session", session);
    return (
      <div>
        Welcome. {session?.user.email}
        <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  } else {
    return (
      <div>
        you are not signed in
        <br />
        <button
          onClick={() =>
            signIn(
              "google"
              // { callbackUrl: "/foo" }
            )
          }
        >
          Sign in
        </button>
      </div>
    );
  }
}
