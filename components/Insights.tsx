"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/data/types";

const BLOG_IMAGES: Record<string, string> = {
  "the-real-cost-of-technical-debt": "/The Real Cost of Technical Debt.png",
  "shipping-ai-features-enterprises-can-trust": "/Shipping AI Features Enterprises Can Trust.png",
  "a-field-guide-to-vendor-migrations": "/A Field Guide to Vendor Migrations.png",
  "designing-for-scale-without-losing-speed": "/Upstairs_Logo.jpeg",
  "bp-1": "/Upstairs_Logo.jpeg",
  "bp-2": "/The Real Cost of Technical Debt.png",
  "bp-3": "/Shipping AI Features Enterprises Can Trust.png",
  "bp-4": "/A Field Guide to Vendor Migrations.png",
};

function getPostImage(post: BlogPost): string {
  if (post.coverImage && (post.coverImage.endsWith(".png") || post.coverImage.endsWith(".jpeg") || post.coverImage.endsWith(".jpg"))) {
    return post.coverImage.startsWith("/") ? post.coverImage : `/${post.coverImage}`;
  }
  if (BLOG_IMAGES[post.slug]) return BLOG_IMAGES[post.slug];
  if (BLOG_IMAGES[post.id]) return BLOG_IMAGES[post.id];

  const lowerSlug = post.slug.toLowerCase();
  const lowerTitle = post.title.toLowerCase();

  if (lowerSlug.includes("vendor") || lowerTitle.includes("vendor")) {
    return "/A Field Guide to Vendor Migrations.png";
  }
  if (lowerSlug.includes("ai") || lowerTitle.includes("ai")) {
    return "/Shipping AI Features Enterprises Can Trust.png";
  }
  if (lowerSlug.includes("debt") || lowerTitle.includes("debt") || lowerSlug.includes("cost") || lowerTitle.includes("cost")) {
    return "/The Real Cost of Technical Debt.png";
  }
  return "/Upstairs_Logo.jpeg";
}

export default function Insights({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="insights" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12 sm:mb-16 flex-wrap gap-6"
        >
          <div className="max-w-xl">
            <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-blueline mb-3 font-medium">
              What We Think
            </p>
            <h2 className="font-display text-section-heading font-bold text-ink">
              Notes from the build.
            </h2>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => {
            const imageSrc = getPostImage(post);

            return (
              <motion.a
                href={`/blog/${post.slug}`}
                data-cursor="Read"
                key={post.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col rounded-2xl border border-grid bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative h-44 bg-ink overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/10 transition-colors duration-300 group-hover:bg-ink/20 pointer-events-none" />
                  <span className="absolute top-3.5 left-3.5 z-10 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-mono uppercase tracking-wide text-ink font-semibold shadow-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs sm:text-sm font-mono text-slate font-medium">{post.readingTime} min read</span>
                  <h3 className="mt-2.5 font-display text-xl sm:text-2xl font-bold text-ink leading-snug group-hover:text-blueline transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-base text-slate leading-relaxed flex-1 line-clamp-3">
                    {post.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-base font-bold text-ink group-hover:text-blueline transition-colors">
                    Read more
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
