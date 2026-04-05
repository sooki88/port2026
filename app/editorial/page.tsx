import { Card } from "@/components/Card";
import {
  MobileGraphicColumn,
  PcGraphicColumn1,
  PcGraphicColumn2,
  PcGraphicColumn3,
  TabletGraphicColumn1,
  TabletGraphicColumn2,
} from "@/lib/graphiccolumns";

export default function GraphicPage() {
  return (
    <main className="flex flex-row justify-center w-full p-4 md:p-6 lg:p-8 gap-4 md:gap-6 lg:gap-8">
      <div className="hidden xl:flex flex-col gap-8 w-full">
        {PcGraphicColumn1.map((col, index) => (
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
        {PcGraphicColumn2.map((col, index) => (
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
        {PcGraphicColumn3.map((col, index) => (
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
        {TabletGraphicColumn1.map((col, index) => (
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
        {TabletGraphicColumn2.map((col, index) => (
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
        {MobileGraphicColumn.map((col, index) => (
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
