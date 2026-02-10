import { MessageCircle, Phone, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12 text-background">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-3 font-heading text-lg font-bold">Assessoria de Benefícios</h3>
          <p className="text-sm text-background/70">
            Especialistas em Auxílio Maternidade e benefícios do INSS. Atendimento humanizado e transparente.
          </p>
        </div>

        <div>
          <h3 className="mb-3 font-heading text-lg font-bold">Contato</h3>
          <ul className="space-y-2 text-sm text-background/70">
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <a href="https://wa.me/5500000000000" className="hover:text-background">
                WhatsApp: (00) 00000-0000
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(00) 0000-0000</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Seg a Sex, 8h às 18h</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-heading text-lg font-bold">Aviso Legal</h3>
          <p className="text-xs leading-relaxed text-background/60">
            Este site tem caráter exclusivamente informativo e não possui vínculo com o INSS ou qualquer órgão governamental. A assessoria oferecida consiste em orientação e acompanhamento administrativo. A aprovação do benefício depende do cumprimento dos requisitos legais junto ao INSS.
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-background/10 pt-6 text-center text-xs text-background/50">
        © {new Date().getFullYear()} Assessoria de Benefícios. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
