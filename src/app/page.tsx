import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* background */}
      <Image
        src="/bg-lab.png"
        alt=""
        fill
        className="object-cover opacity-80"
        priority
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
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
          <h1 className="text-3xl sm:text-5xl font-semibold">PyTrader.io</h1>
          <p className="mt-3 text-lg sm:text-xl opacity-90">
            Build, test & automate trading bots in Python.
            Open-source. For traders, developers, and writers.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <a
              href="https://github.com/Yermolitskiy/pytrader.io/"
              className="rounded-2xl px-5 py-3 bg-white text-black font-medium"
            >
              View on GitHub
            </a>
            <a
              href="#subscribe"
              className="rounded-2xl px-5 py-3 border border-white/70"
            >
              Get updates
            </a>
          </div>
          <p className="mt-8 text-sm opacity-70">
            © {new Date().getFullYear()} PyTrader.io — GNU GENERAL PUBLIC LICENSE
            Version 3 Licensed
          </p>
        </div>
      </section>

      {/* faint watermark */}
      <div className="pointer-events-none absolute bottom-6 right-6 text-white/20 text-xs tracking-widest">
        PYTRADER.IO
      </div>
    </main>
  );
}
