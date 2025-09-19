import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
// import { words } from "../constants";
// import HeroExperience from "../components/models/hero_models/HeroExperience";
import { SparklesCore } from "../components/sparkles";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="overflow-hidden">
      <div className="h-screen flex items-center justify-center w-full">
        {/* LEFT: Hero Content */}
        <header className="h-full w-full mt-32 flex items-center flex-col justify-center max-w-5xl">
          <div className="flex flex-col gap-7">
            <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
              <h2 className="text-xl md:text-2xl mb-6 font-medium">Hallo, Saya Aden Kesuma <span className="waving-hand">👋</span></h2>
              <h1 className="md:text-5xl text-3xl lg:text-6xl font-bold mb-6 text-center text-white relative z-20">
                Membangun Website & Aplikasi <br />untuk Bisnis Kesehatan Anda
              </h1>
              <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60  top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
              </div>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        {/* <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure> */}
      </div>

      {/* <AnimatedCounter /> */}
    </section>
  );
};

export default Hero;
