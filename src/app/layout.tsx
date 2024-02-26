import type { Metadata } from "next";
import { Fira_Sans, Fira_Code } from "next/font/google";
import classNames from "classnames";
import "./globals.css";

const firaSans = Fira_Sans({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-sans'
});
const firaCode = Fira_Code({ 
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-fira-code' 
});

export const metadata: Metadata = {
  title: "Angelus Productions",
  description: "😇",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(firaSans.variable, firaCode.variable)}>{children}</body>
    </html>
  );
}
