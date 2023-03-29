import { useState } from "react";
import toast from "react-simple-toasts";
import { useNavigate } from "react-router-dom";
import { TextField } from "../componentes/TextField";
import { TextArea } from "../componentes/TextArea";
import { api } from "../Api";
import { Breadcrumbs } from "../componentes/Breadcrumbs";

const initialCreateNotepad = {
  title: "",
  subtitle: "",
  content: "",
};

export function CreateNotepad() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialCreateNotepad);
  return (
    <div>
      <Breadcrumbs links={[{ title: "Página inicial", link: "/" }]} key={1} />
      <h1 className="text-center font-bold italic text-white font-serif my-10 text-2xl md:text-3xl ">
        Nova Notificação
      </h1>
      <form
        className="flex flex-col gap-2 mx-2 md:mx-auto md:max-w-screen-md"
        noValidate
        onSubmit={async (event) => {
          event.preventDefault();
          const response = await api.post("/notepads", form);
          if (response.data.success) {
            toast("O notepad foi criado com sucesso!");
            navigate("/");
          } else {
            toast("Houve um erro ao criar o seu notepad. :(");
          }
        }}
      >
        <TextField
          placeholder="Digite o título"
          value={form.title}
          onChange={(title) => setForm({ ...form, title })}
          className="h-12 rounded-xl px-2 my-2 text-lg"
        />
        <TextField
          placeholder="Digite o subtítulo"
          value={form.subtitle}
          onChange={(subtitle) => setForm({ ...form, subtitle })}
          className="h-12 rounded-xl px-2 my-2 text-lg"
        />
        <TextArea
          placeholder="Digite o conteúdo"
          value={form.content}
          onChange={(content) => setForm({ ...form, content })}
          className="h-[150px] rounded-xl p-3 my-2 text-lg"
        />
        <button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-400 text-white h-12 mb-4 py-2 px-3 rounded-xl uppercase font-bold btn-text-shadow text-sm"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
