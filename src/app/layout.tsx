import "./globals.css";
// import { Inter } from 'next/font/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-between">
        <main className="min-w-full">{children}</main>

        <footer className="text-slate-100 text-sm font-serif font-light">
          © {new Date().getFullYear()} All rights reserved.
        </footer>
      </body>
    </html>
  );
}
