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
        {/* <h4>종이 신청서의 익숙함을 유지한 화면 구조</h4>
        <h5 className="mt-4">
          기존 종이 신청서의 포맷과 작성 흐름을 반영해, 새로운 인터페이스에서도
          이질감 없이 자연스럽게 사용할 수 있도록 설계했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/445] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_hanasmart_1x2.webp"
            alt="하나 스마트창구 인터페이스 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div> */}

        <h4 className="mt-20">종이 신청서의 익숙함을 유지한 화면 구조</h4>
        <h5 className="mt-4">
          기존 종이 신청서의 포맷과 작성 흐름을 반영해, 새로운 인터페이스에서도
          이질감 없이 자연스럽게 사용할 수 있도록 설계했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/745] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_hanasmart_2x2-4.webp"
            alt="하나 스마트창구 인터페이스 이미지"
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
