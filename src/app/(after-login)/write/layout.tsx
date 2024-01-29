import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function WriteLayout({ children }: Props) {
  return <div>글작성 레이아웃 {children}</div>;
}
