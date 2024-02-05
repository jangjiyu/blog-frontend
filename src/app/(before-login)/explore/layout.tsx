import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function ExploreLayout({ children }: Props) {
  return <div>{children}</div>;
}
