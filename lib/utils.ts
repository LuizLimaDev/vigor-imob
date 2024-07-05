import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function priceConvert(price: string) {
  return String((Number(price) / 100).toFixed(2));
}
