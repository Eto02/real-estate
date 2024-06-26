/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {},
};
export const plugins = [typography];
export const corePlugins = {
  preflight: false,
};
