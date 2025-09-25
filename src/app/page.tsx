import Image from "next/image";
import ScrollIndicator from "./ScrollIndicator";
import PreserveScroll from "./PreserveScroll";
import { offers } from "../data/offers";
export default function Home() {
  // Build a quick lookup by slug so we can reference offers by key
  const offerBySlug = Object.fromEntries(offers.map(o => [o.slug, o] as const));

  return (
    <main className="relative min-h-screen overflow-hidden">
      <PreserveScroll />
      <ScrollIndicator />
      {/* background */}
      <div className="fixed inset-0"> 
        <Image
          src="/bg-lab.png"
          alt=""
          fill
          className="object-cover opacity-80"
          priority
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* center content */}
      <section className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="mx-4 max-w-3xl text-center text-white">
          <Image
            src="/pytrader-bot.png"
            width={600}
            height={600}
            alt="PyTrader.io"
            className="mx-auto mb-6 opacity-95"
            priority
          />
          <h1 className="text-3xl sm:text-5xl text-terminal font-semibold">PyTrader.io</h1>
          <p className="mt-3 text-lg sm:text-xl opacity-90 text-terminal">
            Build, test & automate trading bots in Python.
            Open-source. For traders, developers, and writers.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <a
              href="https://github.com/Yermolitskiy/pytrader.io/"
              className="rounded-2xl px-5 py-3 bg-terminal text-black font-medium"
            >
              View on GitHub
            </a>
            <a
              href="#subscribe"
              className="text-terminal rounded-2xl px-5 py-3 border border-terminal/70"
            >
              Get updates
            </a>
          </div>
          <p className="mt-8 text-sm text-terminal opacity-70">
            © {new Date().getFullYear()} PyTrader.io — GNU GENERAL PUBLIC LICENSE
            Version 3 Licensed
          </p>
        </div>
      </section>

      {/* faint watermark */}
      <div className="pointer-events-none absolute bottom-6 right-6 text-xs tracking-widest text-terminal">
        PYTRADER.IO
      </div>

      <div className="mt-10 mb-16 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Card A */}
        <div className="card ring-1 ring-terminal/60">
          <Image src="/background_1.png" alt="" fill className="card-img" />
          <div className="card-overlay" />
          <div className="card-body">
            <h3 className="text-xl font-semibold">
              <a href={`/offers/${offerBySlug["masterclass"].slug}`} className="text-terminal hover:underline" data-preserve-scroll="home">
                Python Trading Masterclass
              </a>
            </h3>
            <p className="mt-2 text-sm/relaxed text-terminal/85">
            Live workshop + recording + starter bot template. 14-day &quot;no value → refund&quot;.
            </p>
            <div className="mt-4 flex gap-3">
              <a href={`${offerBySlug["masterclass"].buyUrl}`} className="rounded-xl px-4 py-2 bg-terminal text-black">
                Enroll (€99)
              </a>
              <a href={`/offers/${offerBySlug["masterclass"].slug}`} className="rounded-xl px-4 py-2 border border-terminal/30 text-terminal" data-preserve-scroll="home">
                Syllabus
              </a>
            </div>
          </div>
        </div>

        {/* Card B */}
        <div className="card ring-1 ring-terminal/60">
          <Image src="/background_2.png" alt="" fill className="card-img" />
          <div className="card-overlay" />
          <div className="card-body">
            <h3 className="text-xl font-semibold">
              <a href={`/offers/${offerBySlug["vip-setup"].slug}`} className="text-terminal hover:underline" data-preserve-scroll="home">
                VIP 1:1 Setup / Coaching
              </a>
            </h3>
            <p className="mt-2 text-sm/relaxed text-terminal/85">
              Personal help connecting IBKR/crypto APIs, debugging, and launching your bot.
            </p>
            <div className="mt-4 flex gap-3">
              <a href={`${offerBySlug["vip-setup"].buyUrl}`} className="rounded-xl px-4 py-2 font-medium bg-terminal text-black">
                Book (€200)
              </a>
              <a href="mailto:cooperation@contacts.marenno.com?subject=VIP%201:1%20question" className="rounded-xl px-4 py-2 border border-terminal/30 text-terminal">
                Ask first
              </a>
            </div>
          </div>
        </div>

      </div>

    </main>
  );
}
