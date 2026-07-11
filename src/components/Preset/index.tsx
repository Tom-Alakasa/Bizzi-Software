import type React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

type presetChildren = {
  children: React.ReactNode;
};

export function Preset({ children }: presetChildren) {
  return (
    <>
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </>
  );
}
