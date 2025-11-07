import { CreditCard, BookOpen, MessageCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="bg-emerald-900 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-semibold text-white">Saldo & Transaksi</h3>
            <p className="mt-2 text-emerald-100">Pantau saldo Qargoin dan riwayat transaksi Anda.</p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#D9651A] px-4 py-2 text-sm font-semibold text-white hover:brightness-110">
              <CreditCard className="h-4 w-4" />
              💰 Isi Saldo
            </button>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-semibold text-white">Tips Sopir & Pengirim</h3>
            <p className="mt-2 text-emerald-100">Artikel singkat untuk membantu Anda menggunakan Qargoin.</p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-emerald-900 hover:bg-emerald-50">
              <BookOpen className="h-4 w-4" />
              Baca Artikel
            </button>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-semibold text-white">Bantuan</h3>
            <p className="mt-2 text-emerald-100">Butuh bantuan cepat? Tim kami siap membantu 24/7.</p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-emerald-900 hover:bg-emerald-50">
              <MessageCircle className="h-4 w-4" />
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
