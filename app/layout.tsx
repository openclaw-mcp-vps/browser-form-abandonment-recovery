import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormGuard – Recover Lost Form Data After Browser Crashes",
  description: "Browser extension that saves form data locally and recovers it after crashes or accidental closes. Never lose your work again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="59da5ee1-5d3e-40dc-80c1-a46b9b3aca3f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
