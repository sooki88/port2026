import { ProjectsType } from "./types";

export const Projects: ProjectsType[] = [
  {
    slug: "imqa",
    title: "IMQA 모니터링 웹앱",
    description:
      "품질관리팀이 서비스 품질 데이터를 빠르게 모니터링하고 분석할 수 있도록 설계한 웹앱입니다. 복잡한 정보를 명확하게 구조화하고, 필요한 데이터에 직관적으로 접근할 수 있는 흐름을 만드는 데 집중했습니다.",
    href: "/detail/imqa",
    mainimgsrc: ["/main_imqa_pc.webp", "/main_imqa_mobile.webp"],
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
      { value: "prev", title: "IMQA 모니터링 웹앱", href: "/datail/imqa" },
      { value: "next", title: "굿모닝페이 모바일앱", href: "/datail/gmpay" },
    ],
    mainimgtext: {
      title: "목적에 따라 다르게 설계한 대시보드 경험",
      description:
        "통합 대시보드는 여러 서비스의 실시간 상태를 한눈에 빠르게 파악해야 하는 화면이기 때문에, HTTP 요청량과 정상·에러 응답 비율을 즉시 확인할 수 있는 ‘리퀘스트 모니터’를 추가했습니다. 이를 통해 중요한 상태 변화를 빠르게 인지하고 이상 징후를 놓치지 않도록 했습니다. 반면 서비스별/MY 대시보드는 사용자가 직접 지표와 시각화 방식을 선택해 화면을 구성하는 환경을 고려해, 차트 전용 컬러 시스템과 자유로운 배치·리사이즈가 가능한 그리드 시스템을 설계했습니다. 이를 통해 사용자 목적에 맞춰 유연하게 대시보드를 조합하고 활용할 수 있도록 했습니다.",
    },
  },
  {
    slug: "imqalanding",
    title: "IMQA 랜딩페이지",
    description:
      "IMQA의 기능과 가치를 명확하게 전달하기 위해 설계한 랜딩페이지입니다. 서비스의 복잡한 내용을 직관적으로 이해할 수 있도록 정보 구조와 시각적 흐름을 단순하고 명확하게 구성했습니다.",
    href: "/detail/imqalanding",
    mainimgsrc: ["/main_imqalanding_pc.webp", "/main_imqalanding_mobile.webp"],
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
      { value: "next", title: "IMQA 모니터링 웹앱", href: "/datail/imqa" },
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
    mainimgsrc: ["/main_gmpay_pc.webp", "/main_gmpay_mobile.webp"],
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
      { value: "prev", title: "IMQA 모니터링 웹앱", href: "/datail/imqa" },
      { value: "next", title: "씨오파트너 웹앱", href: "/datail/copartner" },
    ],
    mainimgtext: {
      title: "실시간 데이터 흐름을 시각화한 히어로 영역",
      description:
        "배경의 파동형 그래픽은 하나의 서비스를 이용하는 다양한 사용자 세션과 데이터가 실시간으로 수집·흐르는 모습을 시각적으로 표현한 요소입니다. 또한 메인 카피를 순차적으로 전환해, IMQA가 ①데이터를 실시간으로 확인하고 ②성능을 관리하며 ③문제의 원인까지 파악할 수 있는 서비스임을 단계적으로 전달하고자 했습니다.",
    },
  },
  {
    slug: "gmpaylanding",
    title: "굿모닝페이 홈페이지",
    description:
      "굿모닝페이의 핵심 서비스와 도입 정보를 전달하는 랜딩페이지입니다. 소상공인 사용자를 주요 타깃으로 설정하고, 금융 서비스의 진입장벽을 낮추기 위해 친근하고 직관적이며 젊은 인상의 UX/UI로 풀어냈습니다.",
    href: "/detail/gmpaylanding",
    mainimgsrc: [
      "/main_gmpaylanding_pc.webp",
      "/main_gmpaylanding_mobile.webp",
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
      { value: "prev", title: "씨오톡 모바일앱", href: "/datail/cotalk" },
      {
        value: "next",
        title: "하나 스마트창구 태블릿 인터페이스",
        href: "/datail/hanasmart",
      },
    ],
    mainimgtext: {
      title: "실시간 데이터 흐름을 시각화한 히어로 영역",
      description:
        "배경의 파동형 그래픽은 하나의 서비스를 이용하는 다양한 사용자 세션과 데이터가 실시간으로 수집·흐르는 모습을 시각적으로 표현한 요소입니다. 또한 메인 카피를 순차적으로 전환해, IMQA가 ①데이터를 실시간으로 확인하고 ②성능을 관리하며 ③문제의 원인까지 파악할 수 있는 서비스임을 단계적으로 전달하고자 했습니다.",
    },
  },

  {
    slug: "cotalk",
    title: "씨오톡 모바일앱",
    description:
      "씨오톡은 스타트업과 중소기업 CEO를 위한 커뮤니티 앱입니다. 커뮤니티 특유의 부드럽고 친근한 인상을 유지하면서도, 정책자금·노무·경영과 같은 실무 정보가 오가는 서비스인 만큼 전문성과 신뢰감을 함께 전달할 수 있도록 UX/UI를 설계했습니다.",
    href: "/detail/cotalk",
    mainimgsrc: ["/main_cotalk_pc.webp", "/main_cotalk_mobile.webp"],
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
      { value: "prev", title: "씨오파트너 웹앱", href: "/datail/copartner" },
      {
        value: "next",
        title: "굿모닝페이 홈페이지",
        href: "/datail/gmpaylanding",
      },
    ],
    mainimgtext: {
      title: "실시간 데이터 흐름을 시각화한 히어로 영역",
      description:
        "배경의 파동형 그래픽은 하나의 서비스를 이용하는 다양한 사용자 세션과 데이터가 실시간으로 수집·흐르는 모습을 시각적으로 표현한 요소입니다. 또한 메인 카피를 순차적으로 전환해, IMQA가 ①데이터를 실시간으로 확인하고 ②성능을 관리하며 ③문제의 원인까지 파악할 수 있는 서비스임을 단계적으로 전달하고자 했습니다.",
    },
  },

  {
    slug: "copartner",
    title: "씨오파트너 웹앱",
    description:
      "굿모닝페이의 핵심 서비스와 도입 정보를 전달하는 랜딩페이지입니다. 소상공인 사용자를 주요 타깃으로 설정하고, 금융 서비스의 진입장벽을 낮추기 위해 친근하고 직관적이며 젊은 인상의 UX/UI로 풀어냈습니다.",
    href: "/detail/copartner",
    mainimgsrc: ["/main_copartner_pc.webp", "/main_copartner_mobile.webp"],
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
      { value: "prev", title: "굿모닝페이 모바일앱", href: "/datail/gmpay" },
      { value: "next", title: "씨오톡 모바일앱", href: "/datail/cotalk" },
    ],
    mainimgtext: {
      title: "핵심 고객 정보와 관리 흐름을 빠르게 파악할 수 있는 CRM 구조",
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
    mainimgsrc: ["/main_hanasmart_pc.webp", "/main_hanasmart_mobile.webp"],
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
        href: "/datail/gmpaylanding",
      },
      { value: "next", title: "요기거리 모바일앱", href: "/datail/yogi" },
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
    href: "/detail/yogi",
    mainimgsrc: ["/main_yogi_pc.webp", "/main_yogi_mobile.webp"],
    tags: ["UX/UI 디자인 100%", "Figma", "Mobile", "로컬커뮤니티", "2021"],
    links: [],
    pages: [
      {
        value: "prev",
        title: "하나 스마트창구 태블릿 인터페이스",
        href: "/datail/hanasmart",
      },
      { value: "next", title: "Partage 웹사이트", href: "/datail/partage" },
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
    description: " ",
    href: "/detail/partage",
    mainimgsrc: ["/main_partage_pc.webp", "/main_partage_mobile.webp"],
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
      { value: "prev", title: "요기거리 모바일앱", href: "/datail/yogi" },
      { value: "next", title: "IMQA 랜딩페이지", href: "/datail/imqalanding" },
    ],
    mainimgtext: {
      title: " ",
      description: " ",
    },
  },
];
