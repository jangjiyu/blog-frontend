import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

export default async function Layout({ children, modal }: Props) {
  return (
    <div>
      {children} {modal}
    </div>
  );
}

// 주소가 'https://~~~'일 때는 children -> page.tsx, modal -> default.tsx
// 주소가 'https://~~~/auth/login'일 때는 children -> auth/login/page.tsx, modal -> @modal/auth/login/page.tsx
