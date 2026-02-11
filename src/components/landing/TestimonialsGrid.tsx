import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

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

const VideoModal = ({
  testimonial,
  onClose,
}: {
  testimonial: Testimonial;
  onClose: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClose = useCallback(() => {
    videoRef.current?.pause();
    onClose();
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-card shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Fechar vídeo"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/60 text-background transition-colors hover:bg-foreground/80"
        >
          <X className="h-4 w-4" />
        </button>

        <video
          ref={videoRef}
          className="aspect-[9/16] w-full bg-foreground object-contain sm:aspect-video"
          controls
          autoPlay
          playsInline
          preload="auto"
        >
          <source src={testimonial.videoSrc} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>

        <div className="p-4">
          <p className="font-heading text-sm font-bold text-card-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.city}, {testimonial.state}
          </p>
        </div>
      </div>
    </div>
  );
};

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
                {/* Thumbnail */}
                <div className="aspect-[9/16] w-full bg-muted sm:aspect-video">
                  <img
                    src={t.thumbSrc}
                    alt={`Depoimento de ${t.name}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(204,100%,40%)]/60 via-transparent to-[hsl(330,85%,50%)]/20 transition-opacity group-hover:opacity-80" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/90 text-accent-foreground shadow-cta transition-transform group-hover:scale-110">
                    <Play className="h-5 w-5 fill-current" />
                  </div>
                </div>

                {/* Name bar */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
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

      {active && <VideoModal testimonial={active} onClose={() => setActive(null)} />}
    </>
  );
};

export default TestimonialsGrid;
