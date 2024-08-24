import Image from "next/image";
import React from "react";
import ToggleSwitch from "./ToggleSwitch";

const BentoGrid = () => {
  return (
    <>
      <div className="flex flex-col col-span-3 row-span-3 rounded-3xl p-[32px] gap-[60px] w-full bg-bento-bg-image">
        <div className="w-full flex flex-col gap-[20px]">
          <Image src="/bento.svg" alt="" width={53} height={44} />
          <p className="w-full font-medium text-4xl">
            Effortless Prompt Perfection
          </p>
        </div>
        <div className="w-full flex flex-col gap-[4px]">
          <p className="font-medium text-body-l">14 day trial</p>
          <p className="font-light text-body-s text-opacity-40">
            Kes 15,000/yr
          </p>
        </div>
      </div>
      <div className="w-full col-span-6 row-span-3 rounded-3xl flex flex-col gap-[20px] items-center text-center p-[32px] bg-gradient-radial-bento">
        <Image src="/Frame.png" alt="" width={136} height={28} />
        <p className="text-[62px] leading-[62px] font-semibold">
          Your AI Prompt Companion
        </p>
      </div>
      <div className="big-bento-item">
        <ToggleSwitch />
      </div>
      <div className="small-bento-item">
        <p className="bg-gradient-to-r from-blue-linear-gradient-start to-blue-linear-gradient-end bg-clip-text text-transparent text-heading-4">
          25M
        </p>
        <div className="relative flex justify-center-center items-center p-[10px] max-h-[40px] bg-gradient-to-r from-b-blue-linear-gradient-start to-b-blue-linear-gradient-end">
          <Image
            src="/union.png"
            alt=""
            width={10}
            height={40}
            className="absolute left-0 top-0"
          />
          <p className="">created prompts</p>
        </div>
      </div>
      <div className="small-bento-item">
        <p className="bg-gradient-to-r from-blue-linear-gradient-start to-blue-linear-gradient-end bg-clip-text text-transparent text-heading-4">
          25M
        </p>
        <div className="relative flex justify-center-center items-center p-[10px] max-h-[40px] bg-gradient-to-r from-b-blue-linear-gradient-start to-b-blue-linear-gradient-end">
          <Image
            src="/union.png"
            alt=""
            width={10}
            height={40}
            className="absolute left-0 top-0"
          />
          <p className="">created prompts</p>
        </div>
      </div>
      <div className="relative flex flex-col col-span-3 row-span-3 justify-end rounded-3xl p-[32px] gap-[10px] bg-bento-bg-image">
        <Image
          src="/3d/left.png"
          alt="left"
          width={98}
          height={166}
          className="absolute top-1 left-1"
        />
        <div className="flex w-full bg-gradient-radial-start p-[14px] rounded-full"></div>
        <p className="font-medium text-body-m">Branching paths</p>
        <p className="font-light text-body-s">
          Explore multiple prompt directions with branching.
        </p>
      </div>
      <div className="relative flex flex-col col-span-3 row-span-3 justify-end rounded-3xl p-[32px] gap-[10px] bg-bento-bg-image">
        <Image
          src="/3d/right.png"
          alt="right"
          width={98}
          height={166}
          className="absolute top-1 right-1"
        />
        <div className="flex w-full bg-gradient-radial-start p-[14px] rounded-full"></div>
        <p className="font-medium text-body-m">Keyword enhancer</p>
        <p className="font-light text-body-s">
          Boost your prompt precision with keywords.
        </p>
      </div>

      <div className="flex flex-col col-span-3 row-span-3 rounded-3xl p-[32px] gap-[60px] w-full bg-bento-bg">
        <div className="w-full flex flex-col gap-[20px]">
          <Image src="/bento.svg" alt="" width={53} height={44} />
          <p className="w-full font-medium text-4xl">
            Effortless Prompt Perfection
          </p>
        </div>
        <div className="w-full flex flex-col gap-[4px]">
          <p className="font-medium text-body-l">14 day trial</p>
          <p className="font-light text-body-s text-opacity-40">
            Kes 15,000/yr
          </p>
        </div>
      </div>
      <div className="big-bento-item">
        <ToggleSwitch />
      </div>
    </>
  );
};

export default BentoGrid;
