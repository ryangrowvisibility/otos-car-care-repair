import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(916) 665-1560";
const TEL = "tel:+19166651560";
const ADDRESS = "8110 Freeport Blvd, Sacramento, CA 95832";
const DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=8110%20Freeport%20Blvd%2C%20Sacramento%2C%20CA%2095832";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Oto's%20Car%20Care%20%26%20Repair&query_place_id=ChIJx7vbfPrOmoARrOVpnnx4nyk";

const services = [
  { icon: "gear", name: "Transmission Service", text: "Transmissions are what this shop is known for, with more than three decades of hands-on experience. Slipping, hard shifts or a delay going into gear? Bring it in.", special: true },
  { icon: "disc", name: "Brake Service", text: "Squeaks, grinding or a soft pedal. Brakes are the other half of our specialty, and we are a good place to get a second look at a brake quote." },
  { icon: "drop", name: "Oil Changes & Maintenance", text: "Oil changes and routine maintenance for all makes and models, so small things stay small." },
  { icon: "battery", name: "Batteries & No-Starts", text: "Needing a jump more than once? We find out why and explain your battery options in plain terms." },
  { icon: "wrench", name: "General Auto Repair", text: "Everyday repairs on cars and trucks, foreign and domestic, handled by someone who has seen it all." },
  { icon: "search", name: "Second Opinions", text: "Got a quote that does not sit right? Call us. We will take a look and tell you what we see." },
];

const reviews = [
  { name: "Tim T.", job: "Brake second opinion", stars: 5, text: "I came in for a second opinion on a brake job and was impressed with the professionalism. I will get my brakes done here when the time comes." },
  { name: "Ern D.", job: "Family cars, for years", stars: 5, text: "My family and I have been bringing our cars to Oto's for years. Great service, reasonable rates and, most importantly, a good person." },
  { name: "Heidi M.", job: "General repair", stars: 5, text: "An excellent mechanic with great service and the best prices. I am glad he is just down the street from me." },
  { name: "R.L. M.", job: "Long-time customer", stars: 5, text: "Our mechanic for nearly 40 years." },
  { name: "Nathan P.", job: "Auto repair", stars: 4, text: "Quality work, and he communicates with the customer." },
  { name: "Gerard K.", job: "Long-time customer", stars: 5, text: "Oto's (say it oh-toe) is a character from a bygone era, in the best way." },
];

const steps = [
  { title: "Call the shop", text: "Tell us what the car is doing. We are here Monday through Thursday, 8 a.m. to 5 p.m." },
  { title: "Bring it to Freeport Blvd", text: "We look it over and find the actual problem." },
  { title: "Hear it straight", text: "What is wrong, what it costs, and what we would do if it were our car." },
  { title: "Drive home with confidence", text: "We do the work you agreed to and explain what we did." },
];

const faqs = [
  { q: "What are your hours?", a: "Monday through Thursday, 8 a.m. to 5 p.m. We are closed Friday, Saturday and Sunday." },
  { q: "Where are you located?", a: "8110 Freeport Blvd in South Sacramento. Customers come to us from the Pocket, Greenhaven, Freeport and across the Sacramento area." },
  { q: "What kinds of vehicles do you work on?", a: "All makes and models. Call with the year and model if you want to check before you come in." },
  { q: "Do you work on transmissions?", a: "Yes. Transmissions and brakes are our specialties, and owner Tracy Oto has been working on them in Sacramento since 1990." },
  { q: "Can I get a second opinion on a quote?", a: "Yes. Bring the quote and your car and we will tell you honestly what we find." },
  { q: "Can you see my car the same day?", a: "It depends on the day. Call first at " + PHONE + ". When the schedule allows, we fit people in." },
  { q: "How do you say the name?", a: "Oh-toe. If you get it wrong, we will still fix your car." },
];

const ld = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Oto's Car Care & Repair",
  telephone: "+1-916-665-1560",
  address: { "@type": "PostalAddress", streetAddress: "8110 Freeport Blvd", addressLocality: "Sacramento", addressRegion: "CA", postalCode: "95832", addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: 38.4617023, longitude: -121.5021461 },
  openingHours: "Mo-Th 08:00-17:00",
  foundingDate: "1990",
  founder: { "@type": "Person", name: "Tracy Oto" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: 4.8, reviewCount: 24 },
  hasMap: MAPS,
};

function CallBtn({ className = "" }: { className?: string }) {
  return (
    <a href={TEL} className={`btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg bg-cta px-7 text-lg font-bold text-on-cta hover:bg-cta-dark ${className}`}>
      <Icon name="phone" className="h-5 w-5" /> Call {PHONE}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Reveal />

      <header className="sticky top-0 z-30 border-b border-line bg-card/95 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between gap-4 px-5 md:px-6">
          <a href="#top" className="leading-none" aria-label="Oto's Car Care and Repair home">
            <span className="font-[family-name:var(--font-serif)] text-[1.6rem] font-bold text-brand-dark">Oto&apos;s</span>
            <span className="mt-1 block text-[0.92rem] font-semibold text-muted">Car Care &amp; Repair</span>
          </a>
          <nav className="hidden items-center gap-7 font-semibold lg:flex" aria-label="Main">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#visit" className="hover:text-brand">Visit</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={TEL} className="hidden text-xl font-bold text-brand-dark md:block">{PHONE}</a>
            <a href={TEL} className="btn hidden min-h-12 items-center rounded-lg bg-cta px-5 font-bold text-on-cta hover:bg-cta-dark md:inline-flex">Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn grid h-12 w-12 place-items-center rounded-lg bg-cta text-on-cta md:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="top" className="pb-20 md:pb-0">
        {/* Hero */}
        <section>
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-14 md:px-6 md:py-24 lg:grid-cols-[1.45fr_1fr] lg:gap-20">
            <div>
              <h1>Transmission, Brake &amp; Auto Repair in South Sacramento</h1>
              <p className="mt-6 max-w-[54ch] text-[1.3rem] leading-relaxed text-muted">
                Tracy Oto has been fixing cars on Freeport Blvd since 1990. You get a straight answer and a fair price.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallBtn />
                <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg border-2 border-brand px-7 text-lg font-bold text-brand hover:bg-tint">
                  <Icon name="nav" className="h-5 w-5" /> Get Directions
                </a>
              </div>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold">
                <Stars />
                <span>4.8</span><span aria-hidden className="text-line">|</span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:text-brand">24 Google reviews</a>
                <span aria-hidden className="text-line">|</span><span>Since 1990</span>
              </p>
            </div>
            <aside aria-label="Shop details" className="rounded-2xl bg-tint p-7 md:p-9">
              <h2 className="text-[1.35rem]">Visit the shop</h2>
              <dl className="mt-5 space-y-5">
                <div className="flex gap-3"><Icon name="pin" className="mt-1 h-5 w-5 shrink-0 text-brand" /><div><dt className="font-bold">Address</dt><dd className="text-muted">8110 Freeport Blvd<br />Sacramento, CA 95832</dd></div></div>
                <div className="flex gap-3"><Icon name="clock" className="mt-1 h-5 w-5 shrink-0 text-brand" /><div><dt className="font-bold">Hours</dt><dd className="text-muted">Mon to Thu, 8 a.m. to 5 p.m.<br />Closed Fri, Sat and Sun</dd></div></div>
                <div className="flex gap-3"><Icon name="phone" className="mt-1 h-5 w-5 shrink-0 text-brand" /><div><dt className="font-bold">Phone</dt><dd><a href={TEL} className="font-semibold text-brand underline underline-offset-4">{PHONE}</a></dd></div></div>
              </dl>
            </aside>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers trust us" className="border-y border-line">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-6 gap-y-6 px-5 py-8 md:px-6 lg:grid-cols-4">
            {[["4.8 on Google", "badge"], ["Open since 1990", "clock"], ["Transmission and brake experts", "gear"], ["All makes and models", "wrench"]].map(([t, ic]) => (
              <li key={t} className="flex items-center gap-3 font-bold text-brand-dark"><Icon name={ic} className="h-7 w-7 shrink-0 text-brand" />{t}</li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <h2>What we fix</h2>
            <p className="mt-3 max-w-[50ch] text-muted">If it rolls into the shop, chances are we have fixed it before.</p>
            <div className="mt-12 grid gap-x-12 gap-y-11 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className="reveal">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                  <h3 className="mt-4 flex flex-wrap items-center gap-2">{s.name}{s.special && <span className="rounded-full bg-brand px-2.5 py-0.5 font-[family-name:var(--font-sans)] text-[0.85rem] font-bold text-white">Specialty</span>}</h3>
                  <p className="mt-2 text-muted">{s.text}</p>
                  <a href={TEL} className="mt-3 inline-flex items-center gap-1.5 font-bold text-brand hover:underline">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2>Rated 4.8 from 24 Google reviews</h2>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-brand hover:underline">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <figure className="mt-10 max-w-[52rem]">
              <Stars className="h-6 w-6" />
              <blockquote className="mt-4 font-[family-name:var(--font-serif)] text-[1.5rem] font-bold leading-snug text-brand-dark md:text-[1.85rem]">
                Two other mechanics told me my RAV4 did not need a battery. Oto saw me the same day, explained why it kept needing jump starts, and walked me through my options.
              </blockquote>
              <figcaption className="mt-5 text-muted"><span className="font-bold text-ink">Dama V.</span>, RAV4 battery replacement</figcaption>
            </figure>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal rounded-xl border border-line bg-card p-6">
                  <Stars count={r.stars} className="h-4 w-4" />
                  <blockquote className="mt-3">{r.text}</blockquote>
                  <figcaption className="mt-3 text-[1.02rem] text-muted"><span className="font-bold text-ink">{r.name}</span> · {r.job}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div>
              <h2>The same shop on Freeport Blvd since 1990</h2>
              <div className="mt-5 max-w-[60ch] space-y-4">
                <p>Mr. Tracy Oto opened this shop in 1990, and he has built its name on transmissions, brakes and telling people the truth about their cars.</p>
                <p>South Sacramento has been coming back ever since. Some customers have been bringing their cars here for decades. Others just live down the street and are glad they do.</p>
                <p>Ask anyone who has been here and you will hear the same thing: he tells you what is wrong, what it costs, and what he would do if it were his own car. Nothing fancy. Just good work from someone who cares whether you got treated right.</p>
              </div>
            </div>
            <ul className="space-y-6 self-center">
              {[
                ["Straight talk", "No runaround and no surprises."],
                ["Fair prices", "Customers call our rates reasonable, year after year."],
                ["Explains the work", "You will understand what your car needs and why."],
                ["Decades of experience", "Serving South Sacramento since 1990."],
              ].map(([t, d]) => (
                <li key={t} className="reveal flex gap-3"><Icon name="check" className="mt-1 h-6 w-6 shrink-0 text-brand" /><span><strong className="block text-brand-dark">{t}</strong><span className="text-muted">{d}</span></span></li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <h2>How it works</h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-bold text-white">{i + 1}</span>
                  <h3 className="mt-4">{s.title}</h3>
                  <p className="mt-1.5 text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="visit" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <h2>Serving South Sacramento and beyond</h2>
              <p className="mt-4 text-muted">Find us at {ADDRESS}. Drivers come from all over the area, including:</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {["South Sacramento", "Pocket", "Greenhaven", "Freeport", "Greater Sacramento"].map((a) => (
                  <li key={a} className="rounded-full bg-brand-soft px-4 py-1.5 font-semibold text-brand">{a}</li>
                ))}
              </ul>
              <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 font-bold text-brand hover:underline"><Icon name="nav" className="h-5 w-5" /> Get directions</a>
            </div>
            <iframe title="Map to Oto's Car Care & Repair" src="https://maps.google.com/maps?q=8110%20Freeport%20Blvd%2C%20Sacramento%2C%20CA%2095832&output=embed" className="h-[340px] w-full rounded-xl border border-line md:h-[420px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[52rem] px-5 md:px-6">
            <h2>Common questions</h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary className="flex min-h-16 items-center justify-between gap-5 py-4 text-[1.18rem] font-bold text-brand-dark">
                    {f.q}<Icon name="plus" className="faq-icon h-5 w-5 shrink-0 text-brand" />
                  </summary>
                  <p className="pb-5 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="on-brand bg-brand text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-7 px-5 py-16 md:px-6 md:py-20 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-white">Car acting up? Call Oto&apos;s.</h2>
              <p className="mt-3 text-white/90">Monday through Thursday, 8 a.m. to 5 p.m. on Freeport Blvd.</p>
            </div>
            <CallBtn className="shrink-0" />
          </div>
        </section>
      </main>

      <footer className="pb-24 md:pb-0">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-3 md:px-6">
          <div>
            <p className="font-[family-name:var(--font-serif)] text-xl font-bold text-brand-dark">Oto&apos;s Car Care &amp; Repair</p>
            <p className="mt-3 text-muted">South Sacramento auto repair since 1990. Owner: Tracy Oto.</p>
          </div>
          <div>
            <h3>Contact</h3>
            <ul className="mt-3 space-y-1.5 text-muted">
              <li><a href={TEL} className="font-bold text-brand hover:underline">{PHONE}</a></li>
              <li>8110 Freeport Blvd</li>
              <li>Sacramento, CA 95832</li>
              <li>Mon to Thu, 8 a.m. to 5 p.m.</li>
              <li>Closed Fri, Sat and Sun</li>
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul className="mt-3 space-y-1.5 text-muted">{services.map((s) => <li key={s.name}><a href="#services" className="hover:underline">{s.name}</a></li>)}</ul>
          </div>
        </div>
        <div className="border-t border-line"><p className="mx-auto max-w-[1200px] px-5 py-5 text-[0.98rem] text-muted md:px-6">© {new Date().getFullYear()} Oto&apos;s Car Care &amp; Repair. All rights reserved.</p></div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-line bg-card p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
        <a href={TEL} className="btn flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-cta font-bold text-on-cta"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-brand font-bold text-brand"><Icon name="nav" className="h-5 w-5" /> Directions</a>
      </div>
    </>
  );
}
