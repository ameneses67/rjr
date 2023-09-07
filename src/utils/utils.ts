export const currentYear = new Date().getFullYear();

export const getFormattedDate = (date: Date) =>
  date
    ? new Date(date).toLocaleDateString("es-MX", {
        year: "2-digit",
        month: "short",
        day: "numeric",
      })
    : "";
