import type { Metadata } from "next";
import * as styles from "./layout.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { navBarLinks } from "./_const/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>
    <html lang="ko-KR">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <nav className={styles.topbar}>
          <a href="https://github.com/jangjiyu" target="_blank" rel="noopener noreferrer" className={styles.topbarLogo}>
            <Image src="/github-mark-white.svg" alt="github Logo" width={30} height={30} priority />
          </a>
          <div className={styles.topbarLargeScreen}>
            {navBarLinks.map((link) => {
              return (
                <Link href={link.route} key={link.label} className={styles.topBarContent}>
                  <Image src={link.src} alt={link.alt} width={30} height={30} priority />
                  <p className={styles.topBarText}>{link.label}</p>
                </Link>
              );
            })}
          </div>
          <div>
            {/* <a
              href="https://github.com/jangjiyu"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubBtn}
            >
              <Image src="/github-mark-white.svg" alt="github Logo" width={30} height={30} priority />
            </a> */}
            <Link href="/auth/login" className={styles.login}>
              login
            </Link>
          </div>
        </nav>
        <div className={styles.mainContentContainer}>
          <main className={styles.mainContent}>{children}</main>
        </div>
      </body>
    </html>
  );
}
