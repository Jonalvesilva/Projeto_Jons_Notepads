import { useState, useEffect } from "react";
import { api } from "../Api";
import { NotepadList, Notepad } from "../componentes/NotepadList";

async function pegaNotepads() {
  const res = await api.get("/notepads");
  const notepads = res.data;
  notepads.reverse();
  return notepads;
}

const initialNotepads: Notepad[] = [];

export function Home() {
  const [notepads, setNotepads] = useState(initialNotepads);
  const [isLoading, setIsLoading] = useState(false);
  const textoCarregando = isLoading ? "Carregando..." : "";
  let error;
  useEffect(() => {
    setIsLoading(true);
    pegaNotepads().then((notepads) => {
      setNotepads(notepads);
      setIsLoading(false);
    });
    pegaNotepads().catch((e) => {
      error = e;
    });
  }, []);

  useEffect(() => {
    //console.log(`isLoading é igual a: ${isLoading}`);
  }, [isLoading]);

  return (
    <div>
      <div className="w-full text-white flex justify-center md:text-xl">
        {error}
      </div>
      <NotepadList notepads={notepads} />
    </div>
  );
}
