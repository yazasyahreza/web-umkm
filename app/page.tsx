"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const heroImages = [
    "/images/hero-1.webp",
    "/images/hero-2.webp",
    "/images/hero-3.webp",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () =>
    setCurrentImage((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentImage((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));

  return (
    <div className="bg-white min-h-screen text-gray-900 selection:bg-red-600 selection:text-white font-sans">
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
          </div>
        ))}

        <div className="container mx-auto px-6 relative z-10 w-full pt-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-sm bg-red-600/20 border border-red-500/30 backdrop-blur-sm">
              <span className="text-red-100 font-semibold text-xs tracking-widest uppercase">
                Portal Informasi Komunitas Arang
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight text-white tracking-tight drop-shadow-md">
              Katalisator <span className="text-red-500">UMKM</span> <br />
              Menuju Ekosistem <br /> Digital Nasional
            </h1>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl drop-shadow">
              Pusat informasi resmi program inkubasi Komunitas Arang. Temukan
              data kegiatan, arsip materi pelatihan, profil narasumber ahli, dan
              dokumentasi pengembangan ekonomi lokal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full mb-10 md:mb-0">
              <a
                href="/kegiatan/dokumentasi"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 px-8 rounded-md transition-all text-sm tracking-wide shadow-lg shadow-red-600/30 text-center"
              >
                Lihat Kegiatan
              </a>
              <a
                href="/tentang"
                className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-semibold py-3.5 px-8 rounded-md transition-all text-sm tracking-wide text-center"
              >
                Tentang Komunitas
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md items-center justify-center text-white transition-all z-20"
        >
          &#10094;
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md items-center justify-center text-white transition-all z-20"
        >
          &#10095;
        </button>

        <div className="absolute bottom-24 lg:bottom-32 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-10 h-1 transition-all rounded-full ${
                index === currentImage
                  ? "bg-red-500"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="relative z-20 -mt-16 lg:-mt-24 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-md shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center rounded-sm mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Legalitas & PIRT
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Pengurusan perizinan dasar, NIB, dan sertifikasi PIRT untuk
              keamanan produk.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center rounded-sm mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Manajemen Bisnis
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Pembukuan sederhana, administrasi UMKM, dan psikologi pemasaran.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center rounded-sm mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Digital Marketing
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Strategi optimasi media sosial dan pemanfaatan marketplace
              nasional.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-12 h-12 bg-red-50 text-red-600 flex items-center justify-center rounded-sm mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Content Creation
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Teknik mengemas foto dan video produk yang menarik secara visual.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-32 pb-24 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6 leading-snug">
                Membangun Kemandirian <br className="hidden md:block" />
                <span className="text-red-600">Pelaku Usaha Lokal</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Komunitas Arang menginisiasi program Inkubasi UMKM sebagai
                bentuk komitmen nyata dalam memajukan perekonomian daerah. Kami
                memadukan teori akademis dan praktik langsung di lapangan.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Melalui kolaborasi dengan berbagai pakar dan praktisi, peserta
                akan dibimbing secara intensif dari tahap legalitas usaha,
                manajemen produk, hingga penguasaan strategi pasar digital.
              </p>
              <a
                href="/tentang"
                className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-wider text-sm hover:text-red-800 transition-colors"
              >
                Selengkapnya Tentang Kami &rarr;
              </a>
            </div>

            <div className="md:w-1/2 relative px-2 sm:px-6 mt-8 md:mt-0">
              <div className="absolute inset-0 bg-red-100 rounded-full blur-3xl opacity-60 -z-10 transform scale-95"></div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="relative group h-48 sm:h-56">
                  <div className="absolute inset-0 bg-red-600 rounded-md transform -translate-x-2 translate-y-2 sm:-translate-x-3 sm:translate-y-3 transition-transform duration-300 group-hover:-translate-x-4 group-hover:translate-y-4"></div>

                  <div className="relative h-full w-full rounded-md border-4 border-white overflow-hidden shadow-lg z-10 bg-gray-100">
                    <img
                      src="/images/profil-1.webp"
                      alt="Dokumentasi-Narsum1"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="relative group h-48 sm:h-56 mt-12 sm:mt-16">
                  <div className="absolute inset-0 bg-red-600 rounded-md transform translate-x-2 -translate-y-2 sm:translate-x-3 sm:-translate-y-3 transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4"></div>

                  <div className="relative h-full w-full rounded-md border-4 border-white overflow-hidden shadow-lg z-10 bg-gray-200">
                    <img
                      src="/images/profil-2.webp"
                      alt="Dokumentasi-Narsum2"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <div className="inline-block bg-red-100 text-red-700 font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4 rounded-sm">
                Fasilitator Ahli
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Belajar Langsung dari Praktisi
              </h2>
            </div>
            <a
              href="/narasumber"
              className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-sm hover:text-red-800 transition-colors mt-4 md:mt-0"
            >
              Lihat Profil Lengkap &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden border border-gray-200 group-hover:border-red-200 transition-colors">
                <img
                  src="/images/man (1).webp"
                  alt="H. Adib Ali Rahbini"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                H. Adib Ali Rahbini, Lc., M.Pd.
              </h3>
              <p className="text-[10px] font-bold text-red-700 mb-3 uppercase tracking-widest line-clamp-1">
                Kepala MTs Miftahul Hasan
              </p>
              <p className="text-sm text-gray-500 px-2 leading-relaxed">
                Akademisi lulusan Universitas Al-Azhar Kairo yang berpengalaman
                dalam kepemimpinan lembaga pendidikan.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden border border-gray-200 group-hover:border-red-200 transition-colors">
                <img
                  src="/images/woman.webp"
                  alt="Nurul Intan Syafira"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                Nurul I. Syafira, M.Psi.
              </h3>
              <p className="text-[10px] font-bold text-red-700 mb-3 uppercase tracking-widest line-clamp-1">
                Dosen Inst. Ahmad Dahlan
              </p>
              <p className="text-sm text-gray-500 px-2 leading-relaxed">
                Pakar psikologi lulusan UIN Malang yang mendalami pendekatan
                psikoterapi dan komunikasi massa.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden border border-gray-200 group-hover:border-red-200 transition-colors">
                <img
                  src="/images/man (2).webp"
                  alt="Mohamad Paesol"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                M. Paesol, S.I.Kom, M.Pd.
              </h3>
              <p className="text-[10px] font-bold text-red-700 mb-3 uppercase tracking-widest line-clamp-1">
                Dosen IAI Nurul Huda
              </p>
              <p className="text-sm text-gray-500 px-2 leading-relaxed">
                Praktisi berlatar belakang Ilmu Komunikasi (FISIP) dan Tarbiyah
                untuk strategi penyampaian materi efektif.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden border border-gray-200 group-hover:border-red-200 transition-colors">
                <img
                  src="/images/man (3).webp"
                  alt="Yumas Adi Putra"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                Yumas Adi P., S.H., M.Pd.
              </h3>
              <p className="text-[10px] font-bold text-red-700 mb-3 uppercase tracking-widest line-clamp-1">
                Dosen IAI Nurul Huda
              </p>
              <p className="text-sm text-gray-500 px-2 leading-relaxed">
                Menguasai Hukum Ekonomi Syari'ah dan Manajemen Pendidikan Islam
                untuk mendampingi tata kelola UMKM.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-gray-200 pb-6 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight border-l-4 border-red-600 pl-4">
                Berita & Kegiatan Terbaru
              </h2>
              <p className="text-gray-500 mt-2 pl-5">
                Pantau terus dinamika dan dokumentasi program inkubasi kami.
              </p>
            </div>
            <a
              href="/kegiatan"
              className="inline-flex items-center gap-2 text-gray-900 font-bold uppercase tracking-wider text-sm hover:text-red-600 transition-colors mt-4 md:mt-0"
            >
              Lihat Arsip Lengkap &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden group flex flex-col h-full">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img
                  src="/images/rapat-1.webp"
                  alt="Rapat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-white bg-red-600 px-2 py-1 uppercase rounded-sm">
                    Notulen Rapat
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-snug">
                  Rapat Persiapan Peluncuran Inkubasi Angkatan 2026
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  Dipimpin oleh Sdr. Mujiburrahman (Ketua Pelaksana), rapat ini
                  mematangkan fokus materi, verifikasi peserta, hingga teknis
                  operasional H-1.
                </p>
                <a
                  href="/kegiatan/notulen"
                  className="mt-auto text-xs font-bold text-gray-900 uppercase tracking-wider hover:text-red-600 transition-colors inline-flex items-center gap-1"
                >
                  Baca Selengkapnya <span className="text-red-600">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden group flex flex-col h-full">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img
                  src="/images/adib-2p.webp"
                  alt="Presentasi Kejujuran UMKM"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-white bg-red-600 px-2 py-1 uppercase rounded-sm">
                    Dokumentasi Pertemuan
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-snug">
                  Kejujuran Sebagai Fondasi UMKM Berkelanjutan
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  Materi presentasi dari H. Adib Ali Rahbini, Lc., M.Pd.
                  mengenai mengapa kejujuran adalah fondasi yang tidak boleh
                  goyah dalam membangun kerjasama bisnis.
                </p>
                <a
                  href="/kegiatan/dokumentasi"
                  className="mt-auto text-xs font-bold text-gray-900 uppercase tracking-wider hover:text-red-600 transition-colors inline-flex items-center gap-1"
                >
                  Baca Selengkapnya <span className="text-red-600">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden group flex flex-col h-full">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img
                  src="images/materi-1.webp"
                  alt="Sosmed"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest text-white bg-red-600 px-2 py-1 uppercase rounded-sm">
                    Materi
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-snug">
                  Strategi Pemasaran Produk Melalui Sosial Media
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  Bagaimana UMKM dapat memanfaatkan platform sosial media untuk
                  menjangkau pembeli di luar kota.
                </p>
                <a
                  href="/kegiatan/materi"
                  className="mt-auto text-xs font-bold text-gray-900 uppercase tracking-wider hover:text-red-600 transition-colors inline-flex items-center gap-1"
                >
                  Unduh Materi <span className="text-red-600">&darr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-red-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-red-600 opacity-50 blur-3xl"></div>

        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <p className="text-red-200 text-sm font-bold uppercase tracking-widest mb-4">
            Ketua Komunitas Arang: Muhammad Nasrullah
          </p>
          <h2 className="text-4xl font-extrabold mb-6 drop-shadow-sm">
            Siap Menaikkan Skala Bisnis Anda?
          </h2>
          <p className="text-red-100 text-lg mb-10 leading-relaxed">
            Ikuti perjalanan inkubasi Komunitas Arang dan akses materi
            pengembangan usaha yang telah kami siapkan khusus untuk menunjang
            pertumbuhan UMKM lokal di tahun 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kegiatan/materi"
              className="bg-white text-red-700 font-bold py-4 px-10 rounded-md uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors shadow-lg text-center"
            >
              Lihat Kurikulum
            </a>
            <a
              href="https://wa.me/6281333197383"
              target="_blank"
              className="bg-transparent border border-red-400 text-white font-bold py-4 px-10 rounded-md uppercase tracking-wider text-sm hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
