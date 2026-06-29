"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isKegiatanActive = pathname.startsWith("/kegiatan");
  const isBerandaActive = pathname === "/";
  const isTentangActive = pathname === "/tentang";

  return (
    <header className="w-full fixed top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group z-50">
          <div className="w-9 h-9 bg-red-600 text-white flex items-center justify-center font-bold text-lg rounded-sm group-hover:bg-red-700 transition-colors">
            A
          </div>
          <span className="font-extrabold text-xl text-gray-900 tracking-tight">
            ARANG
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-500">
          <Link
            href="/"
            className={
              isBerandaActive
                ? "text-gray-900 font-semibold"
                : "hover:text-gray-900 transition-colors"
            }
          >
            Beranda
          </Link>
          <Link
            href="/tentang"
            className={
              isTentangActive
                ? "text-gray-900 font-semibold"
                : "hover:text-gray-900 transition-colors"
            }
          >
            Tentang
          </Link>

          <div className="relative group">
            <button
              className={`transition-colors ${isKegiatanActive ? "text-gray-900 font-semibold" : "hover:text-gray-900"}`}
            >
              Kegiatan
            </button>
            <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-xl border border-gray-100 rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="/kegiatan/jadwal"
                className={`block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-50 ${pathname === "/kegiatan/jadwal" ? "text-red-600 font-semibold" : "hover:text-red-600"}`}
              >
                Jadwal Pertemuan
              </Link>
              <Link
                href="/kegiatan/dokumentasi"
                className={`block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-50 ${pathname === "/kegiatan/dokumentasi" ? "text-red-600 font-semibold" : "hover:text-red-600"}`}
              >
                Dokumentasi Pertemuan
              </Link>
              <Link
                href="/kegiatan/notulen"
                className={`block px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-50 ${pathname === "/kegiatan/notulen" ? "text-red-600 font-semibold" : "hover:text-red-600"}`}
              >
                Notulen Rapat
              </Link>
              <Link
                href="/kegiatan/materi"
                className={`block px-4 py-3 text-sm hover:bg-gray-50 ${pathname === "/kegiatan/materi" ? "text-red-600 font-semibold" : "hover:text-red-600"}`}
              >
                Materi Inkubasi
              </Link>
            </div>
          </div>

          <Link
            href="/narasumber"
            className="hover:text-gray-900 transition-colors"
          >
            Narasumber
          </Link>
          <Link
            href="/galeri"
            className="hover:text-gray-900 transition-colors"
          >
            Galeri
          </Link>
        </div>

        <div className="hidden md:block z-50">
          <a
            href="https://wa.me/nomor-budianto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white hover:bg-red-700 px-5 py-2.5 text-sm font-semibold rounded-md transition-all shadow-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.955c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hubungi Kami
          </a>
        </div>

        <button
          className="md:hidden z-50 p-2 text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-6 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 ${isBerandaActive ? "text-red-600 font-bold" : "text-gray-700 font-medium"}`}
          >
            Beranda
          </Link>
          <Link
            href="/tentang"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2 ${isTentangActive ? "text-red-600 font-bold" : "text-gray-700 font-medium"}`}
          >
            Tentang
          </Link>

          <div className="py-2">
            <span className="block text-gray-900 font-bold mb-2">Kegiatan</span>
            <div className="pl-4 space-y-2 border-l-2 border-red-100">
              <Link
                href="/kegiatan/jadwal"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1 text-sm text-gray-600 hover:text-red-600"
              >
                Jadwal Pertemuan
              </Link>
              <Link
                href="/kegiatan/dokumentasi"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1 text-sm text-gray-600 hover:text-red-600"
              >
                Dokumentasi Pertemuan
              </Link>
              <Link
                href="/kegiatan/notulen"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1 text-sm text-gray-600 hover:text-red-600"
              >
                Notulen Rapat
              </Link>
              <Link
                href="/kegiatan/materi"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1 text-sm text-gray-600 hover:text-red-600"
              >
                Materi Inkubasi
              </Link>
            </div>
          </div>

          <Link
            href="/narasumber"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-gray-700 font-medium"
          >
            Narasumber
          </Link>
          <Link
            href="/galeri"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-gray-700 font-medium"
          >
            Galeri
          </Link>

          <div className="pt-4 mt-2 border-t border-gray-100">
            <a
              href="https://wa.me/6281333197383"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white text-center py-3 rounded-md font-bold block w-full shadow-md"
            >
              Hubungi Kami via WA
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
