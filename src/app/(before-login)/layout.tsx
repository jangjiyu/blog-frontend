import { ReactNode } from "react";
import * as styles from "./layout.css";
import Link from "next/link";
import Image from "next/image";
import Category from "./_component/Category";
import NavBar from "./_component/NavBar";

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

export default async function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      <header className={styles.listSectionWrapper}>
        <section className={styles.listSection}>
          <div className={styles.listSectionFixed}>
            <Link className={styles.logo} href="/">
              <div className={styles.logoPill}>
                <Image src="/github-mark-white.svg" alt="blog logo" width={30} height={30}></Image>
              </div>
            </Link>
            <nav>
              <Category />
            </nav>
          </div>
        </section>
      </header>
      <div className={styles.mainSectionWrapper}>
        <section className={styles.mainSection}>
          <main className={styles.main}>
            {children} {modal}
          </main>
          <div className={styles.nav}>
            <nav>
              <NavBar />
            </nav>
            <Link href="/auth/login" className={styles.login}>
              login
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

// 주소가 'https://~~~'일 때는 children -> page.tsx, modal -> default.tsx
// 주소가 'https://~~~/auth/login'일 때는 children -> auth/login/page.tsx, modal -> @modal/auth/login/page.tsx
