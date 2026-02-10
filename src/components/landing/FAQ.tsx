import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Quais documentos são necessários?",
    a: "Geralmente são solicitados RG, CPF, carteira de trabalho, certidão de nascimento da criança e comprovante de contribuição ao INSS. Na análise do seu caso, informaremos exatamente o que é preciso.",
  },
  {
    q: "Qual o prazo para receber o benefício?",
    a: "O prazo varia conforme a demanda do INSS na sua região, mas geralmente leva de 30 a 90 dias após o protocolo correto da solicitação.",
  },
  {
    q: "Quem pode solicitar o Auxílio Maternidade?",
    a: "Trabalhadoras CLT, contribuintes individuais, MEI, seguradas especiais, trabalhadoras avulsas e desempregadas dentro do período de graça, além de mães adotantes.",
  },
  {
    q: "Por quanto tempo recebo o benefício?",
    a: "O salário-maternidade é pago por 120 dias (4 meses) na maioria dos casos. Em situações específicas, como adoção, o prazo pode variar.",
  },
  {
    q: "A assessoria tem algum custo?",
    a: "A consulta inicial para análise do seu caso é gratuita. Caso deseje prosseguir com nossa assessoria completa, informaremos os valores de forma transparente antes de qualquer compromisso.",
  },
  {
    q: "Como funciona o atendimento?",
    a: "Todo o atendimento é feito de forma online, por WhatsApp ou telefone. Você não precisa sair de casa. Nossa equipe acompanha seu processo do início ao fim.",
  },
];

const FAQ = () => (
  <section className="bg-secondary py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Perguntas frequentes
        </h2>
        <p className="mb-10 text-muted-foreground">
          Tire suas dúvidas sobre o Auxílio Maternidade.
        </p>
      </motion.div>

      <div className="mx-auto max-w-2xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border-0 bg-card px-6 shadow-card"
            >
              <AccordionTrigger className="py-4 font-heading text-sm font-semibold text-card-foreground hover:no-underline md:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm text-muted-foreground">
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
