import type { Metadata } from "next";
import "../styles/globals.scss";
import { Jost } from 'next/font/google';




const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio web de Isabella Leyton Carmona",
  icons: {
    icon: "/images/avatar1.png",

  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body className={jost.className}>
        {children}
      </body>
    </html>
  );
}
