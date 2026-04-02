import { ProjectsType } from "./types";

export const Projects: ProjectsType[] = [
  {
    slug: "imqa",
    title: "IMQA 모니터링 웹앱",
    description:
      "품질관리팀이 서비스 품질 데이터를 빠르게 모니터링하고 분석할 수 있도록 설계한 웹앱입니다. 복잡한 정보를 명확하게 구조화하고, 필요한 데이터에 직관적으로 접근할 수 있는 흐름을 만드는 데 집중했습니다.",
    href: "/detail/imqa",
    mainimgsrc: ["/main_imqa_pcx2-3.webp", "/main_imqa_mobilex2-3.webp"],
    tags: [
      "UX/UI 디자인 100%",
      "Figma",
      "Web",
      "어니컴",
      "데이터시각화",
      "2025~2026",
    ],
    links: [],
    pages: [
      {
        value: "prev",
        title: "IMQA 랜딩페이지",
        href: "/detail/imqalanding",
      },
      { value: "next", title: "굿모닝페이 모바일앱", href: "/detail/gmpay" },
    ],
    mainimgtext: {
      title: "목적에 따라 다르게 설계한 대시보드 경험",
      description:
        "통합 대시보드는 여러 서비스의 실시간 상태를 한눈에 빠르게 파악해야 하는 화면이기 때문에, HTTP 요청량과 정상·에러 응답 비율을 즉시 확인할 수 있는 ① ‘리퀘스트 모니터’를 추가했습니다. 이를 통해 중요한 상태 변화를 빠르게 인지하고 이상 징후를 놓치지 않도록 했습니다. 반면 서비스별/MY 대시보드는 사용자가 직접 지표와 시각화 방식을 선택해 화면을 구성하는 환경을 고려해, 차트 전용 컬러 시스템과 자유로운 배치·리사이즈가 가능한 ② 그리드 시스템을 설계했습니다. 이를 통해 사용자 목적에 맞춰 유연하게 대시보드를 조합하고 활용할 수 있도록 했습니다.",
    },
  },
  {
    slug: "imqalanding",
    title: "IMQA 랜딩페이지",
    description:
      "IMQA의 기능과 가치를 명확하게 전달하기 위해 설계한 랜딩페이지입니다. 서비스의 복잡한 내용을 직관적으로 이해할 수 있도록 정보 구조와 시각적 흐름을 단순하고 명확하게 구성했습니다.",
    href: "/detail/imqalanding",
    mainimgsrc: [
      "/main_imqalanding_pcx2.webp",
      "/main_imqalanding_mobilex2.webp",
    ],
    tags: [
      "UX/UI 디자인 100%",
      "퍼블리싱 100%",
      "Figma",
      "Next.js",
      "Web, Tablet, Mobile",
      "어니컴",
      "데이터시각화",
      "2026",
    ],
    links: [
      { url: "imqa.io", icon: "/link.svg" },
      {
        url: "https://github.com/sooki88/imqalanding.git",
        icon: "/github.svg",
      },
    ],
    pages: [
      { value: "prev", title: "HOME", href: "/" },
      { value: "next", title: "IMQA 모니터링 웹앱", href: "/detail/imqa" },
    ],
    mainimgtext: {
      title: "실시간 데이터 흐름을 시각화한 히어로 영역",
      description:
        "배경의 파동형 그래픽은 하나의 서비스를 이용하는 다양한 사용자 세션과 데이터가 실시간으로 수집·흐르는 모습을 시각적으로 표현한 요소입니다. 또한 메인 카피를 순차적으로 전환해, IMQA가 ①데이터를 실시간으로 확인하고 ②성능을 관리하며 ③문제의 원인까지 파악할 수 있는 서비스임을 단계적으로 전달하고자 했습니다.",
    },
  },
  {
    slug: "gmpay",
    title: "굿모닝페이 모바일앱",
    description:
      "굿모닝페이는 익일 정산을 기반으로 카드결제, 온라인결제, 수기결제, 정기 자동결제, SNS결제 등 다양한 결제 방식을 지원하고 결제 내역을 통합 관리할 수 있는 서비스입니다. 또한 실제 결제를 운영하는 소상공인 가맹점용과, 이들을 관리하는 대리점용으로 구분되어 각 사용자 역할에 맞는 기능을 제공합니다.",
    href: "/detail/gmpay",
    mainimgsrc: ["/main_gmpay_pcx2.webp", "/main_gmpay_mobilex2.webp"],
    tags: [
      "UX/UI 디자인 100%",
      "퍼블리싱 100%",
      "Figma",
      "Flutter",
      "Mobile",
      "코리아페이먼트",
      "금융",
      "2025",
    ],
    links: [],
    pages: [
      { value: "prev", title: "IMQA 모니터링 웹앱", href: "/detail/imqa" },
      { value: "next", title: "씨오파트너 웹앱", href: "/detail/copartner" },
    ],
    mainimgtext: {
      title: "핵심 정보와 빠른 접근을 중심으로 구성한 홈 화면",
      description:
        "가맹점앱 홈화면 상단에는 이번 달 정산 브리핑 카드를 배치해 총 정산금액과 결제금액을 한눈에 확인할 수 있도록 했고, 하단에는 자주 사용하는 기능 6가지를 퀵버튼으로 묶어 배치해, 주요 기능에 빠르게 접근할 수 있도록 했습니다.",
    },
  },
  {
    slug: "gmpaylanding",
    title: "굿모닝페이 홈페이지",
    description:
      "굿모닝페이의 핵심 서비스와 도입 정보를 전달하는 랜딩페이지입니다. 소상공인 사용자를 주요 타깃으로 설정하고, 금융 서비스의 진입장벽을 낮추기 위해 친근하고 직관적이며 젊은 인상의 UX/UI로 풀어냈습니다.",
    href: "/detail/gmpaylanding",
    mainimgsrc: [
      "/main_gmpaylanding_pcx2.webp",
      "/main_gmpaylanding_mobilex2.webp",
    ],
    tags: [
      "UX/UI 디자인 100%",
      "퍼블리싱 100%",
      "Figma",
      "HTML, Javascript",
      "Web, Tablet, Mobile",
      "코리아페이먼트",
      "금융",
      "2024",
    ],
    links: [{ url: "gmpay.kr", icon: "/link.svg" }],
    pages: [
      { value: "prev", title: "씨오톡 모바일앱", href: "/detail/cotalk" },
      {
        value: "next",
        title: "하나 스마트창구 태블릿 인터페이스",
        href: "/detail/hanasmart",
      },
    ],
    mainimgtext: {
      title: "다양한 니즈와 연령대를 고려한 메인 배너 구성",
      description:
        "메인 배너는 4가지 버전이 자동으로 슬라이드되며 굿모닝페이의 핵심 서비스를 히어로 카피와 비주얼로 임팩트 있게 전달해, 서비스 가치를 첫 화면에서 직관적으로 이해할 수 있도록 구성했습니다. 동시에 다양한 니즈와 연령대의 소상공인 사용자에게 친근하게 다가갈 수 있도록 부드럽고 쉬운 인상의 이미지 톤을 적용했습니다.",
    },
  },

  {
    slug: "cotalk",
    title: "씨오톡 모바일앱",
    description:
      "씨오톡은 스타트업과 중소기업 CEO를 위한 커뮤니티 앱입니다. 커뮤니티 특유의 부드럽고 친근한 인상을 유지하면서도, 정책자금·노무·경영과 같은 실무 정보가 오가는 서비스인 만큼 전문성과 신뢰감을 함께 전달할 수 있도록 UX/UI를 설계했습니다.",
    href: "/detail/cotalk",
    mainimgsrc: ["/main_cotalk_pcx2.webp", "/main_cotalk_mobilex2.webp"],
    tags: [
      "UX/UI 디자인 70%",
      "Figma",
      "Mobile",
      "런인베스트",
      "커뮤니티",
      "2022",
    ],
    links: [],
    pages: [
      { value: "prev", title: "씨오파트너 웹앱", href: "/detail/copartner" },
      {
        value: "next",
        title: "굿모닝페이 홈페이지",
        href: "/detail/gmpaylanding",
      },
    ],
    mainimgtext: {
      title: "CEO 맞춤형 첫인상과 우선순위 기반 진입 구조",
      description:
        "홈 화면 상단에는 CEO 사용자에게 맞춘 인사말을 배치해, 서비스를 처음 마주하는 순간부터 비서처럼 친근하고 개인화된 인상을 전달하고자 했습니다. 하단에는 주요 페이지로 이동할 수 있는 카드를 나열하되, 기능의 사용 빈도와 중요도에 따라 카드 크기에 차이를 두어 정보 위계를 자연스럽게 인지할 수 있도록 구성했습니다. 또한 씨오톡 커뮤니티와 AI 정책자금 추천 영역에는 함께하는 CEO 수, 등록된 정책자금 공고 수 등 현재성을 보여주는 정보를 함께 노출해 서비스의 활성도와 신뢰감을 함께 전달하도록 설계했습니다.",
    },
  },

  {
    slug: "copartner",
    title: "씨오파트너 웹앱",
    description:
      "씨오파트너는 법인 재무경영진단, 컨설팅 교육, M&A 자문, 씨오톡 연계 기능을 통합한 법인컨설팅 플랫폼입니다. 법인과 고객 정보를 조회·수정하는 관리 기능과, 해당 내용이 자동으로 반영되는 컨설팅 리포트까지 함께 설계했으며, 리포트에는 고객 이해를 돕기 위한 이미지와 아이콘을 적극적으로 활용했습니다.",
    href: "/detail/copartner",
    mainimgsrc: [
      "/main_copartner_pcx2-2.webp",
      "/main_copartner_mobilex2-2.webp",
    ],
    tags: [
      "UX/UI 디자인 80%",
      "Figma",
      "Web, Tablet",
      "런인베스트",
      "금융",
      "2023",
    ],
    links: [],
    pages: [
      { value: "prev", title: "굿모닝페이 모바일앱", href: "/detail/gmpay" },
      { value: "next", title: "씨오톡 모바일앱", href: "/detail/cotalk" },
    ],
    mainimgtext: {
      title: "한눈에 보는 고객 정보와 일정",
      description:
        "첫 화면인 대시보드는 고객의 핵심 정보와 오늘의 일정을 한눈에 확인할 수 있도록 구성했습니다. ",
    },
  },

  {
    slug: "hanasmart",
    title: "하나 스마트창구 태블릿 인터페이스",
    description:
      "하나 스마트창구 태블릿 인터페이스는 은행 방문 고객이 대기 시간 동안 필요한 업무를 미리 작성할 수 있도록 설계한 디지털 창구 인터페이스입니다. ",
    href: "/detail/hanasmart",
    mainimgsrc: [
      "/main_hanasmart_pcx2-3.webp",
      "/main_hanasmart_mobilex2-3.webp",
    ],
    tags: [
      "UI 디자인 50%",
      "Illustrator",
      "XD",
      "Web, Tablet",
      "하나은행",
      "금융",
      "2021",
    ],
    links: [],
    pages: [
      {
        value: "prev",
        title: "굿모닝페이 홈페이지",
        href: "/detail/gmpaylanding",
      },
      { value: "next", title: "요기거리 모바일앱", href: "/detail/yogi" },
    ],
    mainimgtext: {
      title: "안정감과 친숙함을 담은 시각 톤 설계",
      description:
        "브랜드 컬러를 기반으로 안정감 있는 시각 톤을 구성하고, 라운드와 아이콘을 활용해 디지털 시스템에 대한 심리적 장벽을 낮췄습니다. ",
    },
  },

  {
    slug: "yogi",
    title: "요기거리 모바일앱",
    description:
      "요기거리는 내 주변의 길거리 음식을 지도에서 탐색하고, 직접 등록하거나 이야기를 나눌 수 있는 모바일 앱입니다. 음식 아이콘이 적용된 지도 핀부터 브랜드 캐릭터까지 전반적인 비주얼을 디자인했으며, 밤 포장마차의 불빛을 연상시키는 컬러로 서비스의 분위기를 표현했습니다.",
    icons: true,
    href: "/detail/yogi",
    mainimgsrc: ["/main_yogi_pcx2.webp", "/main_yogi_mobilex2.webp"],
    tags: ["UX/UI 디자인 100%", "Figma", "Mobile", "로컬커뮤니티", "2021"],
    links: [],
    pages: [
      {
        value: "prev",
        title: "하나 스마트창구 태블릿 인터페이스",
        href: "/detail/hanasmart",
      },
      { value: "next", title: "Partage 웹사이트", href: "/detail/partage" },
    ],
    mainimgtext: {
      title: "안정감과 친숙함을 담은 시각 톤 설계",
      description:
        "붕어빵, 떡볶이, 타코야끼 등 대표적인 길거리 음식을 직접 디자인한 12가지 아이콘으로 제작해 지도 핀에 적용했습니다. 이를 통해 음식 종류를 직관적으로 구분하고, 원하는 가게를 더 쉽게 탐색할 수 있도록 했습니다.",
    },
  },

  {
    slug: "partage",
    title: "Partage 웹사이트",
    description:
      "Partage는 여러 사용자가 같은 시간에 유튜브 영상을 함께 시청하고, 채팅을 통해 실시간으로 소통할 수 있도록 설계한 반응형 웹 서비스입니다. 영상 시청과 대화가 자연스럽게 이어지도록 구조를 구성해, 혼자 보는 콘텐츠를 함께 경험하는 커뮤니티형 시청 환경으로 확장하고자 했습니다.",
    href: "/detail/partage",
    mainimgsrc: ["/main_partage_pcx2.webp", "/main_partage_mobilex2.webp"],
    tags: [
      "UX/UI 디자인 100%",
      "퍼블리싱 20%",
      "Figma",
      "Next.js",
      "Web, Tablet, Mobile",
      "데이터시각화",
      "2022",
    ],
    links: [
      {
        url: "https://github.com/sooki88/partage_web_forked",
        icon: "/github.svg",
      },
    ],
    pages: [
      { value: "prev", title: "요기거리 모바일앱", href: "/detail/yogi" },
      { value: "next", title: "IMQA 랜딩페이지", href: "/detail/imqalanding" },
    ],
    mainimgtext: {
      title: "영상 몰입과 시청 피로도를 고려한 다크모드 설계",
      description:
        "영상 콘텐츠에 대한 몰입을 높이고 장시간 시청 시의 피로감을 줄이기 위해, 서비스의 기본 화면을 다크모드 기반으로 설계했습니다. 이를 통해 채팅과 영상이 함께 노출되는 환경에서도 시각적 부담을 덜고 안정적인 시청 경험을 제공하고자 했습니다.",
    },
  },
];
