import localFont from "next/font/local";
import "./globals.css";

//Google fonts 
import { Outfit } from 'next/font/google';
const outfit = Outfit({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>

        {children}
      </body>
    </html>
  );
}
