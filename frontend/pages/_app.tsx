import GlobalStyle from "styles/GlobalStyle";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

// export default function App({ Component, pageProps, session }: AppProps) {
export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </RecoilRoot>
    </SessionProvider>
  );
}
