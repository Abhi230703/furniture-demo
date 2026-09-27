import { Home, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [
  "Home",
  "Products",
  "Process",
  "Why Us",
  "Testimonials",
  "Contact",
];
const hrefFor = (item) => `#${item.toLowerCase().replace(" ", "-")}`;

export default function Header({ onWhatsApp }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-stone-200/70 bg-[#fcfcfa]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Amogh Modular Furniture House home">
          <span className="grid size-10 place-items-center rounded-xl bg-slate-800 text-amber-400">
            <Home size={21} />
          </span>
          <span className="leading-tight">
            <b className="block text-[15px] tracking-tight text-slate-800">
              Amogh Modular
            </b>
            <small className="block text-[10px] font-semibold uppercase tracking-[.18em] text-amber-700">
              Furniture House
            </small>
          </span>
        </a>
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation">
          {links.map((item) => (
            <a
              key={item}
              className="text-sm font-medium text-slate-600 transition hover:text-amber-700"
              href={hrefFor(item)}>
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-5 sm:flex">
          <button
            onClick={() =>
              onWhatsApp(
                "Hello Amogh Furniture House, I would like to know more.",
              )
            }
            className="btn-whatsapp">
            <MessageCircle size={16} /> WhatsApp Us
          </button>
          <a href="tel:+919000000000" className="btn-call">
            <Phone size={15} /> Call now
          </a>
        </div>
        <button
          className="grid size-10 place-items-center rounded-lg text-slate-800 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-stone-200 bg-white px-5 py-4 lg:hidden"
          aria-label="Mobile navigation">
          {links.map((item) => (
            <a
              onClick={() => setMenuOpen(false)}
              key={item}
              className="block border-b border-stone-100 py-3 text-sm font-semibold text-slate-700"
              href={hrefFor(item)}>
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
