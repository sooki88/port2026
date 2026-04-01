import MoveUpButton from "@/components/MoveUpButton";
import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import { Projects } from "@/lib/projects";
import Image from "next/image";

export default function HanasmartPage() {
  const project = Projects.find((item) => item.slug === "hanasmart");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center pb-16">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} />
      <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h4>일관된 구조로 설계한 조회·발행·상세 플로우</h4>
        <h5 className="mt-4">
          현금영수증은 리스트 확인, 발행, 상세 조회가 자연스럽게 이어지는 구조로
          설계했고, 결제와 정산 역시 동일한 패턴과 플로우를 적용했습니다. 이를
          통해 사용자는 기능별 차이를 새롭게 학습하지 않아도, 일관된 방식으로
          주요 업무를 빠르게 처리할 수 있습니다.
        </h5>
        <div className="relative w-full aspect-[1136/758] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_gmpaylanding_1x2.webp"
            alt="굿모닝페이 랜딩페이지 이미지"
            fill
            priority
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
        <div className="relative w-full aspect-[1136/726] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_gmpaylanding_2x2.webp"
            alt="굿모닝페이 랜딩페이지 이미지"
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
