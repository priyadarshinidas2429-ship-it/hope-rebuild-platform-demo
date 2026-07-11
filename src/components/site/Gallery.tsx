import { useState } from "react";
import { X } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Gallery({ images }: { images: { src: string; alt: string; label: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const { t } = useLang();
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className="group relative overflow-hidden rounded-2xl shadow-card aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
              <p className="text-white font-semibold">{img.label}</p>
            </div>
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 grid place-items-center p-4 animate-fade-up" onClick={() => setOpen(null)}>
          <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 text-white grid place-items-center" onClick={() => setOpen(null)} aria-label={t("Close", "বন্ধ করুন")}>
            <X />
          </button>
          <img src={images[open].src} alt={images[open].alt} className="max-h-[85vh] max-w-full rounded-xl shadow-elegant" />
        </div>
      )}
    </>
  );
}
