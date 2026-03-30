// import Link from "next/link";

// export default function Header() {
//   return (
//     <header className="fixed top-0 left-0 right-0 flex px-8 h-16 items-center w-full gap-4 z-50 bg-white/1 backdrop-blur-md">
//       <Link
//         href="/"
//         className="text-main-gray-medium font-semibold text-[28px] -tracking-[0.3px]"
//       >
//         남숙희입니다.
//       </Link>
//       {/* <header className="flex relative px-8 h-16 items-center justify-center w-full gap-4">
//       <h2 className="absolute left-8 text-main-gray-medium font-semibold text-[28px] -tracking-[0.3px]">
//         남숙희입니다.
//       </h2> */}
//     </header>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex h-14 md:h-16 items-center justify-center w-full gap-4 z-50 bg-white backdrop-blur-md">
      <Link
        href="/"
        className="absolute left-4 md:left-8 hidden md:block top-3 md:top-[14px] text-main-gray-medium font-semibold text-2xl md:text-[28px] -tracking-[0.3px]"
      >
        남숙희입니다.
      </Link>

      {/* <Link href="/" className="">
        <Image
          src="/tool_figma.webp"
          alt="피그마 버튼"
          className="rounded-sm"
          width={40}
          height={40}
          priority
        />
      </Link> */}
      <Link href="/" className="relative w-9 h-9 md:w-10 md:h-10">
        <Image
          src="/tool_figma.webp"
          alt="피그마 버튼"
          fill
          className="rounded-sm object-contain"
          sizes="(max-width: 768px) 32px, 40px"
          priority
        />
      </Link>

      <Link href="/" className="relative">
        <div className="relative w-9 h-9 md:w-10 md:h-10">
          <Image
            src="/tool_photoshop_gry.webp"
            alt="포토샵 버튼"
            fill
            className="rounded-sm object-contain"
            sizes="(max-width: 768px) 32px, 40px"
            priority
          />
        </div>
        <div className="absolute top-0 left-4 w-9 h-9 md:w-10 md:h-10">
          <Image
            src="/tool_ai_gry.webp"
            alt="일러스트 버튼"
            fill
            className="rounded-sm outline outline-[0.7px] outline-white object-contain"
            sizes="(max-width: 768px) 32px, 40px"
            priority
          />
        </div>
      </Link>

      <Link href="/" className="relative ml-4 w-9 h-9 md:w-10 md:h-10">
        <Image
          src="/tool_nextjs_gry.webp"
          alt="넥스트js 버튼"
          fill
          className="rounded-sm object-contain"
          sizes="(max-width: 768px) 32px, 40px"
          priority
        />
      </Link>

      {/* <header className="flex relative px-8 h-16 items-center justify-center w-full gap-4">
      <h2 className="absolute left-8 text-main-gray-medium font-semibold text-[28px] -tracking-[0.3px]">
        남숙희입니다.
      </h2> */}
    </header>
  );
}
