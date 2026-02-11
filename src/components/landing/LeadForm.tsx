import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const LeadForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    cidade: "",
    contribuiu_inss: false,
  });

  const getUtmParams = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get("utm_source") || undefined,
      utm_medium: params.get("utm_medium") || undefined,
      utm_campaign: params.get("utm_campaign") || undefined,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nome.trim() || !form.whatsapp.trim() || !form.cidade.trim()) {
      toast({ title: "Preencha todos os campos obrigatórios", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const utmParams = getUtmParams();
      const { data, error } = await supabase.functions.invoke("create-lead", {
        body: { ...form, ...utmParams },
      });

      if (error) throw error;

      toast({ title: "Consulta enviada com sucesso! ✅", description: "Redirecionando para o WhatsApp..." });

      const msg = encodeURIComponent(
        `Olá! Meu nome é ${form.nome.trim()}, sou de ${form.cidade.trim()} e quero consultar meu Auxílio Maternidade.`
      );
      setTimeout(() => {
        window.open(`https://wa.me/5500000000000?text=${msg}`, "_blank");
      }, 1000);

      setForm({ nome: "", whatsapp: "", cidade: "", contribuiu_inss: false });
    } catch (err) {
      console.error(err);
      toast({ title: "Erro ao enviar consulta", description: "Tente novamente em instantes.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consulta-rapida" className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-lg rounded-2xl bg-card p-8 shadow-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
            Consulta Rápida
          </h2>
          <p className="mb-6 text-center text-sm text-muted-foreground">
            Preencha seus dados e descubra se você tem direito ao benefício
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="nome">Nome completo</Label>
              <Input
                id="nome"
                placeholder="Seu nome"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                maxLength={100}
                required
              />
            </div>

            <div>
              <Label htmlFor="whatsapp">WhatsApp</Label>
              <Input
                id="whatsapp"
                placeholder="(00) 00000-0000"
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                maxLength={20}
                required
              />
            </div>

            <div>
              <Label htmlFor="cidade">Cidade</Label>
              <Input
                id="cidade"
                placeholder="Sua cidade"
                value={form.cidade}
                onChange={(e) => setForm({ ...form, cidade: e.target.value })}
                maxLength={100}
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="contribuiu"
                checked={form.contribuiu_inss}
                onCheckedChange={(checked) =>
                  setForm({ ...form, contribuiu_inss: checked === true })
                }
              />
              <Label htmlFor="contribuiu" className="cursor-pointer text-sm">
                Já contribuiu com o INSS?
              </Label>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full gap-2 bg-accent py-6 text-base font-bold text-accent-foreground shadow-cta hover:brightness-110"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <MessageCircle className="h-5 w-5" />
              )}
              Quero analisar meu caso
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadForm;
