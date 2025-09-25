// src/app/offers/[slug]/page.tsx
import fs from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { offers } from "@/data/offers";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return offers.map(o => ({ slug: o.slug }));
}

export default async function OfferPage({ params }: { params: { slug: string } }) {
  const offer = offers.find(o => o.slug === params.slug);
  if (!offer) return notFound();

  const mdxPath = path.join(process.cwd(), offer.syllabusMdx);
  let source = "# Details\nContent coming soon.";
  try {
    source = await fs.readFile(mdxPath, "utf8");
  } catch {
    // keep fallback content if file missing
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* background */}
      <div className="fixed inset-0">
        <Image src="/bg-lab.png" alt="" fill className="object-cover opacity-80" priority />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* centered section with left-aligned content */}
      <section className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-3xl px-4 text-left text-white">
          <h1 className="text-3xl sm:text-5xl font-semibold text-terminal">{offer.title}</h1>
          <article className="prose prose-invert mt-6">
            <MDXRemote source={source} />
          </article>
          <div className="mt-8">
            <Link href="/" className="rounded-2xl px-5 py-3 border border-terminal/70 text-terminal">← Back</Link>
          </div>
        </div>
      </section>
    </main>
  );
}