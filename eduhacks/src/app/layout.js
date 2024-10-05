// src/app/layout.js
import "./globals.css";
import ClientLayout from "./ClientLayout"; // Import the Client Layout

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
