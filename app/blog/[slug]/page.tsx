import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPost } from "@/lib/data/repository";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 bg-paper">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
          <Link
            href="/#insights"
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-slate hover:text-blueline transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to insights
          </Link>

          <p className="mt-6 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline font-medium">
            {post.category} · {post.readingTime} min read
          </p>
          <h1 className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink text-balance tracking-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate">
            {post.author} ·{" "}
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p className="mt-8 sm:mt-10 text-base sm:text-lg md:text-xl text-ink leading-relaxed font-normal">{post.content}</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
