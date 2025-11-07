import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import MarketplacePreview from './components/MarketplacePreview';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-emerald-900">
      {/* Top Bar / Simple Navbar */}
      <header className="sticky top-0 z-10 border-b border-emerald-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-900 text-white">
              Q
            </div>
            <div>
              <p className="text-lg font-extrabold tracking-tight">Qargoin</p>
              <p className="text-xs text-emerald-700">Freight Made Simple, Fair, and Local</p>
            </div>
          </div>
          <div className="hidden gap-3 sm:flex">
            <button className="rounded-xl bg-emerald-900 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800">
              Masuk
            </button>
            <button className="rounded-xl bg-[#D9651A] px-4 py-2 text-sm font-semibold text-white hover:brightness-110">
              Daftar
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <TrustIndicators />
        <MarketplacePreview />
        <CTASection />
      </main>

      <footer className="border-t border-emerald-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-emerald-700">
              © {new Date().getFullYear()} Qargoin • Kirim & Angkut Barang Tanpa Ribet
            </p>
            <div className="flex items-center gap-4 text-sm text-emerald-700">
              <a href="#" className="hover:text-emerald-900">Kebijakan Privasi</a>
              <a href="#" className="hover:text-emerald-900">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-emerald-900">Bantuan</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
