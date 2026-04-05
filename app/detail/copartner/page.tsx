import MoveUpButton from "@/components/MoveUpButton";
import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import { Projects } from "@/lib/projects";
import Image from "next/image";

export default function CopartnerPage() {
  const project = Projects.find((item) => item.slug === "copartner");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center pb-16">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} />
      <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h4>핵심 고객 정보와 관리 흐름을 빠르게 파악할 수 있는 CRM 구조</h4>
        <h5 className="mt-4">
          ‘고객관리’ 페이지에서는 고객 리스트의 조회, 검색, 수정, 직접 등록까지
          하나의 흐름 안에서 처리할 수 있도록 설계해 반복적인 고객 관리 업무를
          더 효율적으로 처리할 수 있도록 했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/561] overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_copartner_1x2.webp"
            alt="씨오파트너 이미지"
            fill
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>
        <div className="relative w-full aspect-[1136/1022] overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_copartner_2x2.webp"
            alt="씨오파트너 이미지"
            fill
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">컨설팅 활용까지 고려한 리포트 생성 경험 설계</h4>
        <h5 className="mt-4">
          ‘씨오리포트’는 회사와 출력 주제만 선택하면 자동으로 리포트가 생성되는
          구조로 설계해, 사용자의 문서 제작 부담을 줄였습니다. 동시에 표지
          디자인과 커버 정보 등 세부 옵션을 조정할 수 있도록 해, 자동화의
          편리함과 맞춤 설정의 유연성을 함께 제공하도록 했습니다. 생성된
          결과물은 재무설계 컨설팅에 바로 활용할 수 있도록 실무성을
          고려했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/1081] overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_copartner_3x2.webp"
            alt="씨오파트너 이미지"
            fill
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>
      </div>
      <MoveUpButton />
    </div>
  );
}
