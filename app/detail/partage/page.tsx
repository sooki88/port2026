import MoveUpButton from "@/components/MoveUpButton";
import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import { Projects } from "@/lib/projects";
import Image from "next/image";

export default function PartagePage() {
  const project = Projects.find((item) => item.slug === "partage");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center pb-16">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} />
      <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h4>현재 시청 중인 콘텐츠를 직관적으로 보여주는 채널 리스트 홈</h4>
        <h5 className="mt-4">
          홈 화면은 현재 개설된 채널을 카드형 리스트로 구성해, 사용자가 함께
          시청할 수 있는 방을 한눈에 탐색할 수 있도록 설계했습니다. 현재 재생
          중인 영상의 썸네일을 크게 노출해 콘텐츠를 빠르게 인지할 수 있게 하고,
          방장, 방 제목, 태그, 실시간 참여 인원 등 기본 정보를 함께 제공해
          채널의 성격과 분위기를 직관적으로 파악할 수 있도록 했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/441] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_partage_1x2.webp"
            alt="partage 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">콘텐츠 우선순위에 맞춰 설계한 채널 레이아웃</h4>
        <h5 className="mt-4">
          채널 페이지는 영상, 플레이리스트, 채팅의 세 영역으로 구성하되, 가장
          중요한 콘텐츠인 영상을 가장 크게, 그리고 상단에 배치해 시청 흐름이
          자연스럽게 시작되도록 설계했습니다. 태블릿과 모바일 환경에서는 서비스
          내 우선순위에 따라 영상, 채팅, 플레이리스트 순으로 세로 배치해 작은
          화면에서도 핵심 경험이 먼저 전달되도록 했습니다. 또한 사용자가 공간을
          더 효율적으로 활용할 수 있도록 플레이리스트와 채팅 영역을 접고 펼칠 수
          있게 구성해, 시청 상황에 따라 화면을 유연하게 조정할 수 있도록
          했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/548] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_partage_2x2.webp"
            alt="partage 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h5 className="mt-16">
          플레이리스트 영역에서는 이전 재생 영상, 현재 재생 중인 영상, 다음 재생
          예정 영상을 한눈에 구분할 수 있도록 하고, 영상의 순서 이동, 삭제,
          추가가 가능하도록 구성해 채널 운영의 유연성을 높였습니다. 채팅에서는
          닉네임 클릭 시 사용자 정보와 기능 버튼을 확인할 수 있게 했고, 채널 내
          권한은 배지로 시각화해 역할을 직관적으로 구분할 수 있도록 했습니다.
          <br />
          또한 채팅 삭제 권한이 있는 경우에는 메시지 호버 시 삭제 버튼이
          노출되도록 해, 필요한 관리 기능만 맥락에 맞게 드러나도록 설계했습니다.
          이 외에도 채널 설정과 공유를 위한 모달을 제공해, 시청뿐 아니라 채널
          운영까지 하나의 흐름 안에서 처리할 수 있도록 구성했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/548] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_partage_3x2.webp"
            alt="partage 이미지"
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
