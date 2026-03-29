export interface ProjectsType {
  slug: string;
  title: string;
  description: string;
  href: string;
  //   imgsrc: string;
  tags: string[];
  links: LinkType[];
  pages: PagesType[];
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
