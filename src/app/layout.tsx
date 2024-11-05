import "./globals.css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
        <Header />
        </header>
        <main className=" ">{children}</main>
        <footer>
        <Footer />
        </footer>
      </body>
    </html>
  );
}
