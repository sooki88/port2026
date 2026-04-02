import { PagesType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function PageButtons({ pages }: { pages: PagesType[] }) {
  return (
    <div className="w-full max-w-[1200px] flex justify-between py-4 px-4 md:px-6">
      {pages.map((page, idx) => (
        <Link
          key={`${page} ${idx}`}
          href={page.href}
          className="group flex items-center gap-1 text-xs -tracking-[0.2px] hover:font-semibold hover:underline rounded-full"
        >
          {idx == 0 && (
            // <div className="group-hover:bg-main-gray-light/20 rounded-full">
            //   <Image
            //     src="/arrow_left.svg"
            //     alt="앞 프로젝트로 이동"
            //     width={18}
            //     height={18}
            //   />
            // </div>

            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-main-black/80 transition-colors duration-200 group-hover:text-black"
            >
              <g opacity="0.8">
                <path
                  d="M10.7047 4.6868C10.8653 4.52622 11.131 4.52633 11.2917 4.6868C11.4523 4.84742 11.4523 5.11308 11.2917 5.27371L7.59244 8.9739L11.2917 12.6741C11.4522 12.8347 11.4523 13.1004 11.2917 13.261C11.2087 13.3438 11.1037 13.3821 10.9987 13.3821C10.8935 13.3821 10.7878 13.3441 10.7047 13.261L6.71158 9.26687C6.55111 9.10623 6.551 8.84053 6.71158 8.67996L10.7047 4.6868Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          )}
          {page.title}
          {idx == 1 && (
            // <div className="group-hover:bg-main-gray-light/20 rounded-full">
            //   <Image
            //     src="/arrow_right.svg"
            //     alt="다음 프로젝트로 이동"
            //     width={18}
            //     height={18}
            //   />
            // </div>

            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-main-black/80 transition-colors duration-200 group-hover:text-black"
            >
              <g opacity="0.8">
                <path
                  d="M6.71189 4.68658C6.87255 4.52634 7.13814 4.52636 7.2988 4.68658L11.2959 8.68365C11.3734 8.76124 11.4179 8.86677 11.4179 8.97759C11.4179 9.08838 11.3734 9.19398 11.2959 9.27154L7.2988 13.2676C7.2158 13.3506 7.11095 13.3896 7.00584 13.3897C6.90055 13.3897 6.79502 13.3507 6.71189 13.2676C6.55114 13.1069 6.55114 12.8405 6.71189 12.6797L10.414 8.97759L6.71189 5.27447C6.55114 5.11372 6.55114 4.84733 6.71189 4.68658Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          )}
        </Link>
      ))}
    </div>
  );
}
