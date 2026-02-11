import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Clock, Users } from "lucide-react";
import { getUtmParams, buildWhatsAppUrl, WHATSAPP_PHONE } from "@/lib/utm";
import logo from "@/assets/logo-amor.png";

const bullets = [
  { icon: Users, text: "Atendimento personalizado" },
  { icon: Clock, text: "Análise rápida" },
  { icon: ShieldCheck, text: "Acompanhamento completo" },
];

const Hero = () => {
  const utms = getUtmParams();
  const whatsappUrl = buildWhatsAppUrl(
    WHATSAPP_PHONE,
    "Olá! Quero consultar meu Auxílio Maternidade.",
    utms
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto flex flex-col items-center px-5 pb-10 pt-12 md:pb-20 md:pt-20">
        <motion.div
          className="w-full max-w-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logo} alt="Amor Auxílio Maternidade" className="mx-auto mb-4 h-14 w-auto md:h-16" />

          <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 font-heading text-xs font-semibold text-accent">
            Assessoria Especializada
          </span>

          <h1 className="mb-3 font-heading text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Seu <span className="text-primary">Auxílio Maternidade</span> pode estar esperando por você
          </h1>

          <p className="mb-6 text-base text-muted-foreground md:text-lg">
            Descubra se você tem direito e receba orientação completa, sem burocracia.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 font-heading text-base font-bold text-accent-foreground shadow-cta transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5" />
            Consultar no WhatsApp
          </a>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-5">
            {bullets.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-3.5 w-3.5 text-primary" />
                </div>
                {text}
              </div>
            ))}
          </div>

          <p className="mt-6 text-[11px] text-muted-foreground/70">
            Informativo • sem vínculo com o INSS
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
