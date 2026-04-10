import { Trash2 } from "lucide-react";

export function NoteCard({ note, onDelete }) {
  return (
    <article className="group relative break-inside-avoid rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="p-3 pb-2">
        {note.title ? (
          <h3 className="text-sm font-medium text-gray-900">{note.title}</h3>
        ) : null}
        <p className="mt-1 whitespace-pre-wrap text-sm text-gray-800">
          {note.content ?? ""}
        </p>
      </div>
      <div className="flex items-center justify-between gap-2 px-3 pb-3 transition-opacity max-md:opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
        <button
          type="button"
          className="rounded px-2 py-1 text-xs font-medium text-gray-400"
          disabled
          aria-disabled="true"
        >
          Color
        </button>
        <button
          type="button"
          onClick={() => onDelete(note.id)}
          className="rounded-full p-2 text-gray-600 hover:bg-gray-100"
          aria-label="Delete note"
        >
          <Trash2 className="h-4 w-4" strokeWidth={1.75} />
        </button>
      </div>
    </article>
  );
}
