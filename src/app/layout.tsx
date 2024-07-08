import { Metadata } from "next";
import "styles/index.css";

import Main from "components/main";
import Side from "components/side";
import { ReactElement } from "react";

export const metadata: Metadata = {
  title: 'otf.show',
  description: 'An interactive showcase of OpenType features',
  icons: "/favicon.svg"
}

export default function RootLayout({ children }: { children: React.ReactNode }): ReactElement {
  return (
    <html lang="en">
      <body className="bg-F7F text-2D3">
        <Main>{children}</Main>
        <Side />
      </body>
    </html>
  )
}
