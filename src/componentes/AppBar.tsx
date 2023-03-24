import { Button } from "./Button";

export default function AppBar() {
  return (
    <header
      id="navBar"
      className="bg-gray-900 h-16 min-w-[380px] w-full flex items-center sticky top-0 left-0"
    >
      <div className="h-full text-2xl md:text-3xl lg:text-4xl font-serif flex gap-2 grow items-center">
        <img className="w-14 px-2" src="img/notepad.png" alt="logo"></img>
        <h1 className="text-white">Jon's Notes</h1>
      </div>
      <div className="flex items-center px-2">
        <Button
          onClick={() => {}}
          className="bg-[#03ACB3] hover:bg-[#0fd8df] text-white text-lg btn-text-shadow p-1 rounded-2xl md:text-xl md:p-2 lg:text-2xl"
        >
          Nova Notificação
        </Button>
      </div>
    </header>
  );
}
