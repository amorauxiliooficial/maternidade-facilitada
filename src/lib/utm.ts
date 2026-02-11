export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

const UTM_KEYS: (keyof UtmParams)[] = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

/** Parse UTM parameters from the current URL */
export function getUtmParams(): UtmParams {
  const params = new URLSearchParams(window.location.search);
  const utm: UtmParams = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  return utm;
}

/** Build a WhatsApp URL with pre-filled message including UTMs */
export function buildWhatsAppUrl(
  phone: string,
  message: string,
  utms?: UtmParams
): string {
  let fullMsg = message;
  if (utms) {
    const parts = UTM_KEYS.filter((k) => utms[k]).map((k) => `${k}=${utms[k]}`);
    if (parts.length) fullMsg += `\n\n[${parts.join(", ")}]`;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(fullMsg)}`;
}

export const WHATSAPP_PHONE = "5500000000000";
