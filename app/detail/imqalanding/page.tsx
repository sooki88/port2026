import PageButtons from "@/components/PageButtons";
import ProjectInfo from "@/components/ProjectInfo";
import { Projects } from "@/lib/projects";

export default function ImqalandingPage() {
  const project = Projects.find((item) => item.slug === "imqalanding");

  if (!project) return null;

  return (
    <div className="flex flex-col min-h-full items-center">
      <PageButtons pages={project.pages} />
      <ProjectInfo project={project} />
    </div>
  );
}
