
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gradient-to-br from-indigo-50 to-white text-gray-800 font-sans">
        {children}
      </body>
    </html>
  );
}
