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
    <html lang="en" className="h-screen">
      <body className={`${roboto.className}`}>
        <AppContextProvider>
          <MastHead />
          <Guide />
          <MiniGuide />
          <BrowserResults>{children}</BrowserResults>
        </AppContextProvider>
      </body>
    </html>
  );
}
