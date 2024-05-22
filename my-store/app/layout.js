import { Inter } from "next/font/google";
import "../app/style.css";
import "bootstrap/dist/css/bootstrap.css";
import '@fortawesome/fontawesome-free/css/all.css'



export const metadata = {
  title: "Eden Floral - Boutique en Ligne",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}

