import { GraphicProjects } from "@/lib/graphicprojects";
import MoveUpButton from "@/components/MoveUpButton";
import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import Image from "next/image";

export default function ClinerPage() {
  const project = GraphicProjects.find((item) => item.slug === "cliner");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center pb-16">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} />
      <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h4>라인 일러스트와 포인트 컬러로 완성한 미래지향적 비주얼 톤</h4>
        <h5 className="mt-4">
          흰 배경과 검정 라인 일러스트를 중심으로 제품, 조립 과정, 사용 예시,
          액세서리 착용 모습을 일관된 스타일로 표현했습니다. 여기에 핵심
          포인트만 메인 컬러로 강조해, 설명서 전체에 미래지향적이고 기계적인
          분위기가 드러나도록 설계했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/674] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_cliner_1x15.webp"
            alt="c-liner 제품설명서 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <div className="relative w-full aspect-[1136/1061] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_cliner_2x15.webp"
            alt="c-liner 제품설명서 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <div className="relative w-full aspect-[1136/1365] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_cliner_3x15.webp"
            alt="c-liner 제품설명서 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>
      </div>
      <MoveUpButton />
    </div>
  );
}
