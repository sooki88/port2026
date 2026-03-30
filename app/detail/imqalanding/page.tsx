import MoveUpButton from "@/components/MoveUpButton";
import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import { Projects } from "@/lib/projects";
import Image from "next/image";

export default function ImqalandingPage() {
  const project = Projects.find((item) => item.slug === "imqalanding");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center pb-16">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} />
      <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h4>서비스 구조와 비즈니스 활용 가치를 함께 보여주는 정보 설계</h4>
        <h5 className="mt-4">
          두번째 섹션에서는 서비스가 동작하는 구조를 4단계로 시각화하고, 각
          단계가 순차적으로 강조되도록 구성해 IMQA의 도입 흐름을 쉽게 이해할 수
          있도록 했습니다. 세 번째 섹션에서는 고객사 로고를 롤링 방식으로 노출해
          신뢰도를 높이고, 어떤 비즈니스에서 어떻게 활용될 수 있는지 자연스럽게
          전달했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/600] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_imqalanding_1.webp"
            alt="imqa 랜딩페이지 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">
          주요 기능 이해와 최신성 전달을 위한 후반부 섹션 구성
        </h4>
        <h5 className="mt-4">
          네번째 섹션에서는 대표 화면과 핵심 설명을 함께 배치하고, 화면을 두
          개씩 번갈아 보여주어 실제 사용 모습을 간접적으로 전달했습니다. 이를
          통해 IMQA의 주요 기능을 빠르게 이해할 수 있도록 했습니다. 다섯 번째
          섹션에서는 최신 뉴스를 롤링 방식으로 노출해, 서비스의 최신성과
          지속적인 운영 흐름이 자연스럽게 전달되도록 구성했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/600] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_imqalanding_2.webp"
            alt="imqa 랜딩페이지 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">
          온라인 접수와 직접 문의를 함께 제공하는 문의 페이지
        </h4>
        <h5 className="mt-4">
          웹에서 바로 문의를 남기는 방식과 약도·전화번호를 통한 직접 문의 방식을
          한 페이지에 함께 구성했습니다. 동시에 문의 내용과 유입 경로를 함께
          수집할 수 있도록 해, 사용자 접점과 문의 분석이 자연스럽게 이어지도록
          설계했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/600] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_imqalanding_3.webp"
            alt="imqa 랜딩페이지 이미지"
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
