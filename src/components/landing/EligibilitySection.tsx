import { motion } from "framer-motion";
import { Check } from "lucide-react";

const eligibilityItems = [
  "Trabalhadoras com carteira assinada (CLT)",
  "Contribuintes individuais do INSS",
  "Trabalhadoras avulsas",
  "Seguradas especiais (rurais)",
  "Desempregadas dentro do período de graça",
  "MEI em dia com as contribuições",
  "Mães adotantes (adoção ou guarda judicial)",
  "Casos de natimorto (a partir de 23 semanas)",
];

const EligibilitySection = () => (
  <section id="quem-tem-direito" className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Quem pode ter direito ao Auxílio Maternidade?
        </h2>
        <p className="mb-10 text-muted-foreground">
          Veja abaixo os perfis que geralmente se enquadram. Cada caso é analisado individualmente.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
        {eligibilityItems.map((item, i) => (
          <motion.div
            key={item}
            className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-card"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm text-card-foreground">{item}</span>
          </motion.div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-xl text-center text-xs text-muted-foreground">
        * A aprovação depende da análise documental e do cumprimento dos requisitos legais do INSS. Este conteúdo é meramente informativo.
      </p>
    </div>
  </section>
);

export default EligibilitySection;
