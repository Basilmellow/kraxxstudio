import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Share2, Sparkles, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";
import { ArticleJsonLd } from "@/components/ui/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_CONFIG } from "@/data/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
  title: `${post.title} | ${SITE_CONFIG.name}`,
  description: post.seoDescription || post.excerpt,
  alternates: {
    canonical: `/blog/${post.slug}`,
  },
  openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${SITE_CONFIG.url}/blog/${post.slug}`;
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        url={postUrl}
        publishedAt={post.publishedAt}
        author={post.author}
      />

      {/* Navigation Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> BACK TO THE CONTENT LAB
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
            {post.category}
          </span>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          {post.title}
        </h1>

        <p className="mt-4 text-base sm:text-xl text-slate-300 font-medium leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-200">
              <User className="w-3.5 h-3.5 text-indigo-400" /> {post.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {post.publishedAt}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-white/10 text-slate-200 leading-relaxed text-base sm:text-lg space-y-6">
          {/* Render markdown content formatted sections */}
          <div
            className="prose prose-invert max-w-none prose-headings:text-white prose-headings:font-bold prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-strong:text-indigo-200 prose-hr:border-white/10"
            dangerouslySetInnerHTML={{
              __html: post.content
                .split("\n\n")
                .map((paragraph) => {
                  if (paragraph.startsWith("### ")) {
                    return `<h3 class="text-2xl font-bold text-white mt-8 mb-3">${paragraph.replace("### ", "")}</h3>`;
                  }
                  if (paragraph.startsWith("---")) {
                    return `<hr class="my-8 border-white/10" />`;
                  }
                  if (paragraph.startsWith("* ")) {
                    const items = paragraph.split("\n* ").map((item) => item.replace("* ", ""));
                    return `<ul class="list-disc list-inside space-y-2 text-sm text-slate-300 my-4">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
                  }
                  if (paragraph.startsWith("1. ")) {
                    const items = paragraph.split("\n1. ").map((item) => item.replace(/^\d+\.\s*/, ""));
                    return `<ol class="list-decimal list-inside space-y-2 text-sm text-slate-300 my-4">${items.map((i) => `<li>${i}</li>`).join("")}</ol>`;
                  }
                  return `<p class="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">${paragraph}</p>`;
                })
                .join(""),
            }}
          />
        </div>
      </article>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h3 className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold mb-6">
          MORE FROM THE CONTENT LAB
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((rPost) => (
            <Link
              key={rPost.slug}
              href={`/blog/${rPost.slug}`}
              className="glass-card rounded-3xl p-6 border border-white/10 flex flex-col justify-between group hover:border-indigo-500/40"
            >
              <div>
                <span className="text-[10px] font-mono text-indigo-300">{rPost.category}</span>
                <h4 className="text-base font-bold text-white mt-2 mb-2 group-hover:text-indigo-300 transition-colors">
                  {rPost.title}
                </h4>
              </div>
              <span className="text-[11px] font-mono text-indigo-400 pt-4 border-t border-white/5">
                READ ARTICLE →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
