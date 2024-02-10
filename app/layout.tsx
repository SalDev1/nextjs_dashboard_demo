import "./ui/global.css";
import {inter} from '@/app/ui/fonts'
import { Metadata } from "next";

export const metadata : Metadata = {
  title : {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description : 'The official Next.js Course Dashboard , built with App Router',
  metadataBase : new URL('https://next-learn-dashboard.vercel.sh')
}

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
