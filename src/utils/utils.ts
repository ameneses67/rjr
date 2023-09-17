import type { string } from "astro/zod";

export const currentYear = new Date().getFullYear();

export const getFormattedDate = (date: Date) =>
  date
    ? new Date(date).toLocaleDateString("es-MX", {
        timeZone: "UTC",
        year: "numeric",
        month: "long",
      })
    : "";

export const slugify = (text: string) => {
  return text
    .normalize("NFD")
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
    .replace(/[\u0300-\u036f]/g, "");
};

export const removeTags = (str: string) => {
  str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
};
