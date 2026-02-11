import { motion } from "framer-motion";

const stats = [
  { value: "+5.000", label: "Atendimentos" },
  { value: "94%", label: "Aprovação" },
  { value: "4.9★", label: "Avaliação" },
];

const SocialProof = () => (
  <section className="bg-primary py-8 md:py-12">
    <div className="container mx-auto px-5">
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <p className="font-heading text-2xl font-extrabold text-primary-foreground md:text-3xl">
              {stat.value}
            </p>
            <p className="mt-0.5 text-xs text-primary-foreground/80">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
