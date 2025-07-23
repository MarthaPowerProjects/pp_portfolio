import React from "react";
import Image from "next/image";
import heroImage from "@/app/assets/digital.png";
import { Button } from "./ui/Button";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FlipWords } from "./ui/FlipWords";

const Hero = () => {
  return (
    <div className="flex justify-around w-full items-center">
      <div className="flex flex-col w-1/2 gap-10 justify-around items-start pl-36">
        <div className="text-5xl font-bold w-full text-foreground">
          Empowering Ideas, Powering
          <FlipWords
            className="text-secondary opacity-65"
            words={["Innovation", "Creativity", "Solutions"]}
          />
        </div>
        <div className="text-lg text-foreground w-2/3">
          <TextGenerateEffect words="Custom Web, App and Cloud Development for Business Ready to Grow" />
        </div>
        <div className="flex flex-col gap-5">
          <Button className="border-foreground bg-foreground text-secondary cursor-pointer hover:border-white hover:bg-white hover:text-black border-2 text-lg flex justify-center items-center">
            Get a Free Consultation
          </Button>
          <Button className="border-foreground cursor-pointer hover:border-white border-2 text-lg flex justify-center items-center">
            Explore Our Services
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="rounded-lg md:w-[500px] shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
