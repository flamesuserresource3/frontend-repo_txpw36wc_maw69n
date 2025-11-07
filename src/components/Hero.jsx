import { Truck, Search, UserPlus } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:flex lg:items-center lg:gap-10 lg:py-24">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-900 ring-1 ring-emerald-200">
            Qargoin — Freight Made Simple, Fair, and Local
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl">
            Kirim & Angkut Barang Tanpa Ribet.
          </h1>
          <p className="mt-4 text-lg leading-8 text-emerald-800">
            Qargoin menghubungkan pengirim dan sopir secara mudah, transparan, dan aman. Dari paket kecil hingga muatan penuh — semua dalam satu aplikasi.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D9651A] px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D9651A] sm:w-auto"
              aria-label="Pasang Muatan"
            >
              <Truck className="h-5 w-5" />
              🚛 Pasang Muatan
            </a>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-900 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-900 sm:w-auto"
              aria-label="Cari Muatan Terdekat"
            >
              <Search className="h-5 w-5" />
              🔍 Cari Muatan Terdekat
            </a>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-100 px-5 py-3 text-base font-semibold text-emerald-900 shadow-sm ring-1 ring-emerald-200 transition hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-900 sm:w-auto"
              aria-label="Bergabung sebagai Sopir"
            >
              <UserPlus className="h-5 w-5" />
              Bergabung sebagai Sopir
            </a>
          </div>

          <p className="mt-4 text-sm text-emerald-700">
            “Qargoin — Angkut Barang Jadi Gampang. Untuk pengirim, untuk sopir, untuk semua.”
          </p>
        </div>

        <div className="relative mt-12 h-64 w-full max-w-xl self-start rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 p-2 ring-1 ring-emerald-200 sm:h-80 lg:mt-0 lg:flex-none">
          <div className="grid h-full grid-cols-2 gap-2">
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-emerald-100">
              <p className="text-sm font-semibold text-emerald-900">Muatan</p>
              <p className="mt-2 text-xs text-emerald-700">Jakarta → Surabaya</p>
              <p className="mt-3 text-emerald-900">Rp 2.500.000</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-emerald-100">
              <p className="text-sm font-semibold text-emerald-900">Truk</p>
              <p className="mt-2 text-xs text-emerald-700">CDE Box • 2 Ton</p>
              <p className="mt-3 text-emerald-900">Siap Hari Ini</p>
            </div>
            <div className="col-span-2 rounded-xl bg-white p-4 shadow-sm ring-1 ring-emerald-100">
              <p className="text-sm font-semibold text-emerald-900">Cara Kerja</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-emerald-800">
                <li>Pengirim pasang muatan</li>
                <li>Sopir menawar secara adil</li>
                <li>Bayar aman via escrow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
