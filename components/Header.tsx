"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();

  const homePaths = [
    "/",
    "/detail/nugulang",
    "/detail/imqalanding",
    "/detail/imqa",
    "/detail/gmpay",
    "/detail/copartner",
    "/detail/cotalk",
    "/detail/gmpaylanding",
    "/detail/hanasmart",
    "/detail/yogi",
    "/detail/partage",
  ];

  const editorialPaths = [
    "/editorial",
    "/detail/imqaguide",
    "/detail/ibooja",
    "/detail/trust",
    "/detail/collabo",
    "/detail/logo",
    "/detail/roopre",
    "/detail/cliner",
  ];

  const isEditorial = editorialPaths.includes(pathname);

  const [active, setActive] = useState<"home" | "editorial">(
    isEditorial ? "editorial" : "home",
  );

  useEffect(() => {
    if (editorialPaths.includes(pathname)) {
      setActive("editorial");
    } else if (homePaths.includes(pathname)) {
      setActive("home");
    }
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 flex h-14 md:h-16 items-center justify-center w-full gap-4 z-50 bg-white backdrop-blur-md border-b-1 border-main-gray-light/50">
      <Link
        href="/"
        title="홈으로 이동"
        aria-label="홈으로 이동"
        className="absolute left-4 md:left-8 hidden md:block top-3 md:top-[14px] text-main-gray-medium font-semibold text-2xl md:text-[28px] -tracking-[0.3px]"
      >
        남숙희입니다.
      </Link>

      <Link
        href="/"
        onClick={() => setActive("home")}
        title="UX/UI 작업물 보기"
        aria-label="UX/UI 작업물 보기"
        className="relative w-9 h-9 md:w-10 md:h-10"
      >
        <Image
          src="/tool_figma.webp"
          alt="피그마 버튼"
          fill
          className={`rounded-sm object-contain ${
            active === "home" ? "" : "grayscale opacity-50"
          }`}
          sizes="(max-width: 768px) 32px, 40px"
          priority
        />
      </Link>

      <Link
        href="/editorial"
        onClick={() => setActive("editorial")}
        title="에디토리얼 작업물 보기"
        aria-label="에디토리얼 작업물 보기"
        className="relative"
      >
        <div className="relative w-9 h-9 md:w-10 md:h-10">
          <Image
            src="/tool_photoshop.webp"
            alt="포토샵 버튼"
            fill
            className={`rounded-sm object-contain ${
              active === "editorial" ? "" : "grayscale opacity-50"
            }`}
            sizes="(max-width: 768px) 32px, 40px"
            priority
          />
        </div>

        <div className="absolute top-0 left-5 w-9 h-9 md:w-10 md:h-10">
          <Image
            src="/tool_ai.webp"
            alt="일러스트 버튼"
            fill
            className={`rounded-sm outline outline-[0.7px] outline-white object-contain z-10 ${
              active === "editorial" ? "" : "grayscale opacity-50"
            }`}
            sizes="(max-width: 768px) 32px, 40px"
            priority
          />

          {!isEditorial && (
            <div className="absolute inset-0 rounded-sm bg-white" />
          )}
        </div>
      </Link>
    </header>
  );
}
