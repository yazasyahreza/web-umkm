import Link from "next/link";

export default function MateriInkubasi() {
  const materiList = [
    {
      id: 1,
      kategori: "Etika Bisnis",
      judul: "Kejujuran Sebagai Fondasi UMKM Berkelanjutan",
      narasumber: "By: H. Adib Ali Rahbini, Lc., M.Pd.",
      format: "PPTX",
      ukuran: "9.2 MB",
      link: "https://docs.google.com/presentation/d/1mbA_ULvAiMWb6AewlJlo0pC_u7gN0fGH/edit?usp=sharing&ouid=108767725021317813689&rtpof=true&sd=true",
    },
    {
      id: 2,
      kategori: "Etika Bisnis",
      judul: "Dari Kejujuran Menuju UMKM yang Berkelanjutan",
      narasumber: "By: H. Adib Ali Rahbini, Lc., M.Pd.",
      format: "PPTX",
      ukuran: "5.3 MB",
      link: "https://docs.google.com/presentation/d/1v7wfHJ9dxXPE4cnufINhQPgAbbcardbu/edit?usp=drive_link&ouid=108767725021317813689&rtpof=true&sd=true",
    },
    {
      id: 3,
      kategori: "Pemasaran",
      judul: "Psikologi Pemasaran",
      narasumber: "Nurul I. Syafira, M.Psi.",
      format: "PPTX",
      ukuran: "10.4 MB",
      link: "https://docs.google.com/presentation/d/1apGUOgpAdI1ebDe-FCU54jTaD9ce9s7S/edit?usp=drive_link&ouid=108767725021317813689&rtpof=true&sd=true",
    },
    {
      id: 4,
      kategori: "Digital Marketing",
      judul: "Strategi Pemasaran Digital Sosmed",
      narasumber: "M. Paesol, S.I.Kom, M.Pd.",
      format: "PDF",
      ukuran: "1 MB",
      link: "https://drive.google.com/file/d/1Dh9Ldyw4arV-eGT2M04WvoJq2pI3EXyf/view?usp=drive_link",
    },
    {
      id: 5,
      kategori: "Digital Marketing",
      judul: "Peran Content Creator dlm Pengembangan Desa Wisata",
      narasumber: "M. Paesol, S.I.Kom, M.Pd.",
      format: "PDF",
      ukuran: "6 MB",
      link: "https://drive.google.com/file/d/11lA1VvZCios2QImEDbPZKbF5Q5lmI56V/view?usp=drive_link",
    },
    {
      id: 6,
      kategori: "Legalitas & Administrasi",
      judul: "Mengenal UMKM & Administrasinya",
      narasumber: "Yumas Adi P., S.H., M.Pd.",
      format: "PPTX",
      ukuran: "5 MB",
      link: "https://docs.google.com/presentation/d/1C-obXf56xBm0QnjpvdKXdbjbrPgJ9jrh/edit?usp=drive_link&ouid=108767725021317813689&rtpof=true&sd=true",
    },
    {
      id: 7,
      kategori: "Legalitas & Administrasi",
      judul: "Pengurusan PIRT Untuk UMKM Desa",
      narasumber: "Yumas Adi P., S.H., M.Pd.",
      format: "PPTX",
      ukuran: "10.7 MB",
      link: "https://docs.google.com/presentation/d/1VGrudwPu6vxMgatB5atk3EQ0K0-wH_rl/edit?usp=drive_link&ouid=108767725021317813689&rtpof=true&sd=true",
    },
    {
      id: 8,
      kategori: "Legalitas & Administrasi",
      judul: "Pentingnya Legalitas Usaha",
      narasumber: "Yumas Adi P., S.H., M.Pd.",
      format: "PPTX",
      ukuran: "7 MB",
      link: "https://docs.google.com/presentation/d/1G6bF1B36m5Mb2H04Ldl8xDfmAtNSNQvG/edit?usp=drive_link&ouid=108767725021317813689&rtpof=true&sd=true",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24 text-gray-900 font-sans">
      <section className="relative w-full h-[35vh] min-h-[300px] pt-20 overflow-hidden">
        <img
          src="/images/hero-3.webp"
          alt="Banner Materi"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
      </section>

      <section className="relative z-10 -mt-16 container mx-auto px-6 max-w-7xl mb-12">
        <div className="bg-white rounded-md shadow-xl shadow-gray-200/50 border-t-4 border-t-red-600 border-x border-b border-gray-100 p-6 md:p-8 relative overflow-hidden">
          <div className="inline-block bg-red-100 text-red-700 font-bold text-xs uppercase tracking-widest px-3 py-1 mb-3 rounded-sm">
            Pusat Unduhan
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Materi & Kurikulum Inkubasi
          </h1>

          <p className="text-gray-500 w-full leading-relaxed">
            Akses dan unduh seluruh modul pelatihan, presentasi narasumber,
            serta lembar kerja yang digunakan selama program Inkubasi UMKM
            Komunitas Arang. Materi ini disediakan khusus untuk membantu
            pengembangan skala bisnis Anda.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {materiList.map((materi) => (
            <div
              key={materi.id}
              className="group relative bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex items-start gap-5 mb-6 flex-grow">
                <div className="w-14 h-14 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 border border-red-100 group-hover:scale-110 transition-transform duration-300">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-widest rounded-sm">
                      {materi.kategori}
                    </span>
                  </div>
                  <h2 className="text-lg font-extrabold text-gray-900 leading-snug group-hover:text-red-600 transition-colors">
                    {materi.judul}
                  </h2>
                  <p className="text-sm font-medium text-gray-500 mt-2 flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                    {materi.narasumber}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                  <span className="bg-gray-100 px-2 py-1 rounded-sm text-gray-500">
                    {materi.format}
                  </span>
                  <span>• {materi.ukuran}</span>
                </div>

                <Link
                  href={materi.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white border border-gray-200 hover:border-red-600 hover:bg-red-50 text-gray-700 hover:text-red-600 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-md transition-colors"
                >
                  Buka Modul
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
