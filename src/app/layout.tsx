import type { Metadata } from "next";
import "../styles/globals.scss";
import { Jost } from 'next/font/google';
import Head from "next/head";
import Link from "next/link";



const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio web de Isabella Leyton Carmona",


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/avatar1.png" sizes="10x10" />
      </Head>

      <body className={jost.className}>
        {children}
      </body>
    </html>
  );
}
