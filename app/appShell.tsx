'use client';

import { useState, useEffect } from "react";
import SideBar from "./components/SideBar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Fallback if animationend never fires
  useEffect(() => {
    if (!showIntro || ready) return;
    const fallbackTimer = setTimeout(() => {
      sessionStorage.setItem("introSeen", "1");
      setReady(true);
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, [showIntro, ready]);

  const OnIntroDone = () => {
    // sessionStorage.setItem("introSeen", "1");
    setTimeout(() => {
      setReady(true);
      setShowIntro(false);
    }, 250);
  };

  return (
    <>
      {/* Site only after intro finishes */}
        {ready && (
            <main className="flex flex-col lg:flex-row">
          <aside className="sticky top-0 w-full bg-darkGrayBlue lg:bg-slightGrayBlue lg:h-screen z-50 lg:w-72 lg:border-r border-white/10">
            <SideBar ready={ready} onIntroDone={OnIntroDone} />
          </aside>
          <div className="flex-1">{children}</div>
        </main>
        )}
        
      

      {/* Typewriter only — first visit */}
      {showIntro && (
        <div className="fixed inset-0 z-[100] flex items-start bg-darkGrayBlue p-10">
          <span className="flex text-4xl text-white">
            <span>$</span>
            <span
              className="inline-block overflow-hidden whitespace-nowrap animate-typewriter"
              onAnimationEnd={OnIntroDone}
            >
              whoami
            </span>
            <span className="inline-block animate-blinkCursor ml-1">|</span>
          </span>
        </div> 
      )}
    </>
  );
}
