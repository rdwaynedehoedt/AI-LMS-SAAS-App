import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

//Google fonts 
import { Outfit } from 'next/font/google';
const outfit = Outfit({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
