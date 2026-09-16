import MoveUpButton from "@/components/MoveUpButton";
import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import { Projects } from "@/lib/projects";
import Image from "next/image";

export default function MaltuPage() {
  const project = Projects.find((item) => item.slug === "maltu");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center pb-16">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} textdark/>
      <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h4>상황/관계에 따라 달라지는 말투를 설정값으로 구조화</h4>
        <h5 className="mt-4">
          같은 내용도 회사에서는 전문적으로, 연인에게는 다정하게 표현합니다. 관계에 따라 자연스럽게 달라지는 언어를 ‘회사·연인·외국인·직접 만들기’ 프리셋으로 구분하고, 존댓말 여부, 답변 길이, 표현 방식, 추가 요청과 피할 표현을 조합해 나만의 말투를 만들 수 있도록 설계했습니다. ‘회사·연인’ 프리셋에는 상황별 기본값과 화면에 드러나지 않는 세부 설정값을 적용해 사용자가 쉽게 시작할 수 있도록 했습니다. 다만 정해진 말투를 강요하지 않고 모든 항목을 수정할 수 있게 제공했으며, AI 변환 시에도 숨겨진 기본값보다 사용자가 직접 설정한 값을 우선하도록 설계했습니다. 복잡한 설정을 한 화면에 나열하는 대신 ‘상황 선택 → 말투 설정 → 실제 문장 테스트’의 3단계로 나누어, 사용자가 변환 결과를 직접 확인하고 조정한 뒤 저장할 수 있도록 구성했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/1173 overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_maltu1x2.webp"
            alt="말투 이미지"
            fill
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">
          AI가 필요 없는 반복 문장을 더 빠른 경로로 설계
        </h4>
        <h5 className="mt-4">
          업무 인사나 회의 공지처럼 자주 사용하는 문구 또는 SNS 게시물 작성시 고정적으로 들어가는 문구는 AI가 새로 생성할 필요가 없다고 판단했습니다. 사용자가 짧은 단축키와 바뀔 문장을 미리 등록하고, 입력값이 단축키와 정확히 일치하면 AI 요청 없이 저장된 문장으로 즉시 변환되도록 설계했습니다. 이를 통해 사용자는 대기 없이 반복 문장을 입력할 수 있고, 서비스는 불필요한 AI 비용과 사용량 차감을 줄일 수 있습니다. 단축키 등록은 설정 화면을 복잡하게 만들지 않도록 바텀시트로 분리하고, 등록한 내용은 단축키 → 바뀔 문장 → 삭제 구조로 빠르게 확인할 수 있게 구성했습니다.
        </h5>
        <div className="relative w-full aspect-[1136/589] overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_maltu2x2.webp"
            alt="말투 이미지"
            fill
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">번역보다 ‘상황에 맞는 외국어 표현’에 집중</h4>
        <h5 className="mt-4">
          외국어 기능은 단어를 그대로 바꾸는 번역기가 아니라, 해외 거래처·고객·외주 파트너에게 자연스럽고 정확하게 의사를 전달하는 업무 도구로 기획했습니다. 사용자는 한국어로 편하게 작성하고, 영어·일본어·중국어·스페인어·프랑스어·독일어 등의 언어와 ‘자연스럽게·정중하게·친근하게·원문에 충실하게’ 같은 번역 느낌을 선택할 수 있습니다. 외국인 모드에서는 일반 말투 설정의 존댓말과 답변 길이를 제거하고, 말투 이름·번역 언어·번역 느낌·단축키만 남겼습니다. 기존 화면 구조와 컴포넌트는 유지하면서 해당 상황에 필요하지 않은 입력을 덜어내 인지 부담을 낮췄습니다.
        </h5>
        <div className="relative w-full aspect-[1136/649] overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_maltu3x2.webp"
            alt="말투 이미지"
            fill
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>

        <h4 className="mt-20">
          개인정보 보호를 약관이 아닌 인터랙션으로 설계
        </h4>
        <h5 className="mt-4">
          AI가 다른 앱의 입력창을 확인하는 서비스인 만큼, 보안 안내를 약관에만 의존하지 않고 말투 바의 동작 자체로 이해할 수 있도록 설계했습니다. 사용자는 말투 바를 사용할 앱을 직접 선택하고, 허용한 앱에서도 말투 바를 펼친 동안에만 현재 포커스된 입력창을 확인할 수 있습니다. 바를 접거나 키보드를 닫고, 다른 앱 또는 입력창으로 이동하면 입력 확인과 진행 중인 AI 요청이 즉시 중단됩니다. 금융·결제 앱과 비밀번호·인증번호 같은 민감한 입력창에서는 사용자 설정과 관계없이 말투 바가 나타나지 않도록 했습니다. 변환 결과 역시 자동으로 전송하지 않고 사용자가 결과를 직접 선택했을 때 입력창에만 적용되도록 해 최종 통제권을 사용자에게 남겼습니다.
        </h5>
        <div className="relative w-full aspect-[1136/590] overflow-hidden mt-16 rounded-xs bg-main-gray-light/30">
          <Image
            src="/p_maltu4x2.webp"
            alt="말투 이미지"
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
