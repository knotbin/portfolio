import "./globals.css";

export const metadata = {
  title: "Knotbin",
  description: "Roscoe Rubin-Rottenberg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
