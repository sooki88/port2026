import { ProjectsType } from "@/lib/types";
import Image from "next/image";

export default function ProjectInfo({ project }: { project: ProjectsType }) {
  return (
    <section className="flex flex-col items-center w-full gap-18 py-18">
      <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
        <h1 className="text-4xl md:text-[40px] font-semibold -tracking-[0.5px]">
          {project.title}
        </h1>
        <p className="text-base md:text-[18px] leading-[160%] break-keep mt-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center shrink-0 px-2 h-[26px] md:h-[29px] pb-[1px] bg-main-gray-light/50 text-[14px] rounded-xs"
            >
              {tag}
            </div>
          ))}
        </div>
        {project.links.length !== 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.links.map((link, idx) => {
              return (
                <div
                  key={`link ${idx}`}
                  className="flex items-center gap-1 shrink-0 pl-2 pr-3 h-[26px] md:h-[29px] pb-[1px] bg-main-gray-light/50 text-[14px] rounded-xs"
                >
                  <Image
                    src={link.icon}
                    alt={link.icon}
                    width={21}
                    height={21}
                  />

                  {link.url}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 1200px 이상 */}
      <div className="relative w-full h-[943px] hidden xl:block">
        <div className="absolute top-18 flex flex-col items-center w-full z-1">
          <h4 className="w-full max-w-[1200px] px-4 md:px-8 text-white">
            {project.mainimgtext.title}
          </h4>
          <h5 className="w-full max-w-[1200px] px-4 md:px-8 mt-4 text-white">
            {project.mainimgtext.description}
          </h5>
        </div>

        <div className="relative h-[943px] w-full overflow-hidden">
          <Image
            src={project.mainimgsrc[0]}
            alt={`${project.title} 메인 이미지`}
            fill
            priority
            className="object-cover object-center"
            sizes="1200px"
          />
        </div>
      </div>

      {/* 1200px 미만 */}
      <div className="w-full xl:hidden">
        <div className="flex flex-col w-full max-w-[1200px] px-4 md:px-8">
          <h4>{project.mainimgtext.title}</h4>
          <h5 className="mt-4">{project.mainimgtext.description}</h5>
        </div>

        <div className="relative w-full aspect-[1200/943] overflow-hidden mt-16">
          <Image
            src={project.mainimgsrc[1]}
            alt={`${project.title} 메인 이미지`}
            fill
            priority
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
