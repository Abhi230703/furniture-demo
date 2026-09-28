import { Camera, Globe2, MessageCircle, Phone } from "lucide-react";
import BrandMark from "./BrandMark.jsx";

export default function Footer({ onWhatsApp }) {
  return (
    <>
      <footer className="wood-inlay py-12 text-[#e7d8c1]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 sm:flex-row sm:items-center lg:px-8">
          <div className="flex items-center gap-3">
            <BrandMark />
            <div>
              <b className="font-display text-xl text-[#fffaf1]">Amogh Furniture House</b>
              <p className="mt-1 text-xs">
              Custom kitchens, wardrobes & interiors in Ichalkaranji and
              Kolhapur.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              aria-label="Instagram"
              href="#home"
              className="hover:text-[#f1cd8b]">
              <Camera size={18} />
            </a>
            <a
              aria-label="Facebook"
              href="#home"
              className="hover:text-[#f1cd8b]">
              <Globe2 size={18} />
            </a>
            <a
              aria-label="Pinterest"
              href="#home"
              className="font-serif text-lg hover:text-[#f1cd8b]">
              P
            </a>
            <span className="ml-2 text-xs">© 2026 Amogh. Demo website.</span>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-5 right-5 z-30 flex gap-2 sm:hidden">
        <a
          href="tel:+919000000000"
          className="grid size-12 place-items-center rounded-full bg-[#35251c] text-white shadow-xl"
          aria-label="Call Amogh Furniture House">
          <Phone size={20} />
        </a>
        <button
          onClick={() =>
            onWhatsApp("Hello Amogh Furniture House, I would like to enquire.")
          }
          className="grid size-12 place-items-center rounded-full bg-[#25D366] text-white shadow-xl"
          aria-label="WhatsApp Amogh Furniture House">
          <MessageCircle size={22} />
        </button>
      </div>
    </>
  );
}
