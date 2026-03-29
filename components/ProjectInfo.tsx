import { ProjectsType } from "@/lib/types";
import Image from "next/image";

export default function ProjectInfo({ project }: { project: ProjectsType }) {
  return (
    <section className="flex flex-col items-center gap-18 py-18">
      <div className="flex flex-col gap-6 w-full max-w-[1200px] px-8">
        <h1 className="text-[40px] font-semibold -tracking-[0.5px]">
          {project.title}
        </h1>
        <p className="w-4/5 text-[18px] leading-[160%] break-keep">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center shrink-0 px-3 h-[29px] bg-main-gray-light/50 text-[14px] rounded-xs"
            >
              {tag}
            </div>
          ))}
        </div>
        {project.links.length !== 0 && (
          <div className="flex flex-wrap gap-2">
            {project.links.map((link, idx) => {
              return (
                <div
                  key={`link ${idx}`}
                  className="flex items-center gap-1 shrink-0 px-3 h-[29px] bg-main-gray-light/50 text-[14px] rounded-xs"
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
    </section>
  );
}
