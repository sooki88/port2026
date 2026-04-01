import MoveUpButton from "@/components/MoveUpButton";
import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import { Projects } from "@/lib/projects";
import Image from "next/image";

export default function ImqaPage() {
  const project = Projects.find((item) => item.slug === "imqa");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center pb-16">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} />
      <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h4>컴팩트한 화면 구성</h4>
        <h5 className="mt-4">
          데이터 가독성을 높이기 위해 불필요한 여백을 최소화하고, 사이드 영역에
          있던 필터를 상단으로 재배치해 정보 중심의 컴팩트한 레이아웃으로
          개선하였습니다.
        </h5>
        <div className="flex gap-3 mt-16">
          {COMPACTSUM.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-1 text-[14px] -tracking-[1px] text-main-black w-full"
            >
              {item.title}
              <span className="text-4xl leading-[1.3] font-semibold">
                {item.percent}
                <span className="text-xl leading-[1.3] font-semibold align-baseline">
                  {item.text}
                </span>
              </span>
            </div>
          ))}
        </div>

        <div className="relative w-full aspect-[1136/280] overflow-hidden mt-8 rounded-xs">
          <Image
            src="/p_imqa_1x2.webp"
            alt="imqa 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>
        <div className="relative w-full aspect-[1136/280] overflow-hidden mt-2 rounded-xs">
          <Image
            src="/p_imqa_2x2.webp"
            alt="imqa 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">플루이드 타이포그래피</h4>
        <h5 className="mt-4">
          대형 모니터 환경에 맞춰 화면이 넓어질수록 폰트와 여백이 부드럽게
          확장되도록 설계했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/400] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_imqa_3x2.webp"
            alt="imqa 랜딩페이지 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">조회/수정 흐름 분리</h4>
        <h5 className="mt-4">
          테이블의 행 클릭과 [수정] 클릭의 진입 흐름을 분리해, 조회 목적의
          사용자는 읽기 전용 상태로, 수정 목적의 사용자는 편집 가능한 상태로
          바로 진입할 수 있도록 개선했습니다. 이를 통해 단순 조회 시의 불필요한
          조작을 줄이고, 수정 작업은 더 빠르게 수행할 수 있도록 했습니다.
        </h5>
        <div className="flex items-center mt-16">
          <span className="text-sm font-semibold w-[92px] shrink-0">
            개선 전
          </span>
          <Box>행 클릭 or 수정 버튼 클릭</Box>
          <Image
            src="/arrowdot_right.webp"
            alt="imqa 랜딩페이지 이미지"
            width={40}
            height={6}
            className="max-w-10 h-[6px]"
          />
          <Box>사이드패널 열림</Box>
          <Image
            src="/arrowdot_right.webp"
            alt="imqa 랜딩페이지 이미지"
            width={40}
            height={6}
            className="max-w-10 h-[6px]"
          />
          <Box>수정 버튼 클릭</Box>
          <Image
            src="/arrowdot_right.webp"
            alt="imqa 랜딩페이지 이미지"
            width={40}
            height={6}
            className="max-w-10 h-[6px]"
          />
          <Box>수정 상태</Box>
        </div>
        <div className="flex items-center mt-5">
          <span className="text-sm font-semibold w-[92px] shrink-0">
            개선 후
          </span>
          <Box bg>행 클릭</Box>
          <Image
            src="/arrowdot_right.webp"
            alt="화살표"
            width={40}
            height={6}
            className="max-w-10 h-[6px]"
          />
          <Box bg>사이드패널 열림</Box>
          <Image
            src="/arrowdot_right.webp"
            alt="화살표"
            width={40}
            height={6}
            className="max-w-10 h-[6px]"
          />
          <Box bg>조회 상태</Box>
        </div>
        <div className="flex items-center ml-[92px] mt-2">
          <Box bg>수정 버튼 클릭</Box>
          <Image
            src="/arrowdot_right.webp"
            alt="화살표"
            width={40}
            height={6}
            className="max-w-10 h-[6px]"
          />
          <Box bg>사이드패널 열림</Box>
          <Image
            src="/arrowdot_right.webp"
            alt="화살표"
            width={40}
            height={6}
            className="max-w-10 h-[6px]"
          />
          <Box bg>수정 상태</Box>
        </div>

        <div className="relative w-full aspect-[1136/1176] overflow-hidden mt-8 rounded-xs">
          <Image
            src="/p_imqa_4x2.webp"
            alt="화살표"
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

const COMPACTSUM = [
  { title: "좌측 내비게이션 영역", percent: "14", text: "% 절약" },
  { title: "페이지 헤더 영역", percent: "20", text: "% 절약" },
  { title: "필터 영역", percent: "80", text: "% 절약" },
  { title: "대시보드 가시 영역", percent: "60", text: "% 확보" },
];

function Box({
  bg = false,
  children,
}: {
  bg?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`w-full max-w-[231px] py-[10px] text-sm leading-[1.5] text-center border border-main-gray-light rounded-xs px-2 ${bg && "bg-main-gray-light"}`}
    >
      {children}
    </div>
  );
}

const FLOW1 = [
  "행 클릭 or 수정 버튼 클릭",
  "사이드패널 열림",
  "수정 버튼 클릭",
  "수정 상태",
];

const FLOW2 = ["행 클릭", "사이드패널 열림", "조회 상태"];

const FLOW3 = ["수정버튼 클릭", "사이드패널 열림", "수정 상태"];
