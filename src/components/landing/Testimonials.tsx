import { motion } from "framer-motion";
import { Star } from "lucide-react";

const textTestimonials = [
  {
    name: "Camila S.",
    state: "São Paulo, SP",
    text: "Eu nem sabia que tinha direito! A equipe me ajudou com tudo, desde os documentos até a aprovação. Super recomendo.",
  },
  {
    name: "Juliana R.",
    state: "Belo Horizonte, MG",
    text: "Fui atendida com muito carinho e profissionalismo. Em menos de 3 meses já tinha o benefício aprovado. Obrigada!",
  },
];

const Testimonials = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
          O que dizem nossas clientes
        </h2>
        <p className="mb-12 text-muted-foreground">
          Histórias reais de mães que conquistaram seu benefício.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {/* Video testimonial */}
        <motion.div
          className="overflow-hidden rounded-2xl bg-card shadow-card md:row-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <video
            className="aspect-video w-full bg-muted object-cover"
            controls
            preload="metadata"
            poster=""
            aria-label="Depoimento em vídeo de uma cliente"
          >
            <source src="/videos/depoimento-1.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
          <div className="p-5">
            <div className="mb-1 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-highlight text-highlight" />
              ))}
            </div>
            <p className="text-sm font-semibold text-card-foreground">Depoimento em vídeo</p>
            <p className="text-xs text-muted-foreground">Cliente verificada</p>
          </div>
        </motion.div>

        {/* Text testimonials */}
        {textTestimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="flex flex-col justify-between rounded-2xl bg-card p-6 shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i + 1) * 0.1 }}
          >
            <div>
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-highlight text-highlight" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-card-foreground">"{t.text}"</p>
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-card-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.state}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
