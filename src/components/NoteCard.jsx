import { GripVertical, Trash2 } from "lucide-react";

export function NoteCard({ note, onDelete, className = "", dragDisabled }) {
  return (
    <article
      className={`group relative break-inside-avoid rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-[#5f6368] dark:bg-[#303134] dark:hover:shadow-lg dark:hover:shadow-black/20 ${className}`}
    >
      <div className="flex items-start gap-1 p-3 pb-2">
        {!dragDisabled && (
          <span
            className="mt-0.5 -ml-1 inline-flex shrink-0 rounded p-1 text-gray-600 opacity-70 dark:text-[#e8eaed]"
            aria-hidden
          >
            <GripVertical className="h-4 w-4" strokeWidth={2} />
          </span>
        )}
        <div className="min-w-0 flex-1">
          {note.title ? (
            <h3 className="text-sm font-medium text-gray-900 dark:text-[#e8eaed]">
              {note.title}
            </h3>
          ) : null}
          <p className="mt-1 whitespace-pre-wrap text-sm text-gray-800 dark:text-[#e8eaed]">
            {note.content ?? ""}
          </p>
        </div>
      </div>
      <div
        className="flex items-center justify-between gap-2 px-3 pb-3 transition-opacity max-md:opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
        onPointerDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="rounded px-2 py-1 text-xs font-medium text-gray-400 dark:text-[#9aa0a6]"
          disabled
          aria-disabled="true"
        >
          Color
        </button>
        <button
          type="button"
          onClick={() => onDelete(note.id)}
          className="rounded-full p-2 text-gray-600 hover:bg-gray-100 dark:text-[#e8eaed] dark:hover:bg-[#3c4043]"
          aria-label="Delete note"
        >
          <Trash2 className="h-4 w-4" strokeWidth={1.75} />
        </button>
      </div>
    </article>
  );
}
