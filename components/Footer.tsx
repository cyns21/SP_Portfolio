import { siteContent } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="relative z-10 border-t-2 border-ink bg-powder/86 py-10">
      <div className="section-shell flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-pirata text-3xl">{siteContent.name}</p>
          <p className="mt-1 text-sm font-black uppercase tracking-[0.17em] text-ink/70">
            Makeup • DIY • Baking
          </p>
        </div>
        <p className="rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.16em] shadow-[4px_4px_0_rgb(var(--ink))]">
          {siteContent.handle}
        </p>
      </div>
    </footer>
  );
}
