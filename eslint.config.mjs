import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// const eslintConfig = [...compat.extends("next/core-web-vitals")];
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"), // Extend Next.js recommended ESLint rules
  {
    files: ["**/*.js"], // Target JavaScript files
    rules: {
      semi: ["error", "always"], // Example rule: enforce semicolons
      "no-unused-vars": ["warn"], // Example rule: warn on unused variables
    },
  },
];

export default eslintConfig;
