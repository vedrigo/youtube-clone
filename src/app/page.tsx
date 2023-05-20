import { AppDrawer } from "../components/app-drawer";
import { MastHead } from "../components/masthead";

export default function Home() {
  return (
    <main className="h-screen">
      <MastHead />
      <AppDrawer />
      <div className="ml-60 mt-14">
        <div className="ml-3 flex flex-1 space-x-3 p-3">
          <div className="h-8 w-10 flex-shrink-0 rounded-lg bg-black bg-opacity-80"></div>
          <div className="h-8 w-32 flex-shrink-0 rounded-lg bg-black bg-opacity-5"></div>
        </div>
        <div className="ml-3 p-7">
          <div className="h-48 w-80 rounded-lg bg-black bg-opacity-5"></div>
        </div>
      </div>
    </main>
  );
}
