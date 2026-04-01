import MoveUpButton from "@/components/MoveUpButton";
import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import { Projects } from "@/lib/projects";
import Image from "next/image";

export default function GmpayPage() {
  const project = Projects.find((item) => item.slug === "gmpay");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center pb-16">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} />
      <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h4>한눈에 보는 정산 브리핑과 빠른 기능 접근</h4>
        <h5 className="mt-4">
          상단에는 이번 달 정산 브리핑 카드를 배치해 총 정산금액과 결제금액을
          한눈에 확인할 수 있도록 했고, 클릭 시 캘린더를 통해 일자별 결제·취소
          건수까지 직관적으로 파악할 수 있도록 구성했습니다. 하단에는 자주
          사용하는 기능 6가지를 퀵버튼으로 묶어 배치해, 주요 기능에 빠르게
          접근할 수 있도록 했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/650] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_gmpay_1x2.webp"
            alt="gmpay 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">일관된 구조로 설계한 조회·발행·상세 플로우</h4>
        <h5 className="mt-4">
          현금영수증은 리스트 확인, 발행, 상세 조회가 자연스럽게 이어지는 구조로
          설계했고, 결제와 정산 역시 동일한 패턴과 플로우를 적용했습니다. 이를
          통해 사용자는 기능별 차이를 새롭게 학습하지 않아도, 일관된 방식으로
          주요 업무를 빠르게 처리할 수 있습니다.
        </h5>
        <div className="relative w-full aspect-[1136/558] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_gmpay_2x2.webp"
            alt="gmpay 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">
          성과 확인과 분석에 초점을 맞춘 대리점용 홈 구성
        </h4>
        <h5 className="mt-4">
          대리점용 홈 화면은 사용자 역할에 맞춰 정보와 기능을 다르게 구성하고,
          정산 브리핑에 ‘월별 대시보드 보기’를 추가해 결제·수수료 현황과 가맹점
          현황을 한눈에 볼 수 있도록 했습니다. 또한 성과 분석은 매출 순위와
          객단가 순위를 메달과 트로피 형식으로 표현해, 보다 직관적이고 흥미롭게
          확인할 수 있도록 설계했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/654] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_gmpay_3x2.webp"
            alt="gmpay 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>
        <div className="relative w-full aspect-[1136/803] overflow-hidden mt-20 rounded-xs">
          <Image
            src="/p_gmpay_4x2.webp"
            alt="gmpay 이미지"
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
