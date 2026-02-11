import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "Carteira assinada (CLT)",
  "Contribuinte individual do INSS",
  "Trabalhadora avulsa",
  "Segurada especial (rural)",
  "Desempregada no período de graça",
  "MEI em dia com contribuições",
  "Mãe adotante",
  "Casos de natimorto (≥ 23 semanas)",
];

const EligibilitySection = () => (
  <section id="quem-tem-direito" className="bg-background py-14 md:py-20">
    <div className="container mx-auto px-5">
      <motion.div
        className="mx-auto max-w-lg text-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-2 font-heading text-2xl font-bold text-foreground md:text-3xl">
          Quem pode ter direito?
        </h2>
        <p className="mb-8 text-sm text-muted-foreground">
          Cada caso é analisado individualmente.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-lg gap-2.5 sm:grid-cols-2 sm:max-w-2xl">
        {items.map((item, i) => (
          <motion.div
            key={item}
            className="flex items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-card"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
          >
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-3 w-3 text-primary" />
            </div>
            <span className="text-sm text-card-foreground">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EligibilitySection;
