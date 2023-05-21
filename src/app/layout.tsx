import { Roboto } from "next/font/google";
import { AppDrawer } from "../components/app-drawer";
import { MastHead } from "../components/masthead";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "YouTube Clone",
  description: "Vídeos para toda família",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="h-screen">
          <MastHead />
          <AppDrawer />
          <div className="ml-60 mt-14">{children}</div>
        </main>
      </body>
    </html>
  );
}
