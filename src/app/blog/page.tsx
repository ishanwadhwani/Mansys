import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// GROQ Query
const query = `*[_type == "blogPosts"] | order(publishedAt desc) {
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage,
  "authorName": blogAuthor->name,
  "authorImage": blogAuthor->image,
  "categories": blogCategory[]->title
}`;

interface BlogPost {
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  authorName: string;
  authorImage: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  categories: string[];
}

export default async function BlogListingPage() {
  const posts: BlogPost[] = await client.fetch(query);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-paper)]">
        {/* Hero Section (Matches Privacy Policy) */}
        <section className="bg-[var(--color-navy)] pt-32 pb-20 text-center">
          <div className="container mx-auto px-4">
            <span className="inline-block bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/30 text-[var(--color-brand)] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              News & Updates
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our Latest Insights
            </h1>
            <p className="text-white/80 max-w-xl mx-auto text-sm">
              Expert advice, migration updates, and success stories from the
              Mansys Mantra team.
            </p>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post) => (
                <Link
                  href={`/blog/${post.slug.current}`}
                  key={post.slug.current}
                  className="group flex flex-col bg-white border border-[var(--color-secondary)]/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-[var(--color-navy)]/5 text-[var(--color-navy)]">
                        No Image
                      </div>
                    )}
                    {/* Category Badge */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[var(--color-navy)] shadow-sm">
                        {post.categories[0]}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-[var(--color-muted)] mb-4 space-x-2">
                      <span className="text-[var(--color-brand)] font-bold">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                      <span>•</span>
                      <span>{post.authorName || "Team"}</span>
                    </div>

                    <h2 className="text-xl font-bold text-[var(--color-navy)] mb-3 line-clamp-2 group-hover:text-[var(--color-brand)] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-[var(--color-muted)] mb-6 line-clamp-3 flex-grow text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="text-[var(--color-brand)] font-bold text-sm flex items-center mt-auto group-hover:translate-x-2 transition-transform">
                      <span aria-hidden="true">Read Article</span>
                      <span className="sr-only">
                        Read article about {post.title}
                      </span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
