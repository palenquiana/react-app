import { FC, ReactNode } from "react";
import { Main } from "../Main";

import { Navbar } from "../Navbar";

type Props = {
  children: ReactNode;
  hideNav?: boolean;
  page?: string;
};

const Layout: FC<Props> = ({ children, hideNav, page }) => {
  return (
    <>
      {!hideNav && <Navbar />}
      <Main className={`page page-${page}`}>{children}</Main>
    </>
  );
};

export { Layout };
