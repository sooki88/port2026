import Header from "@/components/Header";

export default function GraphicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full flex flex-col">
      {/* <div className="min-h-full flex flex-col pt-14 md:pt-16"> */}
      {/* <Header /> */}
      {children}
    </div>
  );
}
