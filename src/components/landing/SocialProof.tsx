import { motion } from "framer-motion";

const stats = [
  { value: "+5.000", label: "Atendimentos realizados" },
  { value: "94%", label: "Taxa de aprovação" },
  { value: "+8", label: "Anos de experiência" },
  { value: "4.9★", label: "Avaliação dos clientes" },
];

const SocialProof = () => (
  <section className="bg-primary py-12 md:py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="font-heading text-3xl font-extrabold text-primary-foreground md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-primary-foreground/80">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
