import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

/**
 * https://nextjs.org/docs/basic-features/font-optimization#with-tailwind-css
 * See also tailwind.config.js
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} h-full font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
