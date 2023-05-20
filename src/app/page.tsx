import { AppDrawer } from "../components/app-drawer";
import { MastHead } from "../components/masthead";

export default function Home() {
  return (
    <main className="h-screen">
      <MastHead />
      <AppDrawer />
    </main>
  );
}
