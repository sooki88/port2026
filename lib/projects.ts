import { ProjectsType } from "./types";

export const Projects: ProjectsType[] = [
  {
    slug: "imqa",
    title: "IMQA 모니터링 웹앱",
    description:
      "품질관리팀이 서비스 품질 데이터를 빠르게 모니터링하고 분석할 수 있도록 설계한 웹앱입니다. 복잡한 정보를 명확하게 구조화하고, 필요한 데이터에 직관적으로 접근할 수 있는 흐름을 만드는 데 집중했습니다.",
    href: "/detail/imqa",
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
  },
  {
    slug: "imqalanding",
    title: "IMQA 랜딩페이지",
    description:
      "IMQA의 기능과 가치를 명확하게 전달하기 위해 설계한 랜딩페이지입니다. 서비스의 복잡한 내용을 직관적으로 이해할 수 있도록 정보 구조와 시각적 흐름을 단순하고 명확하게 구성했습니다.",
    href: "/detail/imqalanding",
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
  },
  {
    slug: "gmpay",
    title: "굿모닝페이 모바일앱",
    description:
      "굿모닝페이는 익일 정산을 기반으로 카드결제, 온라인결제, 수기결제, 정기 자동결제, SNS결제 등 다양한 결제 방식을 지원하고 결제 내역을 통합 관리할 수 있는 서비스입니다. 또한 실제 결제를 운영하는 소상공인 가맹점용과, 이들을 관리하는 대리점용으로 구분되어 각 사용자 역할에 맞는 기능을 제공합니다.",
    href: "/detail/gmpay",
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
  },
  {
    slug: "gmpaylanding",
    title: "굿모닝페이 홈페이지",
    description:
      "굿모닝페이의 핵심 서비스와 도입 정보를 전달하는 랜딩페이지입니다. 소상공인 사용자를 주요 타깃으로 설정하고, 금융 서비스의 진입장벽을 낮추기 위해 친근하고 직관적이며 젊은 인상의 UX/UI로 풀어냈습니다.",
    href: "/detail/gmpaylanding",
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
  },

  {
    slug: "cotalk",
    title: "씨오톡 모바일앱",
    description:
      "씨오톡은 스타트업과 중소기업 CEO를 위한 커뮤니티 앱입니다. 커뮤니티 특유의 부드럽고 친근한 인상을 유지하면서도, 정책자금·노무·경영과 같은 실무 정보가 오가는 서비스인 만큼 전문성과 신뢰감을 함께 전달할 수 있도록 UX/UI를 설계했습니다.",
    href: "/detail/cotalk",
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
  },

  {
    slug: "copartner",
    title: "씨오파트너 웹앱",
    description:
      "굿모닝페이의 핵심 서비스와 도입 정보를 전달하는 랜딩페이지입니다. 소상공인 사용자를 주요 타깃으로 설정하고, 금융 서비스의 진입장벽을 낮추기 위해 친근하고 직관적이며 젊은 인상의 UX/UI로 풀어냈습니다.",
    href: "/detail/copartner",
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
  },

  {
    slug: "hanasmart",
    title: "하나 스마트창구 태블릿 인터페이스",
    description:
      "하나 스마트창구 태블릿 인터페이스는 은행 방문 고객이 대기 시간 동안 필요한 업무를 미리 작성할 수 있도록 설계한 디지털 창구 인터페이스입니다. ",
    href: "/detail/hanasmart",
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
  },

  {
    slug: "yogi",
    title: "요기거리 모바일앱",
    description:
      "요기거리는 내 주변의 길거리 음식을 지도에서 탐색하고, 직접 등록하거나 이야기를 나눌 수 있는 모바일 앱입니다. 음식 아이콘이 적용된 지도 핀부터 브랜드 캐릭터까지 전반적인 비주얼을 디자인했으며, 밤 포장마차의 불빛을 연상시키는 컬러로 서비스의 분위기를 표현했습니다.",
    href: "/detail/yogi",
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
  },

  {
    slug: "partage",
    title: "Partage 웹사이트",
    description: " ",
    href: "/detail/partage",
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
  },
];
