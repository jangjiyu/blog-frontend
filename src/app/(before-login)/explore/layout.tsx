import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function ExploreLayout({ children }: Props) {
  return <div>둘러보기 레이아웃 {children}</div>;
}
