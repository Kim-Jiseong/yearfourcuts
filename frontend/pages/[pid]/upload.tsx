import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import * as S from "styles/upload/style";
import { useRouter } from "next/router";
import axios from "axios";
import { useRecoilState } from "recoil";
import { frameAtom, colorAtom, pageAtom } from "atoms/atom";
import Header from "pages/components/header";
import { constSelector } from "recoil";
import Page1 from "pages/components/upload/page1";
import Page2 from "pages/components/upload/page2";
import Page3 from "pages/components/upload/page3";
export default function Upload() {
  const router = useRouter();
  const pid = router.query.pid;
  const [page, setPage] = useRecoilState(pageAtom);
  const { data: session, status } = useSession<any>({ required: false });

  const [frame, setFrame] = useRecoilState<any>(frameAtom);

  const [selColor, setSelColor] = useRecoilState<any>(colorAtom);

  const getPage = (pageNum: any) => {
    console.log(pageNum);
    setPage(pageNum);
  };

  return (
    <div>
      <Header page={page} pid={pid} getPage={getPage}></Header>
      {page === 1 && <Page1></Page1>}
      {page === 2 && <Page2></Page2>}
      {page === 3 && <Page3></Page3>}
    </div>
  );
}
