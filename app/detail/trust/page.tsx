import { GraphicProjects } from "@/lib/graphicprojects";
import MoveUpButton from "@/components/MoveUpButton";
import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import Image from "next/image";

export default function TrustPage() {
  const project = GraphicProjects.find((item) => item.slug === "trust");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center pb-16">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} textdark />
      <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h4>육각형 모티프를 활용한 브랜드 일관성 설계</h4>
        <h5 className="mt-4">
          이 리플릿은 총 4면으로 구성된 접이식 형식으로, 제한된 지면 안에서도
          정보를 단계적으로 전달할 수 있도록 설계했습니다. 각 페이지에는 브랜드
          로고와 심볼에 사용된 육각형 형태를 시각 요소로 반영해, 전체 리플릿
          안에서 브랜드의 정체성과 통일감이 자연스럽게 이어지도록 구성했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/348] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_trust_1x15.webp"
            alt="100년 리빙트러스트 센터 리플릿 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <div className="relative w-full aspect-[1136/576] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_trust_2x15.webp"
            alt="100년 리빙트러스트 센터 리플릿 이미지"
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
