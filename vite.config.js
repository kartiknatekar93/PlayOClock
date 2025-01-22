import mkcert from "vite-plugin-mkcert";

const isCodeSandbox =
  "SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env;

export default {
  root: "src/",
  publicDir: "../public",
  base: "./",
  css: {
    preprocessorOptions: {
      sass: {
        // Assuming your main Sass file is in the src directory
        additionalData: `@import "@/styles/style.scss";`,
      },
    },
  },
  server: {
    host: true,
    https: true,
    open: !isCodeSandbox, // Open if it's not a CodeSandbox
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
  },
  plugins: [mkcert()],
};
