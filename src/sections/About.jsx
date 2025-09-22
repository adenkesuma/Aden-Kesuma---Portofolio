import { socialImgs } from "../constants";

const About = () => {
    return (
        <section
          id="about"
          className="bg-[#101010] mt-5 mb-20 flex-center w-full section-padding"
        >
          <div className="max-w-5xl px-4 lg:px-0 h-full">
            <div className="flex flex-col md:flex-row items-center pt-10">
                <img src='/images/aden.png' className="order-2 md:order-1 w-full md:w-1/2" alt="image aden" />
                <div className="w-full md:w-1/2 order-1 md:order-2">
                    <h2 className="mb-3 text-xl md:text-3xl font-semibold">Aden Kesuma | Spesialis Digital Solution untuk Healthcare Industry</h2>
                    <span className="text-base text-gray-200">
                        Saya membangun website dan aplikasi yang menjadi tulang punggung operasional industri healthcare. Karya saya bukan hanya tentang kode, tapi tentang menciptakan solusi teknologi yang kuat dan terpercaya untuk mendukung dunia medis yang lebih efisien dan terhubung.
                    </span>
                    <div className="flex items-center gap-3 mt-4">
                      {socialImgs.map((socialImg, index) => (
                        <a href={socialImg.link} key={index} target="_blank" className="p-3 border border-white/30 bg-white/30 rounded-xl cursor-pointer">
                          <img src={socialImg.imgPath} alt="social icon" />
                        </a>
                      ))}
                    </div>
                </div>
            </div>
          </div>
        </section>
    )
}

export default About
