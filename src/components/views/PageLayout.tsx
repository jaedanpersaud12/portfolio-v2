import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="pt-12 md:pt-[120px] relative">{children}</main>;
};

export default PageLayout;
