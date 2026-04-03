"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isHome =
    pathname === "/" ||
    pathname === "/detail/imqalanding" ||
    pathname === "/detail/imqa" ||
    pathname === "/detail/gmpay" ||
    pathname === "/detail/copartner" ||
    pathname === "/detail/cotalk" ||
    pathname === "/detail/gmapylanding" ||
    pathname === "/detail/hanasmart" ||
    pathname === "/detail/yogi" ||
    pathname === "/detail/partage";
  const isEditorial =
    pathname === "/editorial" ||
    pathname === "/detail/imqaguide" ||
    pathname === "/detail/ibooja" ||
    pathname === "/detail/trust" ||
    pathname === "/detail/collabo" ||
    pathname === "/detail/logo" ||
    pathname === "/detail/roopre" ||
    pathname === "/detail/cliner";

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
        title="UX/UI 작업물 보기"
        aria-label="UX/UI 작업물 보기"
        className="relative w-9 h-9 md:w-10 md:h-10"
      >
        <Image
          src={isHome ? "/tool_figma.webp" : "/tool_figma_gry.webp"}
          alt="피그마 버튼"
          fill
          className="rounded-sm object-contain"
          sizes="(max-width: 768px) 32px, 40px"
          priority
        />
      </Link>

      <Link
        href="/editorial"
        title="에디토리얼 작업물 보기"
        aria-label="에디토리얼 작업물 보기"
        className="relative"
      >
        <div className="relative w-9 h-9 md:w-10 md:h-10">
          <Image
            // src="/tool_photoshop_gry.webp"
            src={
              isEditorial ? "/tool_photoshop.webp" : "/tool_photoshop_gry.webp"
            }
            alt="포토샵 버튼"
            fill
            className="rounded-sm object-contain"
            sizes="(max-width: 768px) 32px, 40px"
            priority
          />
        </div>
        <div className="absolute top-0 left-5 w-9 h-9 md:w-10 md:h-10">
          <Image
            // src="/tool_ai_gry.webp"
            src={isEditorial ? "/tool_ai.webp" : "/tool_ai_gry.webp"}
            alt="일러스트 버튼"
            fill
            className="rounded-sm outline outline-[0.7px] outline-white object-contain"
            sizes="(max-width: 768px) 32px, 40px"
            priority
          />
        </div>
      </Link>

      {/* <Link href="/" className="relative ml-5 w-9 h-9 md:w-10 md:h-10">
        <Image
          src="/tool_nextjs_gry.webp"
          alt="넥스트js 버튼"
          fill
          className="rounded-sm object-contain"
          sizes="(max-width: 768px) 32px, 40px"
          priority
        />
      </Link> */}

      {/* <header className="flex relative px-8 h-16 items-center justify-center w-full gap-4">
      <h2 className="absolute left-8 text-main-gray-medium font-semibold text-[28px] -tracking-[0.3px]">
        남숙희입니다.
      </h2> */}
    </header>
  );
}
