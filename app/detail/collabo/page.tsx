import { GraphicProjects } from "@/lib/graphicprojects";
import MoveUpButton from "@/components/MoveUpButton";
import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import Image from "next/image";

export default function CollaboPage() {
  const project = GraphicProjects.find((item) => item.slug === "collabo");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center pb-16">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} textdark />
      <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h4>정보 성격에 따라 컬러를 나눈 접이식 리플릿 설계</h4>
        <h5 className="mt-4">
          76콜라보 현장지원센터 가이드북은 총 8페이지로 구성된 접이식
          리플릿입니다. 센터 소개와 안내 영역은 하나은행의 메인 컬러인 그린을
          부드러운 톤으로 적용해 안정적이고 친근한 인상을 전달했고, 펼쳤을 때
          가운데 위치한 두 페이지는 소상공인 대상 금융상품 내용을 강조하기 위해
          서브 컬러인 레드를 부드럽게 사용해 정보의 성격이 자연스럽게 구분되도록
          했습니다. 또한 지면이 지루하게 느껴지지 않도록 텍스트 사이사이에 도형
          요소를 활용하고, 여백과 정보 배치를 조정해 보다 리듬감 있게 읽히도록
          구성했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/578] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_collabo_1x15.webp"
            alt="76콜라보 현장지원센터 가이드북 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <div className="relative w-full aspect-[1136/578] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_collabo_2x15.webp"
            alt="76콜라보 현장지원센터 가이드북 이미지"
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <div className="relative w-full aspect-[1136/235] overflow-hidden mt-16 rounded-xs">
          <Image
            src="/p_collabo_3x15.webp"
            alt="76콜라보 현장지원센터 가이드북 이미지"
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
