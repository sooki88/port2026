import { Card } from "@/components/Card";
import {
  MobileGraphicColumn,
  PcGraphicColumn1,
  PcGraphicColumn2,
  PcGraphicColumn3,
  TabletGraphicColumn1,
  TabletGraphicColumn2,
} from "@/lib/graphiccolumns";
import {
  MobileColumn,
  PcColumn1,
  PcColumn2,
  PcColumn3,
  TabletColumn1,
  TabletColumn2,
} from "@/lib/maincolumns";
import Image from "next/image";
import Link from "next/link";

export default function GraphicPage() {
  return (
    <main className="flex flex-row justify-center w-full p-4 md:p-6 lg:p-8 gap-4 md:gap-6 lg:gap-8">
      <div className="hidden xl:flex flex-col gap-8 w-full">
        {PcGraphicColumn1.map((col) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
          />
        ))}
      </div>

      <div className="hidden xl:flex flex-col gap-8 w-full">
        {PcGraphicColumn2.map((col) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
          />
        ))}
      </div>

      <div className="hidden xl:flex flex-col gap-8 w-full">
        {PcGraphicColumn3.map((col) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
          />
        ))}
      </div>

      {/* 태블릿 */}
      <div className="hidden md:flex xl:hidden flex-col gap-8 w-full">
        {TabletGraphicColumn1.map((col) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
          />
        ))}
      </div>
      <div className="hidden md:flex xl:hidden flex-col gap-8 w-full">
        {TabletGraphicColumn2.map((col) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
          />
        ))}
      </div>

      {/* 모바일 */}
      <div className="md:hidden flex flex-col gap-8 w-full">
        {MobileGraphicColumn.map((col) => (
          <Card
            key={col.title}
            href={col.href}
            title={col.title}
            tools={col.tools}
            imgsrc={col.imgsrc}
            imgsize={col.imgsize}
            tags={col.tags}
          />
        ))}
      </div>
    </main>
  );
}
