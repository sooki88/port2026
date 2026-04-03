"use client";

import Image from "next/image";

export default function MoveUpButton() {
  const handleMoveUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleMoveUp}
      className="group flex flex-col items-center gap-1 mt-16 rounded-full text-xs -tracking-[0.2px] hover:font-semibold hover:underline"
      aria-label="맨 위로 이동"
    >
      {/* <div className="rounded-full group-hover:bg-main-gray-light/20 rotate-90"> */}
      <div className="rounded-full rotate-90">
        <Image
          src="/arrow_left.svg"
          alt="위로 향하는 화살표"
          width={18}
          height={18}
        />
      </div>
      맨 위로 이동
    </button>
  );
}
