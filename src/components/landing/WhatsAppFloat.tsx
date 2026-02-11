import { MessageCircle } from "lucide-react";
import { getUtmParams, buildWhatsAppUrl, WHATSAPP_PHONE } from "@/lib/utm";

const WhatsAppFloat = () => {
  const utms = getUtmParams();
  const whatsappUrl = buildWhatsAppUrl(
    WHATSAPP_PHONE,
    "Olá! Quero consultar meu Auxílio Maternidade.",
    utms
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 md:hidden"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppFloat;
