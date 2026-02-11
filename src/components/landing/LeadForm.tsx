import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { getUtmParams, buildWhatsAppUrl, WHATSAPP_PHONE } from "@/lib/utm";

const LeadForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    cidade: "",
    contribuiu_inss: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nome.trim() || !form.whatsapp.trim() || !form.cidade.trim()) {
      toast({ title: "Preencha todos os campos obrigatórios", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const utms = getUtmParams();
      const { error } = await supabase.functions.invoke("create-lead", {
        body: { ...form, ...utms },
      });

      if (error) throw error;

      toast({ title: "Consulta enviada! ✅", description: "Redirecionando para o WhatsApp..." });

      const msg = `Olá! Meu nome é ${form.nome.trim()}, sou de ${form.cidade.trim()} e quero consultar meu Auxílio Maternidade.`;
      const url = buildWhatsAppUrl(WHATSAPP_PHONE, msg, utms);

      setTimeout(() => window.open(url, "_blank"), 800);
      setForm({ nome: "", whatsapp: "", cidade: "", contribuiu_inss: false });
    } catch (err) {
      console.error(err);
      toast({ title: "Erro ao enviar", description: "Tente novamente.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consulta-rapida" className="bg-secondary py-14 md:py-20">
      <div className="container mx-auto px-5">
        <motion.div
          className="mx-auto max-w-md rounded-2xl bg-card p-6 shadow-card"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-1 text-center font-heading text-xl font-bold text-foreground">
            Consulta Rápida
          </h2>
          <p className="mb-5 text-center text-xs text-muted-foreground">
            Preencha e descubra se você tem direito
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <Label htmlFor="nome" className="text-sm">Nome completo</Label>
              <Input id="nome" placeholder="Seu nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} maxLength={100} required />
            </div>
            <div>
              <Label htmlFor="whatsapp" className="text-sm">WhatsApp</Label>
              <Input id="whatsapp" placeholder="(00) 00000-0000" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} maxLength={20} required />
            </div>
            <div>
              <Label htmlFor="cidade" className="text-sm">Cidade</Label>
              <Input id="cidade" placeholder="Sua cidade" value={form.cidade} onChange={(e) => setForm({ ...form, cidade: e.target.value })} maxLength={100} required />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="contribuiu" checked={form.contribuiu_inss} onCheckedChange={(checked) => setForm({ ...form, contribuiu_inss: checked === true })} />
              <Label htmlFor="contribuiu" className="cursor-pointer text-sm">Já contribuiu com o INSS?</Label>
            </div>
            <Button type="submit" disabled={loading} className="w-full gap-2 bg-accent py-5 text-base font-bold text-accent-foreground shadow-cta hover:brightness-110">
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <MessageCircle className="h-5 w-5" />}
              Quero analisar meu caso
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadForm;
