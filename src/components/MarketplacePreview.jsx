import { MapPin, Package, Wallet, Truck } from 'lucide-react';

const demoFreight = [
  {
    id: 1,
    route: 'Jakarta → Bandung',
    type: 'Kardus Elektronik',
    weight: '500 kg',
    price: 'Rp 1.200.000',
    truck: 'CDE Box',
  },
  {
    id: 2,
    route: 'Surabaya → Denpasar',
    type: 'Bahan Bangunan',
    weight: '3 Ton',
    price: 'Rp 4.800.000',
    truck: 'CDD Bak',
  },
  {
    id: 3,
    route: 'Semarang → Yogyakarta',
    type: 'Furniture',
    weight: '1.2 Ton',
    price: 'Rp 2.000.000',
    truck: 'Pickup Box',
  },
];

const Card = ({ item }) => (
  <div className="flex flex-col justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-emerald-100">
    <div>
      <div className="flex items-center gap-2 text-emerald-900">
        <MapPin className="h-4 w-4" />
        <p className="font-semibold">{item.route}</p>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-3 text-sm text-emerald-800">
        <div className="flex items-center gap-2">
          <Package className="h-4 w-4" />
          <span>{item.type}</span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="h-4 w-4" />
          <span>{item.truck}</span>
        </div>
        <div className="flex items-center gap-2">
          <Wallet className="h-4 w-4" />
          <span className="font-semibold text-emerald-900">{item.price}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700 ring-1 ring-emerald-100">
            {item.weight}
          </span>
        </div>
      </div>
    </div>
    <button className="mt-4 inline-flex items-center justify-center rounded-xl bg-emerald-900 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800">
      Lihat Detail & Bid
    </button>
  </div>
);

const MarketplacePreview = () => {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold text-emerald-900 sm:text-3xl">Pasar Muatan</h2>
            <p className="mt-1 text-emerald-800">Contoh muatan terbaru yang tersedia untuk diambil.</p>
          </div>
          <button className="rounded-xl bg-[#D9651A] px-4 py-2 text-sm font-semibold text-white hover:brightness-110">
            Lihat Semua Muatan
          </button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {demoFreight.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;
