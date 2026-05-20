import { siteContent } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="relative z-10 border-t-2 border-ink bg-powder/86 py-10">
      <div className="section-shell flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="font-pirata text-3xl">{siteContent.name}</p>
          <p className="mt-1 text-sm font-serif uppercase tracking-[0.17em] text-ink/70">
            Makeup • DIY • Baking?? • Clown • Fangirl
          </p>
        </div>
         {/* old social handle button was here */}
      </div>
    </footer>
  );
}
