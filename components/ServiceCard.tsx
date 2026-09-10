import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data/services";

interface ServiceCardProps {
  service: Service;
  href?: string;
}

export default function ServiceCard({ service, href }: ServiceCardProps) {
  const card = (
    <div className="group relative overflow-hidden rounded-3xl border border-grid bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(14,21,36,0.25)] min-h-[260px] flex flex-col justify-between">
      <div>
        <service.icon className="h-10 w-10 text-blueline transition-transform duration-300 group-hover:rotate-12" />
        <h3 className="mt-6 font-display text-2xl sm:text-[26px] font-bold text-ink">{service.title}</h3>
        <p className="mt-3.5 text-base sm:text-[17px] text-slate leading-relaxed">{service.shortDescription}</p>
      </div>
      <div className="mt-6 flex items-center gap-2 text-base font-bold text-ink group-hover:text-blueline transition-colors">
        <span>Learn More</span>
        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );

  if (!href) {
    return card;
  }

  return (
    <Link href={href} className="block">
      {card}
    </Link>
  );
}
