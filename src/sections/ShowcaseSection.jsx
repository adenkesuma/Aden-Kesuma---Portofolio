import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/20.jpg" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                PDSKKI – Indonesian Family Physicians Association: The Hub for Primary Health Care Excellence
              </h2>
              <p className="text-white-50 md:text-xl">
                The official website of PDSKKI (Perhimpunan Dokter Keluarga Indonesia) serves as the central platform for professional development, collaboration, and knowledge exchange among family physicians in Indonesia. Operating under the Indonesian Medical Association (IDI), it provides resources, news, and events aimed at strengthening primary health care practices across the nation.
              </p>
              <a href="https://www.pdskki.com/" className="underline text-lg font-semibold text-cyan-500">Link</a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/19.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>LDP Primary Care — PDSKKI Learning & Development Portal: Certificates, CME Credits & Event Access</h2>
              <a href="https://ldplayananprimer.pdskki.com/" className="underline text-lg font-semibold text-cyan-500">Link</a>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/18.png" alt="YC Directory App" />
              </div>
              <h2>FMF 2025 – Family Medicine Forum Indonesia: Conference Portal for Program, Registration & Awards</h2>
              <a href="https://fmf-conference.pdskki.com/" className="underline text-lg font-semibold text-cyan-500">Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
