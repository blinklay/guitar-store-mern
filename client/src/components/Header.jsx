import { useEffect, useRef, useState } from "react";
import UserBoard from "./UserBoard.jsx/UserBoard";
import Navigaion from "./Navigaion";
import AuthModal from "./AuthModal/AuthModal";

const headerClasses = {
  relative: "bg-white p-5 flex items-center justify-between",
  fixed:
    "fixed top-0 l-1/2 bg-white p-5 flex items-center justify-between bg-white max-w-[1420px] w-full z-22",
};

export default function Header() {
  const triggerRef = useRef(null);
  const [isHeaderLeave, setIsHeaderLeave] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsHeaderLeave(true);
        } else {
          setIsHeaderLeave(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={triggerRef}></div>
      <div
        className={isHeaderLeave ? headerClasses.fixed : headerClasses.relative}
      >
        <Navigaion />
        <UserBoard isAuthOpen={isAuthOpen} setIsAuthOpen={setIsAuthOpen} />

        {isAuthOpen && <AuthModal setIsAuthOpen={setIsAuthOpen} />}
      </div>
    </>
  );
}
