import type { TemplateConfig } from "./configType";
import en from "./configs/en";
import fr from "./configs/fr";
import ar from "./configs/ar";

export const getTemplateConfig = (lang: string = "en"): TemplateConfig => {
  switch (lang) {
    case "fr":
      return { ...fr, locale: "fr" };
    case "ar":
      return { ...ar, locale: "ar" };
    default:
      return { ...en, locale: "en" };
  }
};

const defaultTemplateConfig = en;
export default defaultTemplateConfig;
