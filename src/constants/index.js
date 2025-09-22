const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "About",
    link: "#about"
  }
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/ldplp.png",
  },
  {
    imgPath: "/images/logos/pdskki.svg",
  },
  {
    imgPath: "/images/logos/the-indonesia-medical-association.svg",
  },
  {
    imgPath: "/images/logos/wonca.svg",
  },
  {
    imgPath: "/images/logos/fmf.png",
  },
  {
    imgPath: "/images/logos/royal-prima.png",
  },
  {
    imgPath: "/images/logos/Trunity.png"
  }
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Fokus pada Kualitas",
    desc: "Memberikan hasil berkualitas tinggi dengan perhatian pada setiap detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Komunikasi yang Andal",
    desc: "Selalu memberikan pembaruan di setiap tahap untuk memastikan transparansi dan kejelasan.",
  },
  {
    imgPath: "/images/time.png",
    title: "Tepat Waktu",
    desc: "Memastikan proyek selesai sesuai jadwal, dengan kualitas dan perhatian pada detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Di SSD Digital, Aden menunjukkan kemampuan beradaptasi dengan menangani tanggung jawab pengembangan frontend sekaligus desain UI/UX. Versatilitas dan dedikasinya membantu menghasilkan proyek berkualitas tinggi meskipun struktur agensi ramping.",
    imgPath: "SSD Digital",
    logoPath: "1",
    title: "Frontend Developer & UI/UX Designer",
    date: "Januari 2022 - Desember 2023",
    responsibilities: [
      "Merancang dan mengembangkan antarmuka pengguna untuk berbagai proyek klien menggunakan framework frontend modern.",
      "Berkolaborasi langsung dengan klien untuk menerjemahkan kebutuhan bisnis menjadi desain yang fungsional dan menarik.",
      "Menangani pengkodean frontend sekaligus tugas desain UI/UX dalam lingkungan agensi kecil.",
    ],
  },
  {
    review:
      "Selama di Origaming, Aden memberikan kontribusi signifikan pada frontend produk perusahaan, memastikan skalabilitas, performa, dan pengalaman pengguna yang maksimal.",
    imgPath: "Origaming",
    logoPath: "2",
    title: "Frontend Developer",
    date: "Januari 2023 - Juni 2025",
    responsibilities: [
      "Mengembangkan dan memelihara fitur frontend yang skalabel untuk platform web Origaming.",
      "Mengoptimalkan performa serta memastikan interaksi pengguna yang lancar di berbagai perangkat.",
      "Berkolaborasi dengan tim backend dan desain untuk menghadirkan kualitas produk yang konsisten.",
    ],
  },
  {
    review:
      "Sebagai freelancer, Aden telah bekerja dengan berbagai klien, menghadirkan solusi web dan desain yang disesuaikan dengan fokus pada fungsionalitas dan estetika.",
    imgPath: "Freelancer",
    logoPath: "3",
    title: "Freelance Frontend Developer & Designer",
    date: "Januari 2023 - Sekarang",
    responsibilities: [
      "Menyediakan solusi pengembangan web end-to-end dan desain UI/UX untuk berbagai klien.",
      "Membangun website dan aplikasi yang responsif serta berfokus pada pengalaman pengguna dengan tools modern.",
      "Memberikan konsultasi dan implementasi untuk peningkatan performa serta desain yang berorientasi pada brand.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Dr. Novana Perdana Putri",
    mentions: "@dr.novanaputri",
    review:
      "Portal pelatihan LDPLP yang dikembangkan oleh Aden telah mengubah cara dokter kami mengakses materi pembelajaran, klaim sertifikat, dan memperoleh poin SKP. Eksekusi teknisnya serta perhatiannya pada pengalaman pengguna sangat berharga bagi operasional kami.",
  },
  {
    name: "Harvine",
    mentions: "@harvine",
    review:
      "Bekerja dengan Aden di SSD Digital benar-benar menjadi titik balik. Meskipun agensi kami kecil, ia menangani pengembangan frontend dan desain UI/UX dengan sangat baik. Kreativitas, kemampuan problem-solving, dan kemampuannya menyelesaikan pekerjaan di bawah deadline ketat menjadikannya bagian yang tak tergantikan dari tim kami.",
  },
  {
    name: "Billy Ongo",
    mentions: "@billyongo",
    review:
      "Kontribusi Aden di Origaming benar-benar luar biasa. Ia meningkatkan sistem frontend kami, mengoptimalkan performa, dan memastikan pengalaman pengguna yang lancar serta menarik bagi para pemain. Konsistensi dan keahlian teknisnya menetapkan standar tinggi bagi tim pengembangan kami.",
  },
  {
    name: "Qori Hasanah",
    mentions: "@qorihasanah",
    review:
      "Sebagai freelancer, Aden telah menjadi developer andalan saya untuk banyak proyek. Ia selalu memberikan solusi yang rapi, skalabel, dan menarik secara visual. Baik menghadapi deadline ketat maupun fungsi yang kompleks, Aden selalu menyelesaikannya dengan profesionalisme dan presisi.",
  },
  {
    name: "Dr. Isti Ilmiati Fujiati",
    mentions: "@dr.istifujiati",
    review:
      "Aden berperan penting dalam membuat website resmi PDSKKI, menghadirkan platform yang profesional sekaligus mudah digunakan. Pemahamannya terhadap visi organisasi kami diterjemahkan dengan indah ke dalam produk akhir, yang kini melayani ribuan anggota di seluruh Indonesia.",
  },
  {
    name: "Dr. Nuke H. Setiati",
    mentions: "@dr.nukesetiati",
    review:
      "Karya Aden pada website Konferensi FMF 2025 sungguh luar biasa. Ia membangun pusat acara yang memudahkan registrasi, navigasi program, dan integrasi sponsor. Umpan balik dari peserta sangat positif, berkat pendekatannya yang detail dan teliti.",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/adenkesuma/"
  },
  // {
  //   name: "fb",
  //   imgPath: "/images/fb.png",
  // },
  // {
  //   name: "x",
  //   imgPath: "/images/x.png",
  // },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/aden-kesuma-51549724b/"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
