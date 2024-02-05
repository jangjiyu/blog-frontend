import * as styles from "./navBar.css";
import { navBarLinks } from "@/app/_const/nav-bar";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      {navBarLinks.map((link) => {
        return (
          <Link href={link.route} key={link.label} className={styles.topBarContent}>
            <Image src={link.src} alt={link.alt} width={30} height={30} priority />
            <p className={styles.topBarText}>{link.label}</p>
          </Link>
        );
      })}
    </div>
  );
}
