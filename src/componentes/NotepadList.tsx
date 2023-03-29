import { Card } from "./Card";
import { Link } from "react-router-dom";

export type Notepad = {
  id: number;
  title: string;
  subtitle: string;
  created_at: string;
  content: string;
};

export type NotepadListProps = {
  notepads: Notepad[];
};

export function NotepadList({ notepads }: NotepadListProps) {
  return (
    <div>
      {notepads.map((notepadAtual) => {
        return (
          <Card
            className="bg-white w-[90%] m-auto p-4 leading-8 rounded-md my-8 hover:bg-slate-500
     hover:text-white hover:border-white card-text-shadow md:max-w-screen-md"
            key={notepadAtual.id}
          >
            <Link to={`/publicacoes/${notepadAtual.id}`} key={notepadAtual.id}>
              <div className="flex gap-4 mb-2 py-2 border-b">
                <span className="flex flex-row gap-2 md:text-xl">
                  <h2 className="font-bold italic md:text-xl">ID:</h2>
                  {notepadAtual.id}
                </span>
                <time
                  dateTime={notepadAtual.created_at}
                  className="flex flex-row gap-2 md:text-xl"
                >
                  <h2 className="font-bold italic md:text-xl">Data:</h2>{" "}
                  {new Date(notepadAtual.created_at).toLocaleDateString(
                    "en-GB"
                  )}
                </time>
              </div>
              <span className="flex flex-row gap-2 md:text-xl">
                <h2 className="font-bold italic md:text-xl">Título:</h2>{" "}
                {notepadAtual.title}
              </span>
              <span className="flex flex-row gap-2 mt-2 md:text-xl">
                <h2 className="font-bold italic md:text-xl">Subtítulo:</h2>{" "}
                {notepadAtual.subtitle}
              </span>
              <div className="mt-6">
                <h2 className="font-bold italic md:text-xl">Nota:</h2>
                <p className="md:text-xl mt-1 text-justify">
                  {notepadAtual.content}
                </p>
              </div>
            </Link>
          </Card>
        );
      })}
    </div>
  );
}
