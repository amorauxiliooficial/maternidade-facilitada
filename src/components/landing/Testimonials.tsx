import { motion } from "framer-motion";
import { Star } from "lucide-react";

const textTestimonials = [
  {
    name: "Camila S.",
    city: "São Paulo, SP",
    text: "Eu nem sabia que tinha direito! A equipe me ajudou com tudo, desde os documentos até a aprovação.",
  },
  {
    name: "Juliana R.",
    city: "Belo Horizonte, MG",
    text: "Fui atendida com muito carinho. Em menos de 3 meses já tinha o benefício aprovado. Obrigada!",
  },
];

const Stars = () => (
  <div className="mb-2 flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-3.5 w-3.5 fill-highlight text-highlight" />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="bg-background py-14 md:py-20">
    <div className="container mx-auto px-5">
      <motion.h2
        className="mb-8 text-center font-heading text-2xl font-bold text-foreground md:text-3xl"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        O que dizem nossas clientes
      </motion.h2>

      <div className="mx-auto grid max-w-lg gap-4 md:max-w-3xl md:grid-cols-3">
        {/* Video */}
        <motion.div
          className="overflow-hidden rounded-2xl bg-card shadow-card"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <video
            className="aspect-video w-full bg-muted object-cover"
            controls
            preload="none"
            aria-label="Depoimento em vídeo de uma cliente"
          >
            <source src="/videos/depoimento-1.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
          <div className="p-4">
            <Stars />
            <p className="text-sm font-semibold text-card-foreground">Depoimento em vídeo</p>
            <p className="text-xs text-muted-foreground">Cliente verificada</p>
          </div>
        </motion.div>

        {/* Text */}
        {textTestimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="flex flex-col justify-between rounded-2xl bg-card p-5 shadow-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i + 1) * 0.08 }}
          >
            <div>
              <Stars />
              <p className="mb-3 text-sm leading-relaxed text-card-foreground">"{t.text}"</p>
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-card-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.city}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
