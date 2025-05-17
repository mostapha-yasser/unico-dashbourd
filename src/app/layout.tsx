import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

import QueryProvider from "@/components/tanstackQuery/QueryProvider";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "unico dashboard",
  description: "Private admin dashboard",
  robots: "noindex, nofollow",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex ">
        <QueryProvider>
          {children}
          <ToastContainer />
        </QueryProvider>
      </body>
    </html>
  );
}
