export const metadata = {
  title: "سفك | استشارات سلامة الغذاء",
  description:
    "شركة سفك – استشارات غذائية احترافية، تطبيق HACCP، ISO 22000، مراقبة الجودة، الامتثال، وتدريب العاملين في مجال سلامة الغذاء.",
  keywords: [
    "سلامة الغذاء",
    "HACCP",
    "ISO22000",
    "استشارات",
    "السعودية",
    "سفك",
  ],
  openGraph: {
    title: "سفك",
    description: "استشارات غذائية احترافية",
  },
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}