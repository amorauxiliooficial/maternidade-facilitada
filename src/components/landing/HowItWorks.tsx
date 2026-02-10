import { motion } from "framer-motion";
import { Search, FileText, Bell } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Análise gratuita",
    description: "Avaliamos seu caso e verificamos se você se enquadra nos requisitos para o benefício.",
  },
  {
    icon: FileText,
    title: "2. Envio de documentos",
    description: "Orientamos quais documentos são necessários e auxiliamos no envio correto ao INSS.",
  },
  {
    icon: Bell,
    title: "3. Acompanhamento",
    description: "Monitoramos o andamento do seu processo e informamos cada etapa até a conclusão.",
  },
];

const HowItWorks = () => (
  <section className="bg-warm py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Como funciona?
        </h2>
        <p className="mb-12 text-muted-foreground">
          Simples, rápido e sem complicação. Você não precisa sair de casa.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            className="relative rounded-2xl bg-card p-8 text-center shadow-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <step.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-2 font-heading text-lg font-bold text-card-foreground">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
