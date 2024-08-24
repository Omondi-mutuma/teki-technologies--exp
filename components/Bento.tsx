import React from "react";
import BentoGrid from "./BentoGrid";
import Image from "next/image";

const Bento = () => {
  return (
    <section className="flex flex-col justify-center gap-[36px] items-center py-[80px] px-[50px]">
      <h3 className="text-[26] font-medium text-center max-w-[553px] md:text-heading-3 ">
        Harness the power of AI, making search engine optimization intuitive and
        effective for all skill levels.
      </h3>
      <div className="w-full relative grid grid-cols-12 gap-3 rounded-lg circ">
        <BentoGrid />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-full bg-black">
          <Image
            src="/3d/image.png"
            height={274}
            width={274}
            alt="sphere"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Bento;
