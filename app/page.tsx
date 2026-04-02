import {
  MobileColumn,
  PcColumn1,
  PcColumn2,
  PcColumn3,
  TabletColumn1,
  TabletColumn2,
} from "@/lib/maincolumns";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-row justify-center w-full p-4 md:p-6 lg:p-8 gap-4 md:gap-6 lg:gap-8">
      <div className="hidden xl:flex flex-col gap-8 w-full">
        {PcColumn1.map((col) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
          />
        ))}
      </div>

      <div className="hidden xl:flex flex-col gap-8 w-full">
        {PcColumn2.map((col) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
          />
        ))}
      </div>

      <div className="hidden xl:flex flex-col gap-8 w-full">
        {PcColumn3.map((col) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
          />
        ))}
      </div>

      {/* 태블릿 */}
      <div className="hidden md:flex xl:hidden flex-col gap-8 w-full">
        {TabletColumn1.map((col) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
          />
        ))}
      </div>
      <div className="hidden md:flex xl:hidden flex-col gap-8 w-full">
        {TabletColumn2.map((col) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
          />
        ))}
      </div>

      {/* 모바일 */}
      <div className="md:hidden flex flex-col gap-8 w-full">
        {MobileColumn.map((col) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
          />
        ))}
      </div>
    </main>
  );
}

// 카드
interface CardProps {
  title: string;
  href: string;
  tools: string[];
  imgsrc: string;
  imgsize: number[];
  tags: string[];
}

function Card({ title, href, tools, imgsrc, imgsize, tags }: CardProps) {
  return (
    <Link href={href} className="flex flex-col">
      <div
        className="relative w-full overflow-hidden rounded-xs"
        style={{ aspectRatio: `${imgsize[0]} / ${imgsize[1]}` }}
      >
        <Image
          src={imgsrc}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1200px) 100vw, 33vw"
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <h3 className="text-base font-semibold">{title}</h3>
        <div className="flex gap-1">
          {tools.map((tool) => (
            <Image
              key={`${title} ${tool}`}
              src={tool}
              alt={tool}
              width={24}
              height={24}
              className="rounded-xs"
            />
          ))}
        </div>
      </div>
      <div className="flex gap-[6px] mt-1 w-4/5 flex-wrap">
        {tags.map((tag) => (
          <div
            key={`${title} ${tag}`}
            // className="flex items-center justify-center shrink-0 px-1 h-[17px] bg-main-gray-light/50 text-[11px]"
            className="flex items-center justify-center shrink-0 px-[6px] pt-[2px] pb-[2px] bg-main-gray-light/50 text-[11px] leading-[1.3]"
            // className="flex items-center justify-center shrink-0 px-[6px] h-[17px] bg-main-gray-light/50 text-[11px] leading-[1.3]"
          >
            {tag}
          </div>
        ))}
      </div>
    </Link>
  );
}
