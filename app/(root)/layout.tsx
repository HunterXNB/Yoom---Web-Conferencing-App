import StreamClientProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}
const RootLayout = ({ children }: IProps) => {
  return (
    <main>
      <StreamClientProvider>{children}</StreamClientProvider>
    </main>
  );
};

export default RootLayout;
