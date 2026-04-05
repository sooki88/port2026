import MoveUpButton from "@/components/MoveUpButton";
import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import { Projects } from "@/lib/projects";
import Image from "next/image";

export default function CotalkPage() {
  const project = Projects.find((item) => item.slug === "cotalk");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center pb-16">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} textdark />
      <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h4>홈에서 시작되는 커뮤니티와 맞춤형 정보 탐색</h4>
        <h5 className="mt-4">
          홈의 ‘씨오톡’ 카드는 CEO들의 고민과 일상을 나누는 ‘대나무숲’과,
          노무·경영·세무 등의 질문에 전문가 답변을 받을 수 있는 ‘전문가 Q&A’로
          연결되어 커뮤니티와 실무형 정보 교환이 함께 이루어지도록 했습니다. ‘AI
          정책자금 추천’ 카드는 회사 기본 정보와 입력 완성도에 따른 추천
          정확도를 보여주고, 매칭도가 높은 정책자금과 고용지원금을 우선 노출한
          뒤 전체 리스트 탐색으로 이어지도록 구성했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/695] overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_cotalk_1x2.webp"
            alt="씨오톡 이미지"
            fill
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">
          CEO 맞춤형 모임 참여와 개설을 위한 커뮤니티 구조
        </h4>
        <h5 className="mt-4">
          네트워킹, 지역, 업종, 취미 등 다양한 관심사를 기준으로 CEO 맞춤형
          모임을 만들고 참여할 수 있도록 구성했습니다. 모임 만들기는 3단계로
          나누어, 사용자가 한 번에 많은 정보를 입력하지 않아도 자연스럽게 개설을
          완료할 수 있도록 했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/695] overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_cotalk_2x2.webp"
            alt="씨오톡 이미지"
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
