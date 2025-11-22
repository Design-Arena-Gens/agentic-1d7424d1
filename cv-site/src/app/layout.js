import "./globals.css";

export const metadata = {
  title: "Présentation professionnelle",
  description:
    "Présentation simple en français pour un entretien avec un spécialiste de la maintenance de ponts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
