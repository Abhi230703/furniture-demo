import { MessageCircle, X } from "lucide-react";
import FormInput from "./FormInput.jsx";

export default function QuoteDialog({ dialogRef, form, setForm, onSubmit }) {
  const update = (field) => (value) => setForm({ ...form, [field]: value });

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="quote-title"
      className="fixed inset-0 z-50 m-auto h-fit max-h-[calc(100vh-2rem)] w-full max-w-md overflow-y-auto rounded-sm bg-white p-6 shadow-2xl backdrop:bg-slate-950/60"
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}>
      <form onSubmit={onSubmit} className="relative">
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="absolute right-0 top-0 grid size-9 place-items-center rounded-full text-slate-500 hover:bg-stone-100"
          aria-label="Close">
          <X size={19} />
        </button>
        <p className="eyebrow">
          <span /> Free consultation
        </p>
        <h2
          id="quote-title"
          className="mt-3 font-display text-3xl text-slate-800">
          Let's talk about your space.
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Share your details and continue your enquiry directly on WhatsApp.
        </p>
        <div className="mt-6 grid gap-4">
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
            I am interested in
            <select
              value={form.requirement}
              onChange={(event) => update("requirement")(event.target.value)}
              className="field mt-2">
              <option>Modular Kitchen</option>
              <option>Designer Wardrobes</option>
              <option>Living & Entertainment</option>
              <option>Office Workspaces</option>
              <option>Free Site Measurement</option>
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
          <button className="btn-primary mt-2 w-full" type="submit">
            Continue on WhatsApp <MessageCircle size={17} />
          </button>
        </div>
      </form>
    </dialog>
  );
}
