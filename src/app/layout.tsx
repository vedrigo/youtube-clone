import { Roboto } from "next/font/google";
import { BrowserResults } from "../components/browser-results";
import { Guide } from "../components/guide";
import { MastHead } from "../components/masthead";
import { MiniGuide } from "../components/mini-guide";
import { AppContextProvider } from "./context";
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
    <AppContextProvider>
      <html lang="en">
        <body className={roboto.className}>
          <main className="h-screen">
            <MastHead />
            <Guide />
            <MiniGuide />
            <BrowserResults>{children}</BrowserResults>
          </main>
        </body>
      </html>
    </AppContextProvider>
  );
}
