import { ArrowRight, Clock3, MapPin, Phone, Send } from "lucide-react";
import FormInput from "./FormInput.jsx";

export default function ContactSection({ form, setForm, onSubmit }) {
  const update = (field) => (value) => setForm({ ...form, [field]: value });

  return (
    <section id="contact" className="bg-[#35251c] py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.78fr_1.22fr] lg:px-8">
        <div>
          <p className="eyebrow text-[#e5c184]">
            <span className="bg-[#e5c184]" /> Let's create your space
          </p>
          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
            Your dream room
            <br />
            starts with a chat.
          </h2>
          <div className="mt-9 space-y-5 text-sm text-[#eadfce]">
            <p className="flex gap-3">
              <MapPin className="shrink-0 text-[#e5c184]" size={19} /> 29/56,
              behind Night College,
              <br />
              Jawaharnagar, Ichalkaranji, Maharashtra 416115
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-[#e5c184]" size={18} />
              <a className="hover:text-white" href="tel:+919000000000">
                +91 9X-XXXX-XXXX
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Clock3 className="text-amber-400" size={18} /> Mon – Sat: 9:30 AM
              – 8:30 PM
            </p>
          </div>
          <a
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#e5c184]"
            href="https://maps.app.goo.gl/MxAB6bH2NyQEoUUS7?g_st=ac"
            target="_blank"
            rel="noopener noreferrer">
            Open map directions <ArrowRight size={16} />
          </a>
          <iframe
            title="Amogh Modular Furniture House location map"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="mt-5 h-40 w-full border border-[#8c6840] grayscale contrast-75"
            src="https://www.google.com/maps?q=Amogh+Modular+Furniture+House,+Jawaharnagar,+Ichalkaranji,+Maharashtra+416115&output=embed"
          />
        </div>
        <form
          onSubmit={onSubmit}
          className="grid gap-4 border border-[#d4ae6c]/60 bg-[#faf6ef] p-6 text-[#35251c] sm:grid-cols-2 sm:p-8">
          <div className="sm:col-span-2">
            <h3 className="text-2xl font-bold">
              Request your free consultation
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Tell us a little about your project and we’ll be in touch.
            </p>
          </div>
          <FormInput
            label="Your name"
            value={form.name}
            onChange={update("name")}
            autoComplete="name"
            required
          />
          <FormInput
            label="Phone number"
            value={form.phone}
            onChange={update("phone")}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
          />
          <label className="text-sm font-semibold text-slate-700">
            Requirement type
            <select
              value={form.requirement}
              onChange={(event) => update("requirement")(event.target.value)}
              className="field mt-2">
              <option>Modular Kitchen</option>
              <option>Wardrobe</option>
              <option>Living & TV Unit</option>
              <option>Office Workspace</option>
              <option>Full Home Interior</option>
            </select>
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Preferred contact
            <select
              value={form.contactMethod}
              onChange={(event) => update("contactMethod")(event.target.value)}
              className="field mt-2">
              <option>WhatsApp</option>
              <option>Phone call</option>
            </select>
          </label>
          <label className="sm:col-span-2 text-sm font-semibold text-slate-700">
            Tell us about your space
            <textarea
              value={form.message}
              onChange={(event) => update("message")(event.target.value)}
              className="field mt-2 min-h-24 resize-y"
              placeholder="Room type, approximate size, or ideas you have..."
            />
          </label>
          <button className="btn-primary w-full sm:col-span-2" type="submit">
            Send enquiry on WhatsApp <Send size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}
