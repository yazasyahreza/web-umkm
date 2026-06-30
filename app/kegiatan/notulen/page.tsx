import Link from "next/link";

export default function NotulenRapat() {
  // Data susunan panitia diekstrak dari file PDF Notulen
  const panitia = [
    { nama: "Mujiburrahman", peran: "Ketua Pelaksana" },
    { nama: "Budianto", peran: "Sekretaris Pelaksana" },
    { nama: "May Susanti", peran: "Bendahara Pelaksana" },
    { nama: "Zainullah", peran: "Divisi Acara & Logistik" },
    { nama: "Faisol", peran: "Divisi Publikasi & Dokumentasi" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24 text-gray-900 font-sans">
      {/* --- BANNER HEADER --- */}
      <section className="relative w-full h-[35vh] min-h-[300px] pt-20 overflow-hidden">
        {/* Gunakan salah satu foto rapat yang agak lebar sebagai cover banner */}
        <img
          src="/images/hero-3.webp"
          alt="Banner Rapat"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
      </section>

      {/* --- HEADER KONTEN (OVERLAP) --- */}
      <section className="relative z-10 -mt-16 container mx-auto px-6 max-w-7xl mb-12">
        <div className="bg-white rounded-md shadow-xl shadow-gray-200/50 border-t-4 border-t-red-600 border-x border-b border-gray-100 p-8 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="inline-block bg-red-100 text-red-700 font-bold text-xs uppercase tracking-widest px-3 py-1 mb-4 rounded-sm">
              Notulen Pra-Kegiatan
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
              Rapat Persiapan Inkubasi UMKM
            </h1>
            <p className="text-gray-500 font-medium flex items-center gap-2">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              Pimpinan Rapat: Muhammad Nasrullah
            </p>
          </div>
        </div>
      </section>

      {/* --- KONTEN UTAMA --- */}
      <main className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row gap-10">
        {/* KOLOM KIRI (Teks Notulen) */}
        <div className="w-full lg:w-2/3 space-y-8">
          {/* Card Agenda & Pembahasan */}
          <div className="bg-white p-8 rounded-md border border-gray-100 shadow-sm">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6 border-b border-gray-100 pb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
                1
              </span>
              Agenda & Pembahasan Rapat
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Persiapan Kegiatan
                </h3>
                <p>
                  Penyampaian perkembangan teknis administrasi, jadwal,
                  penyediaan sarana prasarana, serta koordinasi narasumber.
                  Seluruh dokumen pendukung dan verifikasi ulang daftar peserta
                  harus segera diselesaikan.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Materi & Narasumber
                </h3>
                <p>
                  Materi difokuskan pada penguatan manajemen usaha, pemasaran
                  digital, keuangan, legalitas, dan pengembangan produk.
                  Narasumber akan dihubungi kembali untuk finalisasi jadwal.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Teknis Pelaksanaan & Evaluasi
                </h3>
                <p>
                  Registrasi dilakukan sebelum acara. Tim dibagi sesuai tugas
                  (registrasi, konsumsi, pendampingan). Setiap sesi akan
                  dimonitoring dan peserta akan diberikan instrumen evaluasi
                  pencapaian program.
                </p>
              </div>
            </div>
          </div>

          {/* Card Keputusan Rapat */}
          <div className="bg-white p-8 rounded-md border border-gray-100 shadow-sm">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6 border-b border-gray-100 pb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
                2
              </span>
              Keputusan Rapat
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
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
                <span>
                  Pelaksanaan Kegiatan Inkubasi UMKM sesuai jadwal yang telah
                  ditetapkan.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
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
                <span>
                  Seluruh tim wajib menyelesaikan tugas paling lambat sebelum
                  hari H pelaksanaan.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
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
                <span>
                  Verifikasi data peserta selesai sebelum acara, dan koordinasi
                  narasumber maksimal H-1.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
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
                <span>
                  Dokumentasi dan laporan kegiatan menjadi tanggung jawab
                  bersama tim.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* KOLOM KANAN (Sidebar Dokumentasi & Panitia) */}
        <div className="w-full lg:w-1/3 space-y-8">
          {/* Card Dokumentasi Rapat */}
          <div className="bg-white p-6 rounded-md border border-gray-100 shadow-sm">
            <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-4 border-l-4 border-red-600 pl-3">
              Momen Rapat
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {/* Foto 1 */}
              <Link
                href="/images/rapat-1.webp"
                target="_blank"
                className="block w-full h-24 overflow-hidden rounded-sm border border-gray-200 hover:opacity-80 transition-opacity"
              >
                <img
                  src="/images/rapat-1.webp"
                  alt="Rapat 1"
                  className="w-full h-full object-cover"
                />
              </Link>

              {/* Foto 2 */}
              <Link
                href="/images/rapat-2.webp"
                target="_blank"
                className="block w-full h-24 overflow-hidden rounded-sm border border-gray-200 hover:opacity-80 transition-opacity"
              >
                <img
                  src="/images/rapat-2.webp"
                  alt="Rapat 2"
                  className="w-full h-full object-cover"
                />
              </Link>

              {/* Foto 3 */}
              <Link
                href="/images/rapat-3.webp"
                target="_blank"
                className="block w-full h-24 overflow-hidden rounded-sm border border-gray-200 hover:opacity-80 transition-opacity"
              >
                <img
                  src="/images/rapat-3.webp"
                  alt="Rapat 3"
                  className="w-full h-full object-cover"
                />
              </Link>

              {/* Foto 4 */}
              <Link
                href="/images/rapat-4.webp"
                target="_blank"
                className="block w-full h-24 overflow-hidden rounded-sm border border-gray-200 hover:opacity-80 transition-opacity"
              >
                <img
                  src="/images/rapat-4.webp"
                  alt="Rapat 4"
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
          </div>

          {/* Card Susunan Panitia */}
          <div className="bg-white p-6 rounded-md border border-gray-100 shadow-sm">
            <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-4 border-l-4 border-red-600 pl-3">
              Tim Pelaksana
            </h3>
            <div className="divide-y divide-gray-100">
              {panitia.map((person, index) => (
                <div
                  key={index}
                  className="py-3 flex justify-between items-center group"
                >
                  <span className="font-bold text-gray-800 text-sm group-hover:text-red-600 transition-colors">
                    {person.nama}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-sm">
                    {person.peran}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
