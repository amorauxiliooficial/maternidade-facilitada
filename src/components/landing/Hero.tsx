import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, ShieldCheck, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-mother.jpg";

const trustBullets = [
  { icon: Users, text: "Atendimento humano e personalizado" },
  { icon: Clock, text: "Análise rápida do seu caso" },
  { icon: ShieldCheck, text: "Acompanhamento até a aprovação" },
];

const Hero = () => {
  const whatsappUrl = "https://wa.me/5500000000000?text=Olá! Quero consultar meu Auxílio Maternidade";

  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container relative mx-auto flex flex-col-reverse items-center gap-8 px-4 py-16 md:flex-row md:gap-12 md:py-24">
        {/* Text content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-heading text-sm font-semibold text-primary">
            Assessoria Especializada em INSS
          </span>
          <h1 className="mb-4 font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Seu <span className="text-primary">Auxílio Maternidade</span> pode estar esperando por você
          </h1>
          <p className="mb-8 max-w-lg text-lg text-muted-foreground md:text-xl">
            Descubra se você tem direito ao benefício e receba orientação completa, sem burocracia.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 font-heading text-base font-bold text-accent-foreground shadow-cta transition-all hover:scale-105 hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              Consultar meu benefício no WhatsApp
            </a>
            <a
              href="#quem-tem-direito"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary/20 bg-card px-6 py-4 font-heading text-base font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              Ver quem tem direito
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-6">
            {trustBullets.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                {text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src={heroImage}
            alt="Mãe feliz com seu bebê"
            className="mx-auto w-full max-w-md rounded-3xl shadow-soft md:max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
