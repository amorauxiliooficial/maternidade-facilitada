import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getUtmParams, buildWhatsAppUrl, WHATSAPP_PHONE } from "@/lib/utm";

const CtaFinal = () => {
  const utms = getUtmParams();
  const whatsappUrl = buildWhatsAppUrl(
    WHATSAPP_PHONE,
    "Olá! Quero consultar meu Auxílio Maternidade.",
    utms
  );

  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-14 md:py-20">
      <div className="container mx-auto px-5">
        <motion.div
          className="mx-auto max-w-lg text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
            Não perca seu benefício
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Fale agora com nossa equipe e descubra se você tem direito.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 font-heading text-base font-bold text-accent-foreground shadow-cta transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:px-10"
          >
            <MessageCircle className="h-5 w-5" />
            Consultar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaFinal;
