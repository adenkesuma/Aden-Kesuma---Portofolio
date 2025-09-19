"use client";

import { Tabs } from "../components/tabs";
import TitleHeader from "../components/TitleHeader";

export default function AppShowcase() {
  const tabs = [
    {
      title: "RSU Royal Prima",
      value: "RSUROYALPRIMA",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-3xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-500 to-blue-800">
          <div className="flex flex-col gap-1">
            <h2>Aplikasi Pelaporan Jam Kerja | RSU Royal Prima</h2>
            <p className="text-sm text-gray-200 font-normal">Aplikasi ini adalah sistem web dan mobile yang dirancang untuk mencatat aktivitas kerja harian karyawan, memungkinkan atasan untuk menyetujui tugas, serta memberikan pimpinan perusahaan wawasan real-time tentang kinerja unit dan organisasi melalui dashboard, laporan, dan perhitungan produktivitas otomatis</p>
          </div>
          <img
            src="/images/rsurp-thumbnail.png"
            alt="rsurp image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[80%] absolute -bottom-4 inset-x-0 rounded-2xl mx-auto" />
        </div>
      ),
    },
    {
      title: "PDSKKI",
      value: "PDSKKI",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-3xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-800 to-blue-900">
          <div className="flex flex-col gap-1">
            <h2>Aplikasi Organisasi Kedokteran | PDSKKI</h2>
            <p className="text-sm text-gray-200 font-normal">Aplikasi ini merupakan sistem berbasis web dan mobile yang dibuat untuk mencatat aktivitas kerja harian karyawan, memudahkan atasan dalam menyetujui tugas, serta memberikan pimpinan perusahaan wawasan secara real-time mengenai kinerja unit dan organisasi melalui dashboard, laporan, dan perhitungan produktivitas otomatis</p>
          </div>
          <img
            src="/images/pdskki-thumbnail.png"
            alt="pdskki image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[80%] absolute -bottom-4 inset-x-0 rounded-2xl mx-auto" />
        </div>
      ),
    },
    {
      title: "LDP Layanan Primer",
      value: "LDPLP",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-3xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-green-500 to-green-800">
          <div className="flex flex-col gap-1">
            <h2>Aplikasi Portal Pembelajaran | LDP Layanan Primer</h2>
            <p className="text-sm text-gray-200 font-normal">LDP Primary Care adalah portal resmi Pembelajaran & Pengembangan PDSKKI yang menyediakan akses mudah bagi tenaga medis untuk mengikuti pelatihan, memperoleh sertifikat, mengumpulkan SKP (CME Credits), serta berpartisipasi dalam berbagai acara dan kegiatan ilmiah secara terstruktur dan terintegrasi.</p>
          </div>
          <img
            src="/images/ldp-thumbnail.png"
            alt="ldp layanan primer image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[80%] absolute -bottom-4 inset-x-0 rounded-2xl mx-auto" />
        </div>
      ),
    },
    {
      title: "FMF Conference",
      value: "FMF",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-3xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-yellow-600 to-yellow-500">
          <div className="flex flex-col gap-1">
            <h2>Aplikasi Portal Konferensi | FMF Conference</h2>
            <p className="text-sm font-normal">FMF 2025 – Family Medicine Forum Indonesia adalah portal konferensi resmi yang menyediakan informasi lengkap mengenai program acara, pendaftaran peserta, serta penghargaan. Platform ini dirancang untuk memudahkan tenaga medis dan peserta dalam mengakses agenda, materi, dan berbagai kegiatan ilmiah secara terpusat.
            </p>
          </div>
          <img
            src="/images/fmf-thumbnail.png"
            alt="fmf conference image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[80%] absolute -bottom-4 inset-x-0 rounded-2xl mx-auto" />
        </div>
      ),
    },
    {
      title: "Trunity",
      value: "TRUNITY",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-3xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-500 to-blue-800">
          <div className="flex flex-col gap-1">
            <h2>Aplikasi Company Profile | Trunity Agency</h2>
            <p className="text-sm text-gray-200 font-normal">Trunity Agency adalah agency asuransi profesional dengan pengalaman lebih dari 18 tahun, berfokus pada perlindungan jiwa, kesehatan, dan perencanaan finansial. Kami hadir untuk melindungi, menumbuhkan, dan mewariskan nilai finansial bagi setiap klien maupun generasi berikutnya.</p>
          </div>
          <img
            src="/images/trunity-thumbnail.png"
            alt="trunity image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[80%] absolute -bottom-4 inset-x-0 rounded-2xl mx-auto" />
        </div>
      ),
    },
  ];

  return (
    <div
      className="h-[40rem] md:h-[60rem] [perspective:1000px] relative flex flex-col items-center max-w-5xl mx-auto w-full justify-start pb-20">
      <TitleHeader
        title="Proyek Yang Pernah Saya Kerjakan"
        sub="🌐 My Works Overview"
      />
      <Tabs tabs={tabs} />
=
    </div>
  );
}
