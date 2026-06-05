import MoveUpButton from "@/components/MoveUpButton";
import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import { Projects } from "@/lib/projects";
import Image from "next/image";

export default function NugulangPage() {
  const project = Projects.find((item) => item.slug === "nugulang");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center pb-16">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} />
      <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h4>연애보다 활동 중심 경험을 강조한 가입 설계</h4>
        <h5 className="mt-4">
          회원가입 온보딩은 닉네임, 지역, 관심 활동, 선호 연령, 사진의
          5단계(본인인증 제외)로 구성했습니다. 관심 활동은 총 7개의 카테고리로
          나누어 이후 친구 추천에 활용할 수 있도록 했고, 선호 연령은 구체적인
          나이나 출생연도 대신 ‘나를 기준으로 위·아래 몇 살까지 가능한지’를
          설정하도록 기획해, 사용자가 실제 일상에서 관계를 설명하는 방식과
          가깝게 느껴지도록 했습니다. 또한 사진 등록 단계에서는 얼굴 사진보다
          활동 사진을 업로드하도록 유도해, 서비스가 ‘연인’보다 ‘친구’, ‘외적인
          조건’보다 ‘취미와 관심사’를 중심으로 한다는 점이 초기 경험에서부터
          자연스럽게 전달되도록 설계했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/589] overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_nugulang1x2-3.webp"
            alt="누구랑 이미지"
            fill
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">
          단계적 입력과 조건형 필드로 설계한 활동 모집 플로우
        </h4>
        <h5 className="mt-4">
          ‘같이해요’ 페이지는 함께하고 싶은 활동을 등록하고, 이를 통해 같이할
          친구를 모집할 수 있는 페이지입니다. 등록 과정은 2단계로 나누어,
          1단계에서는 언제 어디서 만날지와 같은 기본 약속 정보를 입력하고, 이를
          완료하면 바로 아래에서 2단계인 활동 계획 입력 필드가 이어서 나타나도록
          구성했습니다. 이는 한 번에 많은 입력 항목을 보여주기보다, 사용자가
          단계별로 나누어 집중할 수 있게 하고 스크롤에 대한 부담도 줄이기 위한
          설계입니다. 또한 이 서비스는 일반적인 ‘친구’ 모집뿐 아니라, 소정의
          수고비를 받고 전문적으로 도움을 주는 ‘가이드’도 함께 찾을 수 있다는
          점이 특징입니다. 이에 따라 2단계 활동 계획에서 ‘가이드’를 선택하면,
          가이드 비용을 설정할 수 있는 추가 필드가 조건에 따라 노출되도록 구성해
          상황에 맞는 입력 경험을 제공했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/1322] overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_nugulang2x2-2.webp"
            alt="누구랑 이미지"
            fill
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">친구 탐색 및 메시지 관리 화면</h4>
        <h5 className="mt-4">
          ‘친구찾기’ 페이지는 기본 정보, 관심 활동 태그, 매너 지수 등 중요한
          정보를 담은 카드형 리스트로 구성해 여러 프로필을 빠르게 탐색할 수
          있도록 했습니다. 상세 페이지에서는 찜, 채팅, 약속 제안까지 이어지도록
          했고, 약속 제안은 액션시트로 바로 응답할 수 있게 해 상호작용의 속도를
          높였습니다.’메시지’ 페이지는 1:1 채팅을 위한 ‘메시지’ 탭과 약속 일정을
          확인할 수 있는 ‘약속’ 탭으로 나누어, 대화와 일정 관리가 하나의 흐름
          안에서 이어지도록 구성했습니다. 약속 리스트는 ‘만남중’, ‘약속성사’,
          ‘수락대기’, ‘거절됨’, ‘종료’ 등 상태에 따라 구분되며, 각 상태에 맞는
          버튼과 액션 구성을 다르게 적용해 사용자가 현재 상황에 맞는 다음 행동을
          직관적으로 선택할 수 있도록 설계했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/615] overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_nugulang3x2-2.webp"
            alt="누구랑 이미지"
            fill
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">
          보상 관리와 매너지수 형성을 연결한 사용자 경험
        </h4>
        <h5 className="mt-4">
          ‘MY’ 페이지는 내 정보와 설정뿐 아니라 포인트, 가이드 비용, 리워드 확인
          및 출금까지 가능한 개인 관리 화면으로 구성했습니다. 또한 약속 종료
          후에는 후기 작성을 자연스럽게 유도하고, 이를 바탕으로 매너지수를
          산정해 사용자 간 신뢰 형성에 활용할 수 있도록 설계했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/606] overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_nugulang4x2-2.webp"
            alt="누구랑 이미지"
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
