import React from "react";
import Badge from "./Badge";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col justify-center items-center gap-3 py-20 overflow-hidden transition-all">
      <Badge badgeStatus="New" badgeText="Latest integration just arrived" />
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <h1 className="heading-text md:text-heading-1 md:leading-lg-heading-height">
          Boost your<br></br>
          <span className="gradientText">rankings with AI.</span>
        </h1>
        <p className="heading-paragraph max-w-[544px]">
          Elevate your site’s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="custom-border rounded-xl py-1 px-1 z-50">
          <Button
            type="button"
            label="Start for free"
            value=""
            variant="white-button"
          />
        </div>
      </div>
      <Image
        src="/mobile-app-preview.png"
        alt="app"
        width={390}
        height={786}
        className="hero-img md:hidden"
      />
      <Image
        src="/app-preview.png"
        alt="app"
        width={1120}
        height={815}
        className="hero-img hidden md:block"
      />
      <Image
        src="/circles.png"
        alt="circles"
        width={390}
        height={565}
        className="absolute bottom-10 -z-10 md:hidden"
      />

      <div className="rounded-full bg-small-purple-blur-fill absolute m-auto blur-[224px] md:h-[300px] md:w-[300px] z-40"></div>
      <div className="rounded-full bg-purple-blur-fill absolute hidden m-auto -z-20 blur-[534px] md:h-[625px] md:w-[625px] md:block"></div>
      <div className="w-full absolute bottom-0 h-[308px] bg-gradient-to-b  from-black-linear-gradient-start to-black-linear-gradient-end"></div>
    </section>
  );
};

export default Hero;
