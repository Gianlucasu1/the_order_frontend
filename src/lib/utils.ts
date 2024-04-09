import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  // Aseguramos que date sea un objeto Date válido
  const dateObj = date instanceof Date ? date : new Date(date);
  
  // Verifica que la fecha es válida antes de intentar formatearla
  if (isNaN(dateObj.getTime())) {
    return 'Fecha inválida';
  }

  // Opciones de formato para la fecha y la hora
  const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true };

  // Formatea la fecha y la hora según las opciones
  const dateString = dateObj.toLocaleDateString('es-ES', dateOptions);
  const timeString = dateObj.toLocaleTimeString('es-ES', timeOptions);

  return `${dateString} a las ${timeString}`;
}
