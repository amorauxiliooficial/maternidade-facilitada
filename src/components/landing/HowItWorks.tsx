import { motion } from "framer-motion";
import { Search, FileText, Bell } from "lucide-react";

const steps = [
  { icon: Search, title: "1. Análise gratuita", desc: "Avaliamos se você se enquadra nos requisitos." },
  { icon: FileText, title: "2. Documentação", desc: "Orientamos quais documentos enviar ao INSS." },
  { icon: Bell, title: "3. Acompanhamento", desc: "Monitoramos seu processo até a conclusão." },
];

const HowItWorks = () => (
  <section className="bg-warm py-14 md:py-20">
    <div className="container mx-auto px-5">
      <motion.h2
        className="mb-8 text-center font-heading text-2xl font-bold text-foreground md:text-3xl"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Como funciona?
      </motion.h2>

      <div className="mx-auto grid max-w-lg gap-4 md:max-w-3xl md:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            className="rounded-2xl bg-card p-6 text-center shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <step.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-1 font-heading text-base font-bold text-card-foreground">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
