import Image from "next/image";
import Link from "next/link";

// 카드
interface CardProps {
  title: string;
  href: string;
  tools: string[];
  imgsrc: string;
  imgsize: number[];
  tags: string[];
  isPriority?: boolean;
}

export function Card({
  title,
  href,
  tools,
  imgsrc,
  imgsize,
  tags,
  isPriority = false,
}: CardProps) {
  return (
    <Link href={href} className="group flex flex-col">
      <div
        className="relative w-full overflow-hidden rounded-xs bg-main-gray-light/30"
        style={{ aspectRatio: `${imgsize[0]} / ${imgsize[1]}` }}
      >
        <Image
          src={imgsrc}
          alt={title}
          fill
          priority={isPriority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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
