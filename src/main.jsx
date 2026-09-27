import Image from "next/image";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Hammer,
  MapPin,
  MessageCircle,
  Quote,
  Ruler,
  Sparkles,
  Star,
} from "lucide-react";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import QuoteDialog from "./components/QuoteDialog.jsx";
import { estimateRange } from "./estimate.js";

const WHATSAPP = "919000000000";

const products = [
  {
    title: "Modular Kitchens",
    text: "L-shape, parallel, U-shape and island kitchens with soft-close hardware.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
    tag: "Kitchens",
  },
  {
    title: "Designer Wardrobes",
    text: "Sliding and hinged wardrobes in glass, acrylic and laminate finishes.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    tag: "Bedrooms",
  },
  {
    title: "Living & Entertainment",
    text: "TV units, crockery units and shoe storage that bring order home.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85",
    tag: "Living spaces",
  },
  {
    title: "Office Workspaces",
    text: "Executive tables, conference desks and productive commercial storage.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    tag: "Commercial",
  },
];

const process = [
  [
    "01",
    "Free consultation",
    "We visit, listen, measure and understand your space.",
  ],
  [
    "02",
    "Design your vision",
    "Review a 3D design and choose materials with clarity.",
  ],
  [
    "03",
    "Precision fabrication",
    "Your pieces are crafted in our local manufacturing unit.",
  ],
  [
    "04",
    "Installation day",
    "A careful on-site fit, delivered on the agreed timeline.",
  ],
];

const reviews = [
  {
    name: "S. Patil",
    area: "Janata Chowk",
    text: "The kitchen planning made a compact space feel genuinely effortless to use.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "A. Kulkarni",
    area: "Shahupuri",
    text: "From the 3D view to installation, every decision was easy to understand.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "R. Jadhav",
    area: "Industrial Estate",
    text: "A practical office setup with a sharp finish and no surprise costs.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
  },
];

function whatsapp(message) {
  window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

function App() {
  const dialogRef = useRef(null);
  const [room, setRoom] = useState("Kitchen");
  const [size, setSize] = useState("Medium");
  const [finish, setFinish] = useState("Standard Laminate");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    requirement: "Modular Kitchen",
    contactMethod: "WhatsApp",
    message: "",
  });

  const [min, max] = estimateRange(room, size, finish);
  const formatPrice = (value) =>
    `₹${(value / 100000).toFixed(value >= 100000 ? 1 : 2)} L`;

  const openQuote = (requirement) => {
    if (requirement) setForm((current) => ({ ...current, requirement }));
    dialogRef.current?.showModal();
  };
  const submitQuote = (event) => {
    event.preventDefault();
    whatsapp(
      `Hello Amogh Furniture House, I am ${form.name || "interested in your furniture"} (${form.phone || "please call me"}). Requirement: ${form.requirement}. Preferred follow-up: ${form.contactMethod}. ${form.message}`,
    );
    dialogRef.current?.close();
  };

  return (
    <>
      <Header onWhatsApp={whatsapp} />

      <main>
        <section
          id="home"
          className="relative isolate overflow-hidden bg-[#f6f3ed] pt-[76px]">
          <div className="absolute inset-y-0 right-0 -z-10 hidden w-[49%] bg-slate-800 lg:block" />
          <div className="mx-auto grid min-h-[670px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.04fr_.96fr] lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <p className="eyebrow">
                <span /> Designed locally. Built to last.
              </p>
              <h1 className="mt-5 font-display text-4xl leading-[1.07] text-slate-800 sm:text-5xl lg:text-[58px]">
                Transforming spaces with <em>precision-crafted</em> modular
                furniture.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Custom modular kitchens, designer wardrobes, office workspaces
                and TV units — thoughtfully made for homes and businesses in
                Ichalkaranji.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#products" className="btn-primary">
                  Explore collection <ArrowRight size={18} />
                </a>
                <button
                  onClick={() => openQuote("Free Site Measurement")}
                  className="btn-secondary">
                  <Ruler size={18} /> Book free measurement
                </button>
              </div>
              <div className="mt-12 grid max-w-xl grid-cols-2 gap-y-5 border-t border-stone-300 pt-7 sm:grid-cols-4">
                {[
                  ["10+", "Years experience"],
                  ["100%", "Custom designs"],
                  ["5-Year", "Warranty"],
                  ["Local", "Manufacturing"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <strong className="block text-xl text-slate-800">
                      {value}
                    </strong>
                    <span className="text-xs text-slate-500">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
              <Image
                className="h-[460px] w-full rounded-[2px] object-cover shadow-2xl lg:h-[540px]"
                src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1200&q=88"
                alt="Warm modern modular kitchen"
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              <div className="absolute -bottom-5 -left-3 flex items-center gap-3 bg-[#fbfaf7] p-4 shadow-xl sm:-left-7">
                <span className="grid size-11 place-items-center rounded-full bg-amber-100 text-amber-700">
                  <Sparkles size={20} />
                </span>
                <p className="text-xs leading-5 text-slate-600">
                  <b className="block text-sm text-slate-800">
                    Made for your space
                  </b>
                  Not a one-size-fits-all solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="section-shell py-24">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span /> Curated for every room
              </p>
              <h2>
                Furniture that works
                <br className="hidden sm:block" /> as beautifully as it looks.
              </h2>
            </div>
            <p>
              Explore thoughtfully designed solutions, made around the way you
              use your space.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.title}
                className="group overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-stone-200/70">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-105"
                    width={900}
                    height={675}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    {product.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-800">
                    {product.title}
                  </h3>
                  <p className="mt-2 min-h-14 text-sm leading-5 text-slate-500">
                    {product.text}
                  </p>
                  <button
                    onClick={() => openQuote(product.title)}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-amber-700 transition hover:gap-3">
                    Quick enquiry <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-800 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div>
              <p className="eyebrow text-amber-400">
                <span className="bg-amber-400" /> Plan with confidence
              </p>
              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                Get a starting
                <br />
                budget in seconds.
              </h2>
              <p className="mt-5 max-w-sm leading-7 text-slate-300">
                A quick guide to help you plan. Your exact quote follows a free
                site measurement.
              </p>
              <div className="mt-9 flex items-center gap-3 text-sm text-slate-300">
                <Check size={17} className="text-amber-400" /> No obligation. No
                hidden costs.
              </div>
            </div>
            <div className="rounded-sm bg-white p-6 text-slate-800 shadow-2xl sm:p-8">
              <div className="grid gap-6 sm:grid-cols-3">
                <Choice
                  label="1. Room type"
                  value={room}
                  setValue={setRoom}
                  options={["Kitchen", "Bedroom", "Full Home", "Office"]}
                />
                <Choice
                  label="2. Layout / size"
                  value={size}
                  setValue={setSize}
                  options={["Small", "Medium", "Large"]}
                />
                <Choice
                  label="3. Material grade"
                  value={finish}
                  setValue={setFinish}
                  options={[
                    "Standard Laminate",
                    "High-Gloss Acrylic",
                    "Premium PU Finish",
                  ]}
                />
              </div>
              <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-stone-200 pt-6 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Indicative budget range
                  </p>
                  <p className="mt-1 text-3xl font-bold tracking-tight text-slate-800">
                    {formatPrice(min)}{" "}
                    <span className="text-lg text-slate-400">–</span>{" "}
                    {formatPrice(max)}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Final pricing depends on measurements and hardware
                    selection.
                  </p>
                </div>
                <button
                  onClick={() =>
                    whatsapp(
                      `Hello Amogh Furniture House, I need an exact quote for a ${size.toLowerCase()} ${room.toLowerCase()} with ${finish}. My estimate was ${formatPrice(min)}–${formatPrice(max)}.`,
                    )
                  }
                  className="btn-primary whitespace-nowrap">
                  Get exact quote <MessageCircle size={17} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="section-shell py-24">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span /> The Amogh way
              </p>
              <h2>
                From your first idea
                <br />
                to the final reveal.
              </h2>
            </div>
            <p>
              A simple, collaborative process that keeps every detail visible
              and every step on track.
            </p>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-4">
            {process.map(([number, title, text], index) => (
              <div
                key={number}
                className="relative border-t border-stone-300 pt-5">
                {index < 4 && (
                  <div className="absolute right-0 top-[-1px] hidden h-px w-6 translate-x-7 bg-amber-600 md:block" />
                )}
                <span className="font-display text-3xl text-amber-700">
                  {number}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-800">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="why-us" className="bg-[#eee9e0] py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">
                <span /> Made to stand up to life
              </p>
              <h2 className="mt-4 font-display text-4xl text-slate-800 sm:text-5xl">
                Why choose Amogh?
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                The kind of workmanship you notice now — and still appreciate
                years from now.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [
                  ShieldIcon,
                  "Built for Indian homes",
                  "BWP marine plywood and moisture-resistant materials.",
                ],
                [
                  Hammer,
                  "Factory-finished precision",
                  "Clean, durable edges with German edge banding.",
                ],
                [
                  Quote,
                  "Clear, honest pricing",
                  "Know what you are choosing before we begin.",
                ],
                [
                  MapPin,
                  "Here when you need us",
                  "Dedicated after-sales support across the district.",
                ],
              ].map(([Icon, title, text]) => (
                <article key={title} className="bg-[#f9f8f5] p-6">
                  <span className="grid size-11 place-items-center rounded-full bg-amber-100 text-amber-700">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-bold text-slate-800">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-shell py-24">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span /> Neighbourhood trust
              </p>
              <h2>
                Spaces our clients
                <br />
                love coming home to.
              </h2>
            </div>
            <div>
              <p className="max-w-sm">
                A few example client-story layouts for this demo site. Replace
                with verified reviews before launch.
              </p>
              <div className="mt-4 flex gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={17} fill="currentColor" />
                ))}
                <span className="ml-2 text-sm font-bold text-slate-700">
                  4.9/5
                </span>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.name}
                className="border border-stone-200 bg-white p-7">
                <Quote size={28} className="text-amber-600" />
                <blockquote className="mt-5 text-[17px] leading-7 text-slate-700">
                  “{review.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-stone-100 pt-5">
                  <Image
                    src={review.image}
                    alt=""
                    className="size-10 rounded-full object-cover"
                    width={120}
                    height={120}
                    sizes="40px"
                  />
                  <div>
                    <b className="block text-sm text-slate-800">
                      {review.name}
                    </b>
                    <span className="text-xs text-slate-500">
                      {review.area}, Ichalkaranji
                    </span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <ContactSection form={form} setForm={setForm} onSubmit={submitQuote} />
      </main>
      <Footer onWhatsApp={whatsapp} />
      <QuoteDialog dialogRef={dialogRef} form={form} setForm={setForm} onSubmit={submitQuote} />
    </>
  );
}

function Choice({ label, value, setValue, options }) {
  return (
    <label className="text-sm font-bold text-slate-700">
      {label}
      <span className="relative mt-2 block">
        <select
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="field appearance-none pr-8">
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-3 text-slate-400"
          size={16}
        />
      </span>
    </label>
  );
}
function ShieldIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default App;
