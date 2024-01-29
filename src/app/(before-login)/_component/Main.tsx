import Image from "next/image";
import * as styles from "./main.css";
import Link from "next/link";

export default function Main() {
  return (
    <main>
      <div>
        <p>blog</p>
        <div>
          <a href="https://github.com/jangjiyu" target="_blank" rel="noopener noreferrer">
            <Image
              src="/github-mark-white.svg"
              alt="github Logo"
              // className={styles.vercelLogo}
              width={24}
              height={24}
              priority
            />
          </a>
          <Link href="/auth/login" className={styles.login}>
            {/* <Link>로 접근할 경우 인터셉터 라우팅이 있을 경우 인터셉팅 적용 됨 (url로 직접 접근할 경우엔 X)
            -> /auth/login이 아닌 @modal/(.)auth/login으로 인터셉팅 돼서 기존 page 위에 모달이 뜨게 됨 (cf. 인터셉트 라우팅은 "use client"; 클라이언트에서 라우팅 할 때만 적용됨) */}
            login
          </Link>
        </div>
      </div>
    </main>
  );
}
