import Jacinta from "../assets/testimonials/jacinta-ramirez.jpg";
import Juan from "../assets/testimonials/juan-medina.jpg";
import Javier from "../assets/testimonials/javier-velazco.jpeg";

interface ITestimonios {
  nombre: string;
  ocupacion: string;
  descripcion: string;
  foto: { src: ImageMetadata; alt: string };
  pagina: string;
  seccion: string;
}

export const testimonios = [
  {
    nombre: "Jacinta Ramirez",
    ocupacion: "Asistente dirección",
    descripcion:
      "Cuanta verdad en los artículos del blog. Mi perspectiva respecto al dinero empezó a cambiar tan pronto empecé a leerlos. Te abren los ojos ha una realidad diferente.",
    foto: {
      src: Jacinta,
      alt: "Foto de Jacienta Ramírez",
    },
    pagina: "inicio",
    seccion: "testimonios",
  },
  {
    nombre: "Juan Medina",
    ocupacion: "Empleado",
    descripcion:
      "No tenía idea de cómo hacer un presupuesto. Ahora que puedo hacer un plan y fijar mis objetivos, el dinero  me comenzó a rendir más y ahora hasta puedo ahorrar.",
    foto: {
      src: Juan,
      alt: "Foto de Juan Medina",
    },
    pagina: "inicio",
    seccion: "testimonios",
  },
  {
    nombre: "Javier Velazco",
    ocupacion: "Ventas",
    descripcion: "Pensaba que el blog era bueno. ¿Pero el boletín? ¡Mejor aún!",
    foto: {
      src: Javier,
      alt: "Foto de Javier Velazco",
    },
    pagina: "inicio",
    seccion: "hero",
  },
];
