import "./globals.css";
// import { Inter } from "next/font/google";
import NavMenu from "./NavMenu";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextSpace",
  description: "social network for next developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavMenu />

        <div className="container mx-auto py-10">{children}</div>
      </body>
    </html>
  );
}
