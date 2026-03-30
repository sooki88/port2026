import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-row justify-center w-full p-4 md:p-8 gap-4 md:gap-8">
      <div className="flex flex-col gap-8 w-full">
        {Column1.map((col) => (
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

      <div className="flex flex-col gap-8 w-full">
        {Column2.map((col) => (
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

      <div className="flex flex-col gap-8 w-full">
        {Column3.map((col) => (
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
            className="flex items-center shrink-0 px-1 h-[17px] bg-main-gray-light/50 text-[11px]"
          >
            {tag}
          </div>
        ))}
      </div>
    </Link>
  );
}

const Column1 = [
  {
    title: "IMQA 랜딩페이지",
    href: "/detail/imqalanding",
    tools: ["/tool_figma.webp", "/tool_nextjs.webp"],
    imgsrc: "/thb_imqalanding.webp",
    imgsize: [597.33, 535],
    tags: [
      "UX/UI · Publishing",
      "Web · Tablet · Mobile",
      "어니컴",
      "데이터시각화",
      "2026",
    ],
  },
  {
    title: "씨오파트너 웹앱",
    href: "/detail/copartner",
    tools: ["/tool_figma.webp"],
    imgsrc: "/thb_copartner.webp",
    imgsize: [597.33, 414],
    tags: ["UX/UI", "Web · Tablet", "런인베스트", "금융", "2023"],
  },
  {
    title: "하나 스마트창구 태블릿 인터페이스",
    href: "/detail/copartner",
    tools: ["/tool_xd.webp", "/tool_ai.webp"],
    imgsrc: "/thb_hana.webp",
    imgsize: [597.33, 455],
    tags: ["UI", "Tablet", "하나은행", "금융", "2025"],
  },
];

const Column2 = [
  {
    title: "IMQA 모니터링 웹앱",
    href: "/detail/copartner",
    tools: ["/tool_figma.webp"],
    imgsrc: "/thb_imqa.webp",
    imgsize: [597.33, 374],
    tags: ["UX/UI", "Web", "어니컴", "데이터시각화", "2025"],
  },
  {
    title: "씨오톡 모바일앱",
    href: "/detail/copartner",
    tools: ["/tool_figma.webp"],
    imgsrc: "/thb_yogei.webp",
    imgsize: [597.33, 731],
    tags: ["UX/UI", "Mobile", "런인베스트", "금융", "2022"],
  },
  {
    title: "요기거리 모바일앱",
    href: "/detail/copartner",
    tools: ["/tool_figma.webp"],
    imgsrc: "/thb_yogei.webp",
    imgsize: [597.33, 486],
    tags: ["UX/UI", "Mobile", "로컬커뮤니티", "2022"],
  },
];

const Column3 = [
  {
    title: "굿모닝페이 모바일앱",
    href: "/detail/copartner",
    tools: ["/tool_figma.webp", "/tool_flutter.webp"],
    imgsrc: "/thb_gmpay.webp",
    imgsize: [597.33, 542],
    tags: ["UX/UI · Publishing", "Mobile", "코리아페이먼트", "금융", "2025"],
  },
  {
    title: "굿모닝페이 홈페이지",
    href: "/detail/copartner",
    tools: ["/tool_figma.webp", "/tool_html.webp"],
    imgsrc: "/thb_gmpaylanding.webp",
    imgsize: [597.33, 455],
    tags: [
      "UX/UI · Publishing",
      "Web · Tablet · Mobile",
      "코리아페이먼트",
      "금융",
      "2025",
    ],
  },
  {
    title: "Partage",
    href: "/detail/copartner",
    tools: ["/tool_figma.webp", "/tool_nextjs.webp"],
    imgsrc: "/thb_yogei.webp",
    imgsize: [597.33, 449],
    tags: [
      "UX/UI · Partial Publishing",
      "Web · Tablet · Mobile",
      "콘텐츠 커뮤니티",
      "2024",
    ],
  },
];
