import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";

interface Testimonial {
  name: string;
  city: string;
  state: string;
  videoSrc: string;
  thumbSrc: string;
}

const testimonials: Testimonial[] = [
  { name: "Cleiciany", city: "Belém", state: "PA", videoSrc: "/videos/cleiciany-belem-pa.mp4", thumbSrc: "/thumbs/cleiciany-belem-pa.jpg" },
  { name: "Mariana", city: "São Paulo", state: "SP", videoSrc: "/videos/mariana-sao-paulo-sp.mp4", thumbSrc: "/thumbs/mariana-sao-paulo-sp.jpg" },
  { name: "Juliana", city: "Belo Horizonte", state: "MG", videoSrc: "/videos/juliana-belo-horizonte-mg.mp4", thumbSrc: "/thumbs/juliana-belo-horizonte-mg.jpg" },
  { name: "Fernanda", city: "Curitiba", state: "PR", videoSrc: "/videos/fernanda-curitiba-pr.mp4", thumbSrc: "/thumbs/fernanda-curitiba-pr.jpg" },
  { name: "Aline", city: "Recife", state: "PE", videoSrc: "/videos/aline-recife-pe.mp4", thumbSrc: "/thumbs/aline-recife-pe.jpg" },
  { name: "Patrícia", city: "Salvador", state: "BA", videoSrc: "/videos/patricia-salvador-ba.mp4", thumbSrc: "/thumbs/patricia-salvador-ba.jpg" },
];

const TestimonialsGrid = () => {
  const [active, setActive] = useState<Testimonial | null>(null);

  return (
    <>
      <section className="bg-background py-14 md:py-20">
        <div className="container mx-auto px-5">
          <motion.div
            className="mx-auto mb-8 max-w-lg text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
              Depoimentos
            </h2>
            <p className="text-sm text-muted-foreground">
              Veja o que nossas clientes têm a dizer.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.name + t.city}
                type="button"
                aria-label={`Ver depoimento de ${t.name}`}
                className="group relative overflow-hidden rounded-2xl shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => setActive(t)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                {/* Thumbnail — apenas <img>, sem <video> */}
                <div className="aspect-[9/16] w-full bg-muted sm:aspect-video">
                  <img
                    src={t.thumbSrc}
                    alt={`Depoimento de ${t.name}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Gradient overlay azul→rosa */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(204,100%,40%)]/60 via-transparent to-[hsl(330,85%,50%)]/20 transition-opacity group-hover:opacity-80" />

                {/* Play button — estilo vidro */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-lg backdrop-blur-md transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6 fill-current drop-shadow" />
                  </div>
                </div>

                {/* Label + Nome + Cidade */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="mb-1 inline-block rounded-full bg-accent/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-foreground">
                    Depoimento
                  </span>
                  <p className="font-heading text-sm font-bold text-white drop-shadow">
                    {t.name}
                  </p>
                  <p className="text-xs text-white/80 drop-shadow">
                    {t.city}, {t.state}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <VideoModal
          name={active.name}
          city={active.city}
          state={active.state}
          videoSrc={active.videoSrc}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
};

export default TestimonialsGrid;
