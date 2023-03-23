export default function AppBar() {
  return (
    <nav id="navBar" className="bg-gray-900 h-16 w-full flex fixed z-10">
      <div className="h-full text-3xl font-serif flex gap-2 grow items-center">
        <img className="w-16 px-2" src="img/notepad.png" alt="logo"></img>
        <h1 className="text-white">
          Projeto de NotePad Com ReactJS e TailwindCSS
        </h1>
      </div>
      <div className="flex items-center px-2">
        <button className="bg-[#03ACB3] text-white text-2xl p-2 rounded-2xl">
          Nova Notificação
        </button>
      </div>
    </nav>
  );
}
