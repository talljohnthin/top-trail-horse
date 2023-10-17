import type { ReactElement } from "react";

import Navigation from "../navigation/Navigation";

const PageLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
export default PageLayout;
