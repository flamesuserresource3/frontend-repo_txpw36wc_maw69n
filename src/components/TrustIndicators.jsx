import { ShieldCheck, BadgeCheck, Headphones } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'Escrow Aman',
    desc: 'Dana disimpan aman hingga muatan terkirim sesuai kesepakatan.',
  },
  {
    icon: BadgeCheck,
    title: 'Pengguna Terverifikasi',
    desc: 'KTP/SIM untuk sopir dan legalitas bisnis untuk pengirim.',
  },
  {
    icon: Headphones,
    title: 'Dukungan 24/7',
    desc: 'Tim kami siap membantu kapan pun Anda butuh.',
  },
];

const TrustIndicators = () => {
  return (
    <section className="bg-emerald-50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-2xl font-bold text-emerald-900 sm:text-3xl">
          Keamanan & Kepercayaan di Qargoin
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-100"
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-6 w-6 text-emerald-700" />
                <h3 className="text-lg font-semibold text-emerald-900">{item.title}</h3>
              </div>
              <p className="mt-3 text-emerald-800">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
