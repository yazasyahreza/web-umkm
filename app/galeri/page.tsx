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

      {/* Bagian Bawah Kartu (Sudah diubah menjadi Judul dan Deskripsi) */}
      <div className="flex flex-col flex-grow px-2">
        <h2 className="text-[17px] font-extrabold text-gray-900 mb-2 group-hover:text-red-600 transition-colors leading-snug">
          {item.title}
        </h2>

        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">
          {item.deskripsi}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-end">
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
      title: "Penyerahan Sertifikat Peserta Inkubasi",
      deskripsi:
        "Momen penyerahan sertifikat kepada para pelaku UMKM yang telah menyelesaikan seluruh rangkaian program pelatihan.",
      images: [
        "/images/hero-1.webp",
        "/images/hero-2.webp",
        "/images/hero-3.webp",
      ],
      tag: "Dokumentasi Pertemuan 1",
    },
    {
      id: 2,
      title: "Penutupan & Sesi Foto Bersama",
      deskripsi:
        "Semangat kolaborasi antara fasilitator, panitia, dan peserta untuk terus memajukan potensi desa wisata.",
      images: ["/images/hero-4.webp", "/images/hero-5.webp"],
      tag: "Dokumentasi Pertemuan 2",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24 text-gray-900 font-sans">
      {/* Gambar Banner Atas */}
      <section className="relative w-full h-[35vh] min-h-[300px] pt-20 overflow-hidden">
        <img
          src="/images/hero-3.webp"
          alt="Banner Rapat"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
      </section>

      {/* Kartu Galeri yang posisinya dinaikkan menimpa banner */}
      <main className="relative z-10 -mt-24 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {dokumentasiList.map((item) => (
            <CarouselCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}
