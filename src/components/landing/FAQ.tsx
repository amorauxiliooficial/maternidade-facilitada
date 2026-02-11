import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Quais documentos são necessários?", a: "Geralmente RG, CPF, carteira de trabalho, certidão de nascimento da criança e comprovante de contribuição ao INSS. Orientamos tudo na análise do seu caso." },
  { q: "Qual o prazo para receber?", a: "Varia conforme a demanda do INSS na sua região, mas geralmente leva de 30 a 90 dias após o protocolo correto." },
  { q: "Quem pode solicitar?", a: "CLT, contribuinte individual, MEI, segurada especial, avulsa, desempregada no período de graça e mãe adotante." },
  { q: "Por quanto tempo recebo o benefício?", a: "120 dias (4 meses) na maioria dos casos. Situações específicas como adoção podem variar." },
  { q: "A assessoria tem custo?", a: "A consulta inicial é gratuita. Se quiser prosseguir, informamos os valores de forma transparente antes de qualquer compromisso." },
  { q: "Como funciona o atendimento?", a: "100% online, por WhatsApp. Você não precisa sair de casa. Acompanhamos do início ao fim." },
];

const FAQ = () => (
  <section className="bg-secondary py-14 md:py-20">
    <div className="container mx-auto px-5">
      <motion.h2
        className="mb-8 text-center font-heading text-2xl font-bold text-foreground md:text-3xl"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Perguntas frequentes
      </motion.h2>

      <div className="mx-auto max-w-lg">
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border-0 bg-card px-5 shadow-card"
            >
              <AccordionTrigger className="py-3.5 text-left font-heading text-sm font-semibold text-card-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-3.5 text-sm text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
