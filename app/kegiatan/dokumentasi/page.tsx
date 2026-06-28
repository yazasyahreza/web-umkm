"use client";

import { useState } from "react";
import Link from "next/link";

function CarouselCard({ item }: { item: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  return (
    <div className="group relative flex flex-col bg-white border border-gray-100 rounded-md p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-64 w-full mb-6 overflow-hidden bg-gray-100 rounded-sm">
        <div className="absolute inset-0 bg-red-600 rounded-sm transform translate-x-0 translate-y-0 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-300 -z-10"></div>

        <div className="relative w-full h-full border border-gray-200 rounded-sm overflow-hidden">
          {item.images.map((img: string, index: number) => (
            <img
              key={index}
              src={img}
              alt={`${item.title} - Foto ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>

        <span className="absolute top-3 left-3 bg-gray-900/90 backdrop-blur-sm text-white font-bold text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm z-20">
          {item.tag}
        </span>

        {item.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 hover:bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-all z-20 backdrop-blur-sm"
            >
              &#10094;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 hover:bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-all z-20 backdrop-blur-sm"
            >
              &#10095;
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {item.images.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-4 bg-red-600"
                      : "w-1.5 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col flex-grow px-2">
        <h2 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-snug">
          {item.title}
        </h2>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="text-left">
            <p className="text-sm font-bold text-gray-800 leading-tight">
              {item.narasumber}
            </p>
            <p className="text-xs font-medium text-gray-400 mt-0.5">
              {item.instansi}
            </p>
          </div>

          <Link
            href={item.images[0]}
            target="_blank"
            className="inline-flex items-center justify-center bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-red-600 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm border border-gray-200 hover:border-red-200 transition-colors"
          >
            Buka Gambar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DokumentasiPertemuan() {
  const dokumentasiList = [
    {
      id: 1,
      title: "Kejujuran Sebagai Fondasi UMKM Berkelanjutan",
      narasumber: "H. Adib Ali Rahbini, Lc., M.Pd.",
      instansi: "Kepala MTs Miftahul Hasan",
      images: [
        "/images/adib-1p.jpeg",
        "/images/adib-2p.jpeg",
        "/images/adib-3p.jpeg",
        "/images/adib-4p.jpeg",
      ],
      tag: "Etika Bisnis",
    },
    {
      id: 2,
      title: "Psikologi Pemasaran & Strategi Penetrasi Pasar",
      narasumber: "Nurul I. Syafira, M.Psi.",
      instansi: "Dosen Inst. Ahmad Dahlan",
      images: [
        "/images/syafira-1p.jpeg",
        "/images/syafira-2p.jpeg",
        "/images/syafira-3p.jpeg",
      ],
      tag: "Pemasaran",
    },
    {
      id: 3,
      title: "Peran Content Creator & Strategi Pemasaran Digital Desa Wisata",
      narasumber: "M. Paesol, S.I.Kom, M.Pd.",
      instansi: "Dosen IAI Nurul Huda",
      images: [
        "/images/paesol-1p.jpeg",
        "/images/paesol-2p.jpeg",
        "/images/paesol-3p.jpeg",
        "/images/paesol-4p.jpeg",
      ],
      tag: "Digital Marketing",
    },
    {
      id: 4,
      title: "Tata Kelola Manajemen Keuangan Mikro & Hukum Syariah",
      narasumber: "Yumas Adi P., S.H., M.Pd.",
      instansi: "Dosen IAI Nurul Huda Situbondo",
      images: [
        "/images/foto-kegiatan-2.jpg",
        "/images/DSC_4170.JPG",
        "/images/DSC_4207.JPG",
      ],
      tag: "Manajemen",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24 text-gray-900 font-sans">
      <section className="relative w-full h-[35vh] min-h-[300px] pt-20 overflow-hidden">
        <img
          src="/images/hero-3.jpeg"
          alt="Banner Dokumentasi"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-gray-900/80"></div>
      </section>

      <section className="relative z-10 -mt-16 container mx-auto px-6 max-w-7xl mb-16">
        <div className="bg-white rounded-md shadow-xl shadow-gray-200/50 border-t-4 border-t-red-600 border-x border-b border-gray-100 p-8 md:p-12 relative overflow-hidden">
          <div className="inline-block bg-red-100 text-red-700 font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4 rounded-sm">
            Arsip Visual
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Dokumentasi Pertemuan & Presentasi
          </h1>
          <p className="text-gray-500 max-w-3xl leading-relaxed mb-8">
            Kumpulan salinan materi presentasi, modul visual, dan dokumentasi
            kegiatan tatap muka yang dipaparkan langsung oleh para fasilitator
            ahli selama program Inkubasi UMKM Komunitas Arang.
          </p>

          <Link
            href="/kegiatan/materi"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide px-6 py-3 rounded-md transition-all shadow-md shadow-red-600/20"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            Unduh Materi Lengkap
          </Link>
        </div>
      </section>

      <main className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {dokumentasiList.map((item) => (
            <CarouselCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}
