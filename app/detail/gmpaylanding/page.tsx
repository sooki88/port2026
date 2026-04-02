import MoveUpButton from "@/components/MoveUpButton";
import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import { Projects } from "@/lib/projects";
import Image from "next/image";

export default function GmpaylandingPage() {
  const project = Projects.find((item) => item.slug === "gmpaylanding");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center pb-16">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} textdark />
      <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h4>재미 요소와 즉시 이동 구조를 결합한 페이지 설계</h4>
        <h5 className="mt-4">
          홈 화면에서는 애니메이션과 자동 재생 슬라이드를 활용해 사용자의 흥미를
          유지하고, 주요 메뉴의 핵심 내용을 압축해 보여주어 관련 페이지로 바로
          이동할 수 있도록 구성했습니다. 또한 각 페이지에서는 내용에 맞는
          이미지를 적극적으로 활용해 신뢰감을 높이고, 서비스 정보를 더 쉽게
          이해할 수 있도록 했습니다.
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

        {/* <h4 className="mt-20">
          CEO 맞춤형 모임 참여와 개설을 위한 커뮤니티 구조
        </h4>
        <h5 className="mt-4">
          네트워킹, 지역, 업종, 취미 등 다양한 관심사를 기준으로 CEO 맞춤형
          모임을 만들고 참여할 수 있도록 구성했습니다. 모임 만들기는 3단계로
          나누어, 사용자가 한 번에 많은 정보를 입력하지 않아도 자연스럽게 개설을
          완료할 수 있도록 했습니다.
        </h5> */}
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
