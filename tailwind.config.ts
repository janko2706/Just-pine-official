import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        Orbitron: ["Orbitron, sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
