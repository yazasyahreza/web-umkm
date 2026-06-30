import Link from "next/link";

export default function TentangKomunitas() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24 text-gray-900 font-sans selection:bg-red-600 selection:text-white">
      {/* --- BANNER HEADER --- */}
      <section className="relative w-full h-[45vh] min-h-[350px] pt-20 overflow-hidden bg-gray-100">
        <img
          src="/images/hero-2.webp"
          alt="Banner Tentang Kami"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gray-900/50"></div>
      </section>

      {/* --- HEADER KONTEN (OVERLAP) KEMBALI CLEAN & MINIMALIS --- */}
      <section className="relative z-10 -mt-32 container mx-auto px-6 max-w-7xl mb-24">
        <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl shadow-gray-900/10 border border-gray-100 p-8 md:p-14 relative overflow-hidden group text-center">
          {/* Garis Aksen Merah */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-700 via-red-500 to-red-700"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-md bg-red-50 border border-red-100/60 text-red-600 font-bold text-[10px] uppercase tracking-widest shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              Tentang Kami
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Katalisator <span className="text-red-600">Kemandirian UMKM</span>{" "}
              di Era Digital
            </h1>

            <p className="text-gray-500 w-full leading-relaxed md:text-lg">
              Komunitas Arang lebih dari sekadar forum pertemuan; kami adalah
              wadah gotong royong yang lahir dari keresahan dan harapan para
              pelaku ekonomi desa. Kami bergerak bersama, mendampingi pengusaha
              lokal dari tahap legalitas dasar hingga penguasaan strategi pasar
              digital nasional.
            </p>
          </div>
        </div>
      </section>

      {/* --- JEJAK & IDENTITAS KOMUNITAS --- */}
      <section className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-red-600 rounded-2xl transform rotate-3 scale-105 opacity-20 transition-transform duration-700 group-hover:rotate-6"></div>
            <img
              src="/images/rapat-1.webp"
              alt="Kegiatan Komunitas"
              className="relative z-10 w-full h-full object-cover rounded-2xl border-4 border-white shadow-xl grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
              Nilai & Perjuangan Kami
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Gotong Royong Tanpa Pamrih
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Kami percaya bahwa kemajuan tidak bisa dicapai sendirian.
                  Komunitas ini menjunjung tinggi semangat saling bantu antar
                  anggota, membagikan ilmu tanpa batas, dan saling mempromosikan
                  produk lokal.
                </p>
              </div>
              <div className="w-full h-px bg-gray-200"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Aksi Nyata, Bukan Sekadar Teori
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Melalui program Inkubasi UMKM, kami tidak hanya memberikan
                  materi di atas kertas. Kami memfasilitasi pembuatan legalitas
                  NIB, PIRT, hingga praktik langsung optimalisasi sosial media
                  dan e-commerce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VISI & MISI SECTION --- */}
      <section className="container mx-auto px-6 max-w-7xl mb-24">
        {/* Header Visi Misi */}
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold uppercase tracking-widest text-xs">
            Arah Gerak
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
            Visi & Misi Komunitas Arang
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Fondasi yang menjadi kompas bagi setiap langkah dan program kerja
            kami dalam memberdayakan pelaku usaha lokal.
          </p>
        </div>

        {/* Grid Card Visi dan Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Card Visi */}
          <div className="bg-white p-8 md:p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-red-900/5 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10 group-hover:bg-red-50 transition-colors duration-500"></div>
            <div className="w-14 h-14 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-6 shadow-md">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4 border-l-4 border-red-600 pl-4">
              Visi Kami
            </h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Menjadikan ekosistem UMKM tingkat desa mandiri, berdaya saing
              tinggi, dan sepenuhnya melek digital agar mampu menembus batas
              pasar tradisional.
            </p>
          </div>

          {/* Card Misi */}
          <div className="bg-white p-8 md:p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-red-900/5 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10 group-hover:bg-red-50 transition-colors duration-500"></div>
            <div className="w-14 h-14 bg-red-600 text-white rounded-lg flex items-center justify-center mb-6 shadow-md shadow-red-600/20">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4 border-l-4 border-red-600 pl-4">
              Misi Kami
            </h3>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Memberikan pendampingan pengurusan legalitas dan PIRT.
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Menyediakan pelatihan manajemen bisnis dan pembukuan modern.
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Mengoptimalkan strategi pemasaran digital dan pembuatan konten
                visual.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION (CTA) --- */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="bg-gray-900 rounded-2xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-red-600 opacity-20 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
              Siap Bergabung dengan Pergerakan Kami?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
              Jangan berjalan sendirian. Bergabunglah dengan puluhan pelaku
              usaha lainnya dan akses materi pelatihan kami secara gratis.
            </p>
            <Link
              href="/kegiatan/dokumentasi"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide px-8 py-4 rounded-xl transition-all shadow-lg shadow-red-600/30"
            >
              Jelajahi Kegiatan Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
