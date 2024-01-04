import "./ui/global.css";
import {inter} from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Adding Inter font over here will assign the font to the entire application. */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
