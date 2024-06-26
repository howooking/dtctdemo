"use client";

import useScrollPosition from "@/hooks/useScrollPosition";
import MainLogo from "./main-logo";
import Menu from "./menu";
import Container from "../common/container";

export default function Navbar() {
  const { isScrollTop } = useScrollPosition();

  return (
    <header
      className="fixed w-full z-50"
      style={
        isScrollTop
          ? {
              backgroundColor: "transparent",
              transition: "all ease-in-out 500ms",
            }
          : {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              transition: "all ease-in-out 500ms",
            }
      }
    >
      <Container>
        <nav
          className="flex justify-between items-center max-w-[1780px] mx-auto"
          style={
            isScrollTop
              ? {
                  paddingTop: 32,
                  paddingBottom: 32,
                  transition: "all ease-in-out 200ms",
                }
              : {
                  paddingTop: 16,
                  paddingBottom: 16,
                  transition: "all ease-in-out 200ms",
                }
          }
        >
          <MainLogo />

          <Menu />

          {/* <MobileMenu isScrollTop={isScrollTop} /> */}
        </nav>
      </Container>
    </header>
  );
}
