import { useState, useEffect } from "react";
import { Button } from "../componentes/Button";
import { LinkButton } from "../componentes/LinkButton";
import { Breadcrumbs } from "../componentes/Breadcrumbs";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "../componentes/Card";
import toast from "react-simple-toasts";
import { api } from "../Api";

export function ViewNotepad() {
  const params = useParams();
  const navigate = useNavigate();
  const [notepad, setNotepad] = useState({
    id: params.id,
    title: "",
    subtitle: "",
    content: "",
    created_at: "",
  });

  useEffect(() => {
    api.get(`/notepads/${params.id}`).then((res) => {
      const notepad = res.data;
      setNotepad(notepad);
    });
  }, []);

  return (
    <div>
      <Breadcrumbs
        links={[{ title: "Página inicial", link: "/" }]}
        key={notepad.id}
      />
      <Card
        className="bg-white w-[90%] m-auto p-4 leading-8 rounded-md my-8
      md:max-w-screen-md"
      >
        <div className="flex gap-4 mb-2 py-2 border-b">
          <span className="flex flex-row gap-2 md:text-xl">
            <h2 className="font-bold italic md:text-xl">ID:</h2>
            {notepad.id}
          </span>
          <time
            dateTime={notepad.created_at}
            className="flex flex-row gap-2 md:text-xl"
          >
            <h2 className="font-bold italic md:text-xl">Data:</h2>{" "}
            {new Date(notepad.created_at).toLocaleDateString("en-GB")}
          </time>
        </div>
        <span className="flex flex-row gap-2 md:text-xl">
          <h2 className="font-bold italic md:text-xl">Título:</h2>{" "}
          {notepad.title}
        </span>
        <span className="flex flex-row gap-2 mt-2 md:text-xl">
          <h2 className="font-bold italic md:text-xl">Subtítulo:</h2>{" "}
          {notepad.subtitle}
        </span>
        <div className="mt-6">
          <h2 className="font-bold italic md:text-xl">Nota:</h2>
          <p className="md:text-xl mt-1 text-justify">{notepad.content}</p>
        </div>
        <div className="mt-8 flex flex-row gap-4">
          <Button
            className="bg-red-600 hover:bg-red-500 btn-text-shadow px-4 py-1 rounded-xl text-white"
            onClick={async () => {
              const res = await api.delete(`/notepads/${params.id}`);
              const deleteNotepadResponse = res.data;

              if (deleteNotepadResponse.success) {
                toast("O notepad foi deletado com sucesso!");
                navigate("/");
              } else {
                toast("Houve um erro ao deletar o seu notepad. :(");
              }
            }}
          >
            Deletar
          </Button>
          <LinkButton
            className="bg-green-600 hover:bg-green-500 btn-text-shadow px-5 py-1 rounded-xl text-white"
            to={`/publicacoes/editar/${params.id}`}
          >
            Editar
          </LinkButton>
        </div>
      </Card>
    </div>
  );
}
