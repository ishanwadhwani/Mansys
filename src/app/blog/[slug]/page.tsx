export const revalidate = 60;
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

interface ImageValue {
  asset?: { _ref: string };
  alt?: string;
}

// Custom components using your theme variables
const ptComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-96 my-8 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={urlFor(value).fit("max").auto("format").url()}
            alt={value.alt || "Blog Image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-3xl font-extrabold text-[var(--color-navy)] mt-12 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-bold text-[var(--color-navy)] mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-bold text-[var(--color-navy)] mt-8 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-[var(--text-default)]/80 leading-relaxed mb-6 text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-[var(--color-brand)] pl-6 italic text-[var(--color-navy)]/80 my-8 bg-[var(--color-brand)]/5 p-6 rounded-r-xl">
        {children}
      </blockquote>
    ),
  },
};

async function getPost(slug: string) {
  const query = `*[_type == "blogPosts" && slug.current == $slug][0] {
    title,
    publishedAt,
    mainImage,
    body,
    "author": blogAuthor->{name, image, bio},
    "categories": blogCategory[]->title
  }`;
  return client.fetch(query, { slug });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-paper)] text-[var(--color-navy)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Post Not Found</h1>
          <p>Could not locate the article: {slug}</p>
        </div>
      </div>
    );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-paper)]">
        {/* Hero Section (Matches Privacy Policy Design) */}
        <section className="bg-[var(--color-navy)] pt-32 pb-24 text-center relative overflow-hidden">
          {/* Subtle Background Pattern/Image Overlay can go here if desired */}
          <div className="container mx-auto px-4 relative z-10">
            {/* Category Pill */}
            {post.categories && post.categories.length > 0 && (
              <span className="inline-block bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/30 text-[var(--color-brand)] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                {post.categories[0]}
              </span>
            )}

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight max-w-4xl mx-auto">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-4 text-white/70 text-sm">
              <span className="font-medium text-[var(--color-brand)]">
                {new Date(post.publishedAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                {post.author?.name}
              </span>
            </div>
          </div>
        </section>

        {/* Content Section (White Card Style) */}
        <section className="py-16 md:py-20 -mt-10 relative z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 md:p-14 shadow-xl border border-[var(--color-secondary)]/10">
              {/* Main Blog Image (Inside the card now) */}
              {post.mainImage && (
                <div className="relative w-full h-[300px] md:h-[500px] mb-12 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Portable Text Content */}
              <div className="prose prose-lg prose-slate max-w-none">
                <PortableText value={post.body} components={ptComponents} />
              </div>

              {/* Author Footer */}
              <div className="mt-16 pt-10 border-t border-[var(--color-secondary)]/10 flex items-center gap-4">
                {post.author?.image && (
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--color-brand)]">
                    <Image
                      src={urlFor(post.author.image).url()}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-bold text-[var(--color-navy)] text-lg">
                    Written by {post.author?.name}
                  </p>
                  {post.author?.bio && (
                    <p className="text-sm text-[var(--color-muted)]">
                      {post.author.bio}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
