import { MdMenu } from "react-icons/md";

export default function Home() {
  return (
    <main className='h-screen'>
      <div className='container px-4 h-14 flex flex-row justify-between bg-gray-200'>
        <div>
          <div>
            <MdMenu />
          </div>
          <div>logo</div>
        </div>
        <div>buscar</div>
        <div>perfil</div>
      </div>
    </main>
  );
}
