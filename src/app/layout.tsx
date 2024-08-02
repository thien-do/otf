import { MainBox } from "components/main/box";
import { SideBox } from "components/side/box";
import { Metadata } from "next";
import { ReactElement, ReactNode } from "react";
import "styles/index.css";

export const metadata: Metadata = {
  title: "OTF Show",
  description: "An interactive showcase of OpenType features",
};

function RootLayout(props: { children: ReactNode }): ReactElement {
  const { children } = props;

  return (
    <html lang="en">
      <body className="bg-F7F text-2D3">
        <MainBox>{children}</MainBox>
        <SideBox />
      </body>
    </html>
  );
}

export default RootLayout;
