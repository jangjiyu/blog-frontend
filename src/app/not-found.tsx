import { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <div>
      <div>404 Not Found</div>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
};

export default NotFound;
