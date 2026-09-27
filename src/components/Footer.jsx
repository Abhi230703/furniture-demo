import { Camera, Globe2, MessageCircle, Phone } from "lucide-react";

export default function Footer({ onWhatsApp }) {
  return (
    <>
      <footer className="bg-[#111b2b] py-10 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-5 sm:flex-row sm:items-center lg:px-8">
          <div>
            <b className="text-white">Amogh Modular Furniture House</b>
            <p className="mt-1 text-xs">
              Custom kitchens, wardrobes & interiors in Ichalkaranji and
              Kolhapur.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              aria-label="Instagram"
              href="#home"
              className="hover:text-amber-400">
              <Camera size={18} />
            </a>
            <a
              aria-label="Facebook"
              href="#home"
              className="hover:text-amber-400">
              <Globe2 size={18} />
            </a>
            <a
              aria-label="Pinterest"
              href="#home"
              className="font-serif text-lg hover:text-amber-400">
              P
            </a>
            <span className="ml-2 text-xs">© 2026 Amogh. Demo website.</span>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-5 right-5 z-30 flex gap-2 sm:hidden">
        <a
          href="tel:+919000000000"
          className="grid size-12 place-items-center rounded-full bg-slate-800 text-white shadow-xl"
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
