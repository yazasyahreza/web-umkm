export default function SemuaNarasumber() {
  const daftarNarasumber = [
    {
      id: 1,
      nama: "Mohamad Paesol, S.I.Kom, M.Pd",
      tempatTanggalLahir: "Probolinggo, 4 Juli 1997",
      pekerjaanJabatan: "Dosen",
      pendidikanTerakhir: "S2",
      agama: "Islam",
      jenisKelamin: "Laki-laki",
      namaInstansi: "Institut Agama Islam Nurul Huda",
      alamatInstansi: {
        kecamatan: "Kapongann",
        kabKota: "Situbondo",
        provinsi: "Jawa Timur",
      },

      email: "paesol.0407@gmail.com",
      identitas: "3513080107960137",
      pendidikan: [
        {
          no: 1,
          jenjang: "S1",
          universitas: "Universitas Terbuka",
          fakultasJurusan: "FISIP",
        },
        {
          no: 2,
          jenjang: "S2",
          universitas: "UNIKHAMS",
          fakultasJurusan: "Trabiayah",
        },
      ],
    },
    {
      id: 2,
      nama: "H. Adib Ali Rahbini, Lc., M.Pd.",
      tempatTanggalLahir: "Probolinggo, 25 April 1992",
      pekerjaanJabatan: "Kepala MTS",
      pendidikanTerakhir: "S2",
      agama: "Islam",
      jenisKelamin: "Laki-laki",
      namaInstansi: "MTs Miftahul Hasan - Prasi",
      alamatInstansi: {
        jalan: "Jalan mayjend widodo prasi",
        kecamatan: "Gading",
        kabKota: "Probolinggo",
        provinsi: "Jawa Timur",
      },
      email: "adib.rahbini@email.com",
      identitas: "3513092504920001",
      pendidikan: [
        {
          no: 1,
          jenjang: "S1",
          universitas: "Universitas Al-Azhar Kairo - Mesir",
          fakultasJurusan: "Ushuluddin / Tafsir dan Ilmu Al-Qur’an",
        },
        {
          no: 2,
          jenjang: "S2",
          universitas: "Universitas  Ibrahimy Sukorejo",
          fakultasJurusan: "Pendidikan Agama Islam",
        },
      ],
    },
    {
      id: 3,
      nama: "NURUL INTAN SYAFIRA, S.Ag., M.Psi.",
      tempatTanggalLahir: "Probolinggo, 11 MEI 1998",
      pekerjaanJabatan: "Dosen",
      pendidikanTerakhir: "S2",
      agama: "Islam",
      jenisKelamin: "Perempuan",
      namaInstansi: "Institut Ahmad Dahlan Kota Probolinggo",
      alamatInstansi: {
        kecamatan: "Kedopok",
        kabKota: "Kota Probolinggo",
        provinsi: "Jawa Timur",
      },
      email: "syafira0101@gmail.com",
      identitas: "3578022002900003",
      pendidikan: [
        {
          no: 1,
          jenjang: "S1",
          universitas: "UIN Satu Tulungagung",
          fakultasJurusan: "Tasawuf Psikoterapi",
        },
        {
          no: 2,
          jenjang: "S2",
          universitas: "UIN Maulana Malik ibrahim Malang",
          fakultasJurusan: "Magister  Psikologi",
        },
      ],
    },
    {
      id: 4,
      nama: "YUMAS ADI PUTRA, S.Pd, S.H., M.Pd",
      tempatTanggalLahir: "Probolinggo, 11 Mei 1996",
      pekerjaanJabatan: "Dosen",
      pendidikanTerakhir: "S2",
      agama: "Islam",
      jenisKelamin: "Laki-laki",
      namaInstansi: "Institut Agama Islam Nurul Huda Situbondo",
      alamatInstansi: {
        kecamatan: "Kapongan",
        kabKota: "Situbondo",
        provinsi: "Jawa Timur",
      },
      email: "adiputra960511@gmail.com",
      identitas: "-",
      pendidikan: [
        {
          no: 1,
          jenjang: "S1",
          universitas: "Universitas Islam Zainul Hasan Genggong",
          fakultasJurusan: "Pend. Agama Islam",
        },
        {
          no: 2,
          jenjang: "S1",
          universitas: "Institut Agama Islam Nurul Huda Situbondo",
          fakultasJurusan: "Hukum Ekonomi Syariah",
        },
        {
          no: 3,
          jenjang: "S2",
          universitas: "Institut KH Abdul Chalim Mojokerto",
          fakultasJurusan: "Manajemem Pendidikan Islam",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-red-50 px-4 py-24 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl flex flex-col gap-12">
        {/* Looping data narasumber */}
        {daftarNarasumber.map((biodata, index) => (
          <div
            key={biodata.id}
            className="overflow-hidden rounded-[32px] border border-red-200 bg-white shadow-xl shadow-red-200/40"
          >
            <div className="bg-red-100 px-8 py-8 sm:px-10">
              <h1 className="text-3xl font-semibold text-red-800">
                Biodata Narasumber - {index + 1}
              </h1>

              <p className="mt-2 max-w-2xl text-sm text-red-600">
                Detail lengkap narasumber untuk keperluan dokumen dan
                presentasi.
              </p>
            </div>

            <div className="grid gap-6 border-t border-red-200 px-8 py-8 sm:grid-cols-[1fr_1fr]">
              <div className="space-y-4">
                <div className="rounded-[24px] bg-red-50 px-6 py-5 shadow-sm shadow-red-100/80">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-red-500">
                    Nama
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-900">
                    {biodata.nama}
                  </div>
                </div>
                <div className="rounded-[24px] bg-red-50 px-6 py-5 shadow-sm shadow-red-100/80">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-red-500">
                    Tempat/Tanggal Lahir
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-900">
                    {biodata.tempatTanggalLahir}
                  </div>
                </div>
                <div className="rounded-[24px] bg-red-50 px-6 py-5 shadow-sm shadow-red-100/80">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-red-500">
                    Pekerjaan/Jabatan
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-900">
                    {biodata.pekerjaanJabatan}
                  </div>
                </div>
                <div className="rounded-[24px] bg-red-50 px-6 py-5 shadow-sm shadow-red-100/80">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-red-500">
                    Pendidikan Terakhir
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-900">
                    {biodata.pendidikanTerakhir}
                  </div>
                </div>
                <div className="rounded-[24px] bg-red-50 px-6 py-5 shadow-sm shadow-red-100/80">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-red-500">
                    Agama
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-900">
                    {biodata.agama}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[24px] bg-red-50 px-6 py-5 shadow-sm shadow-red-100/80">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-red-500">
                    Nama Instansi
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-900">
                    {biodata.namaInstansi}
                  </div>
                </div>
                <div className="rounded-[24px] bg-red-50 px-6 py-5 shadow-sm shadow-red-100/80">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-red-500">
                    Alamat Instansi
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-slate-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Kecamatan</span>
                      <span>{biodata.alamatInstansi.kecamatan}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Kab/Kota</span>
                      <span>{biodata.alamatInstansi.kabKota}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Provinsi</span>
                      <span>{biodata.alamatInstansi.provinsi}</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-[24px] bg-red-50 px-6 py-5 shadow-sm shadow-red-100/80">
                  <div className="grid gap-3 text-sm text-slate-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Email</span>
                      <span>{biodata.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">No. Identitas</span>
                      <span>{biodata.identitas}</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-[24px] bg-red-50 px-6 py-5 shadow-sm shadow-red-100/80">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-red-500">
                    Jenis Kelamin
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-900">
                    {biodata.jenisKelamin}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-red-200 bg-red-50 px-8 py-8 sm:px-10">
              <h2 className="text-xl font-semibold text-red-800">
                Riwayat Pendidikan
              </h2>
              <div className="mt-5 overflow-x-auto rounded-[28px] border border-red-200 bg-white shadow-sm">
                <table className="min-w-full divide-y divide-red-100 text-left text-sm text-slate-700">
                  <thead className="bg-red-50 text-red-600">
                    <tr>
                      <th className="px-4 py-3 font-medium">No</th>
                      <th className="px-4 py-3 font-medium">Pendidikan</th>
                      <th className="px-4 py-3 font-medium">Universitas</th>
                      <th className="px-4 py-3 font-medium">
                        Fakultas / Jurusan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-red-100 bg-white">
                    {biodata.pendidikan.map((item) => (
                      <tr key={item.no} className="hover:bg-red-50">
                        <td className="px-4 py-3">{item.no}</td>
                        <td className="px-4 py-3">{item.jenjang}</td>
                        <td className="px-4 py-3">{item.universitas}</td>
                        <td className="px-4 py-3">{item.fakultasJurusan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
