import { GraphicProjects } from "@/lib/graphicprojects";
import MoveUpButton from "@/components/MoveUpButton";
import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import Image from "next/image";

export default function IboojaPage() {
  const project = GraphicProjects.find((item) => item.slug === "ibooja");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center pb-16">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} textdark />
      {/* <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h4>가이드의 성격에 따라 구분한 표지 콘셉트 설계</h4>
        <h5 className="mt-4">
          설치 가이드는 여러 요소가 차곡차곡 쌓이거나 정교하게 맞물려 하나의
          시스템으로 완성되는 이미지를 통해, 설치 과정의 구조성과 안정감을
          시각적으로 표현했습니다. 반면 매니저·사용자·관리자 등 권한별 가이드는
          수많은 데이터가 모이고 연결되어 의미 있는 흐름을 만들어내는 IMQA의
          성능 모니터링 구조를 점과 선의 연결감으로 풀어냈습니다. 각 가이드의
          목적과 성격에 맞는 비주얼 콘셉트를 적용하면서도, 전체 시리즈 안에서는
          동일한 브랜드 톤과 통일감을 유지하도록 설계했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/775] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_imqaguide_1x15.webp"
            alt="imqa 가이드 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>
      </div> */}
      <MoveUpButton />
    </div>
  );
}
