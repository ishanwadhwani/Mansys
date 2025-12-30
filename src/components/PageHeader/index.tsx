import Image from "next/image";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string | ReactNode;
  description?: string;
  badge?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function PageHeader({
  title,
  description,
  badge = "We're here to help", 
  imageSrc = "/assets/AusMap.jpg",
  imageAlt = "Background Image",
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[var(--color-navy)] overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {badge && (
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-navy)]/20 border border-white/70 text-white/70 font-bold text-sm uppercase tracking-wider mb-6">
            {badge}
          </span>
        )}

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight underline decoration-white/60 decoration-2 underline-offset-8">
          {title}
        </h1>

        {description && (
          <h2 className="text-lg md:text-xl text-white/70 w-80 md:w-full max-w-2xl mx-auto leading-relaxed">
            {description}
          </h2>
        )}
      </div>
    </section>
  );
}
