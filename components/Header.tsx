import Link from "next/link";

export default function Header() {
  return (
    <header className="flex  px-8 h-16 items-center w-full gap-4">
      <Link
        href="/"
        className="text-main-gray-medium font-semibold text-[28px] -tracking-[0.3px]"
      >
        남숙희입니다.
      </Link>
      {/* <header className="flex relative px-8 h-16 items-center justify-center w-full gap-4">
      <h2 className="absolute left-8 text-main-gray-medium font-semibold text-[28px] -tracking-[0.3px]">
        남숙희입니다.
      </h2> */}
    </header>
  );
}
