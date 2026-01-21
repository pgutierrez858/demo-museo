// app/layout.tsx
import { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Museo MET",
  description: "Sitio web del Museo Metropolitano de Arte",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans bg-gray-50 text-gray-900">
        <Header />

        <main className="p-6">
          {children} {/* Aquí se inyecta la página activa */}
        </main>

        <footer className="bg-gray-200 text-gray-700 p-4 mt-6">
          &copy; 2026 Museo MET
        </footer>
      </body>
    </html>
  );
}
