// src/app/layout.js
import "./globals.css";
import ClientLayout from "./ClientLayout"; // Import the Client Layout
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Gyaan Yatra : Your AI Training Mentor</title>
        
      </Head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
