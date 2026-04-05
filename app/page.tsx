import { Card } from "@/components/Card";
import {
  MobileColumn,
  PcColumn1,
  PcColumn2,
  PcColumn3,
  TabletColumn1,
  TabletColumn2,
} from "@/lib/maincolumns";

export default function Home() {
  return (
    <main className="flex flex-row justify-center w-full p-4 md:p-6 lg:p-8 gap-4 md:gap-6 lg:gap-8">
      <div className="hidden xl:flex flex-col gap-8 w-full">
        {PcColumn1.map((col, index) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
            isPriority={index === 0}
          />
        ))}
      </div>

      <div className="hidden xl:flex flex-col gap-8 w-full">
        {PcColumn2.map((col, index) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
            isPriority={index === 0}
          />
        ))}
      </div>

      <div className="hidden xl:flex flex-col gap-8 w-full">
        {PcColumn3.map((col, index) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
            isPriority={index === 0}
          />
        ))}
      </div>

      {/* 태블릿 */}
      <div className="hidden md:flex xl:hidden flex-col gap-8 w-full">
        {TabletColumn1.map((col, index) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
            isPriority={index === 0}
          />
        ))}
      </div>
      <div className="hidden md:flex xl:hidden flex-col gap-8 w-full">
        {TabletColumn2.map((col, index) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
            isPriority={index === 0}
          />
        ))}
      </div>

      {/* 모바일 */}
      <div className="md:hidden flex flex-col gap-8 w-full">
        {MobileColumn.map((col, index) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
            isPriority={index === 0}
          />
        ))}
      </div>
    </main>
  );
}
