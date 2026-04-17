import "./globals.css";

export const metadata = {
  title: "Test",
  description: "Test app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}