import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function UsernameLayout({ children }: Props) {
  return <div>유저 블로그 레이아웃 {children}</div>;
}
