import { PagesType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function PageButtons({ pages }: { pages: PagesType[] }) {
  return (
    <div className="w-full max-w-[1200px] flex justify-between py-4 px-3 md:px-5">
      {pages.map((page, idx) => (
        <Link
          key={`${page} ${idx}`}
          href={page.href}
          className="group flex items-center gap-1 text-xs -tracking-[0.2px] hover:font-semibold hover:underline rounded-full"
        >
          {idx == 0 && (
            <div className="group-hover:bg-main-gray-light/20 rounded-full">
              <Image
                src="/arrow_left.svg"
                alt="앞 프로젝트로 이동"
                width={18}
                height={18}
              />
            </div>
          )}
          {page.title}
          {idx == 1 && (
            <div className="group-hover:bg-main-gray-light/20 rounded-full">
              <Image
                src="/arrow_right.svg"
                alt="다음 프로젝트로 이동"
                width={18}
                height={18}
              />
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
