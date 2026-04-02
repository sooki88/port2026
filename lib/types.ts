export interface ProjectsType {
  slug: string;
  title: string;
  description: string;
  icons?: boolean;
  href: string;
  mainimgsrc: string[];
  tags: string[];
  links: LinkType[];
  pages: PagesType[];
  mainimgtext: MainimgtextType;
}

export interface LinkType {
  url: string;
  icon: string;
}

export interface PagesType {
  value: string;
  title: string;
  href: string;
}

export interface MainimgtextType {
  title: string;
  description: string;
}
