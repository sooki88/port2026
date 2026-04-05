import MoveUpButton from "@/components/MoveUpButton";
import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import { Projects } from "@/lib/projects";
import Image from "next/image";

export default function YogiPage() {
  const project = Projects.find((item) => item.slug === "yogi");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center pb-16">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} />
      <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h4>서비스의 분위기와 사용성을 함께 전달하는 첫 경험 설계</h4>
        <h5 className="mt-4">
          서비스의 메인 컬러는 길거리 음식이 가장 활발하게 소비되는 밤의
          분위기와 포장마차의 노란 조명에서 착안해, 서비스의 정체성과 감성을
          시각적으로 담아냈습니다. 로그인 과정에서는 사용자가 선호하는 길거리
          음식을 선택할 수 있도록 구성해 취향을 파악하는 동시에, 지도 핀에
          사용된 음식 아이콘을 자연스럽게 학습할 수 있도록 했습니다. 또한
          코치마크를 통해 주요 기능과 사용 흐름을 안내해, 처음 접하는 사용자도
          서비스 구조를 쉽게 이해하고 사용할 수 있도록 설계했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/569] overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_yogi_1x2.webp"
            alt="요기거리 이미지"
            fill
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">현재 위치를 중심으로 설계한 지도 탐색 경험</h4>
        <h5 className="mt-4">
          ‘지도’ 페이지에서는 현재 위치를 중심으로 주변 길거리 음식을 탐색할 수
          있도록 지도와 카드 리스트 구조를 함께 제공하고, 핀 선택을 통해 상세
          정보까지 직관적으로 연결되도록 설계했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/901] overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_yogi_2x2.webp"
            alt="요기거리 이미지"
            fill
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">빠른 등록과 상세 입력을 나눈 참여형 등록 설계</h4>
        <h5 className="mt-4">
          ‘가게등록’ 페이지는 빠르게 등록할 수 있는 ‘간편 등록’과, 추가 정보를
          선택 입력할 수 있는 ‘더 입력하기’로 나누어 설계했습니다. 이를 통해
          등록 진입장벽은 낮추면서도, 길거리 음식점의 특성에 맞게 시간·요일별
          다른 위치와 다양한 상세 정보를 유연하게 담을 수 있도록 했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/770] overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_yogi_3x2.webp"
            alt="요기거리 이미지"
            fill
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">
          커뮤니티성과 개인화 경험을 더한 부가 페이지 구성
        </h4>
        <h5 className="mt-4">
          ‘얌얌쩝쩝’ 페이지는 길거리 음식 이야기와 맛집 정보를 피드 형태로
          탐색할 수 있게 해 커뮤니티 경험을 확장했고, ‘MY요거’ 페이지는 활동량에
          따라 브랜드 캐릭터와 점수가 변화하도록 구성해 개인화와 재미 요소를
          더했습니다. 이를 통해 단순 탐색을 넘어, 참여와 축적의 경험이
          이어지도록 설계했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/729] overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_yogi_4x2.webp"
            alt="요기거리 이미지"
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
