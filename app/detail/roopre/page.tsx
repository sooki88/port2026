import { GraphicProjects } from "@/lib/graphicprojects";
import MoveUpButton from "@/components/MoveUpButton";
import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import Image from "next/image";

export default function RooprePage() {
  const project = GraphicProjects.find((item) => item.slug === "roopre");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center pb-16">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} />
      <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h4>10개 섹션과 컬러 구분으로 정리한 접이식 관광 가이드</h4>
        <h5 className="mt-4">
          뒷면은 접었을 때 21면으로 구성되는 접이식 관광 가이드 리플릿으로, 역사
          명소, 맛집, 호텔, 페스티벌, 기본 회화 등 총 10개의 섹션으로 나누어
          관광 정보와 안내 콘텐츠를 체계적으로 담았습니다. 각 섹션에는 서로 다른
          컬러를 적용해 정보의 성격을 쉽게 구분할 수 있도록 하고, 펼쳐 보거나
          접어서 볼 때도 필요한 내용을 보다 직관적으로 탐색할 수 있도록
          설계했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/178] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_roopre_1x15.webp"
            alt="루프리텔캄 여행 지도형 가이드 리플릿 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <div className="relative w-full aspect-[1136/838] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_roopre_2x15.webp"
            alt="루프리텔캄 여행 지도형 가이드 리플릿 이미지"
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
