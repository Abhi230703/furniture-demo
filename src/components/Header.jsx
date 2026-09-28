import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import BrandMark from "./BrandMark.jsx";

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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#d9c6aa]/70 bg-[#f8f3eb]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Amogh Modular Furniture House home">
          <BrandMark compact />
          <span className="leading-tight">
            <b className="block font-display text-[19px] leading-none tracking-tight text-[#3b281c]">
              AMOGH
            </b>
            <small className="mt-1 block text-[8px] font-bold uppercase tracking-[.27em] text-[#98672b]">
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
              className="text-sm font-medium text-[#705b48] transition hover:text-[#8a5a22]"
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
          className="grid size-10 place-items-center text-[#3b281c] lg:hidden"
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
          className="border-t border-[#ddcbb4] bg-[#fbf8f2] px-5 py-4 lg:hidden"
          aria-label="Mobile navigation">
          {links.map((item) => (
            <a
              onClick={() => setMenuOpen(false)}
              key={item}
              className="block border-b border-[#eadfce] py-3 text-sm font-semibold text-[#51371f]"
              href={hrefFor(item)}>
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
